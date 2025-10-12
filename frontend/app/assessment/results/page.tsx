'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAssessment } from '../useAssessment';
import { generateInsights, calculateAssessmentScore, calculateOverallScore } from '../utils/scoring';
import { trackPageView, trackEvent } from '../utils/analytics';
import { supabase } from '@/lib/supabase';

export default function AssessmentResults() {
  const router = useRouter();
  const { name, email, answers, openResponses, isComplete } = useAssessment();
  const [insights, setInsights] = useState<any[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    // Only proceed when assessment completed
    if (!isComplete || !name || !email) {
      trackPageView('/assessment/results-pending', 'Assessment Results (Pending)');
      return;
    }

    // Parse answers
    const allAnswers: Record<string, any> = { ...answers };
    Object.keys(openResponses).forEach((key) => {
      try {
        allAnswers[key] = JSON.parse(openResponses[key as keyof typeof openResponses]);
      } catch {
        allAnswers[key] = openResponses[key as keyof typeof openResponses];
      }
    });

    // Generate insights
    const generatedInsights = generateInsights(allAnswers);
    setInsights(generatedInsights);

    // Calculate score
    const scores = calculateAssessmentScore(allAnswers);
    const score = calculateOverallScore(scores);
    setOverallScore(score);

    // Submit to database
    submitAssessment(score);

    trackPageView('/assessment/results', 'Assessment Results');
  }, [isComplete, name, email, answers, openResponses, router]);

  const submitAssessment = async (score: number) => {
    try {
      // Insert assessment record
      const { data: assessment, error: assessmentError } = await supabase
        .from('assessments')
        .insert({
          name,
          email,
          started_at: new Date().toISOString(),
          submitted_at: new Date().toISOString(),
          completed: true,
          overall_score: score,
        })
        .select()
        .single();

      if (assessmentError) {
        console.error('Error inserting assessment:', assessmentError);
        return;
      }

      console.log('[Assessment] Saved to Supabase, ID:', assessment.id);

      // Prepare answer records
      const answerRecords: Array<{
        assessment_id: number;
        question_id: string;
        question_number: number;
        answer_value: string;
        answer_score: number | null;
      }> = [];

      // Add scored answers (q1-q10)
      Object.entries(answers).forEach(([questionId, value]) => {
        answerRecords.push({
          assessment_id: assessment.id,
          question_id: questionId,
          question_number: parseInt(questionId.replace('q', '')),
          answer_value: JSON.stringify(value),
          answer_score: typeof value === 'number' ? value : null,
        });
      });

      // Add open-ended responses (q11-q15)
      Object.entries(openResponses).forEach(([questionId, value]) => {
        answerRecords.push({
          assessment_id: assessment.id,
          question_id: questionId,
          question_number: parseInt(questionId.replace('q', '')),
          answer_value: value,
          answer_score: null,
        });
      });

      // Insert all answers
      const { error: answersError } = await supabase
        .from('assessment_answers')
        .insert(answerRecords);

      if (answersError) {
        console.error('Error inserting answers:', answersError);
      } else {
        console.log('[Assessment] All answers saved successfully');
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  };

  const handleExportPDF = async () => {
    setIsGeneratingPDF(true);
    trackEvent('assessment_pdf_downloaded', {
      event_category: 'conversion',
      score: overallScore,
    });

    try {
      // Dynamic import to reduce bundle size
      const jsPDF = (await import('jspdf')).default;
      const doc = new jsPDF();

      // Page setup
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      let y = 20;

      // Header
      doc.setFontSize(20);
      doc.setTextColor(44, 95, 45); // grove color
      doc.text('Operational Readiness Assessment', margin, y);
      y += 10;

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`${name} | ${email}`, margin, y);
      y += 15;

      // Score
      doc.setFontSize(16);
      doc.text(`Overall Readiness Score: ${overallScore}%`, margin, y);
      y += 15;

      // Insights
      doc.setFontSize(14);
      doc.text('Key Insights & Recommendations', margin, y);
      y += 10;

      insights.forEach((insight, index) => {
        if (y > 250) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        const icon = insight.isStrength ? '✓' : '!';
        doc.text(`${icon} ${insight.category}`, margin, y);
        y += 7;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const summaryLines = doc.splitTextToSize(insight.summary, pageWidth - 2 * margin);
        doc.text(summaryLines, margin, y);
        y += summaryLines.length * 5 + 5;

        insight.recommendations.forEach((rec: any) => {
          if (y > 270) {
            doc.addPage();
            y = 20;
          }
          const recLines = doc.splitTextToSize(`• ${rec.text}`, pageWidth - 2 * margin - 5);
          doc.text(recLines, margin + 5, y);
          y += recLines.length * 5;
        });

        y += 5;
      });

      // Add Groveline intro on new page
      doc.addPage();
      y = 20;

      doc.setFontSize(16);
      doc.setTextColor(44, 95, 45);
      doc.text('About Groveline.ai', margin, y);
      y += 10;

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      const introText = [
        'At Groveline.ai, we help alternative investment managers build the operational backbone',
        'required to scale with confidence. Whether you are launching a fund, preparing for allocator',
        'due diligence, or modernizing your infrastructure, we deliver fractional COO, CFO, and CCO',
        'services backed by deep allocator insight and automation expertise.',
        '',
        'Our founder, Chris Hainlen, has launched multiple funds from zero to over $150M+ in',
        'institutional commitments, designed policy stacks that pass diligence at 60% of traditional',
        'cost, and conducted 900+ operational due diligence reviews across hedge fund, private',
        'equity, and real estate strategies.',
      ];

      introText.forEach((line) => {
        doc.text(line, margin, y);
        y += 6;
      });

      y += 10;
      doc.setFontSize(14);
      doc.setTextColor(44, 95, 45);
      doc.text('What We Offer', margin, y);
      y += 8;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const services = [
        'Fund Launch Support: SEC registration, structuring, vendor onboarding',
        'Fractional Executive Services: Interim COO, CFO, and CCO support',
        'Due Diligence Preparation: Policy drafting and audit readiness',
        'System Implementation: OMS/PMS integration and automation',
        'Valuation & Governance Frameworks: Custom policy stacks',
      ];

      services.forEach((service) => {
        doc.text(`• ${service}`, margin + 5, y);
        y += 6;
      });

      y += 10;
      doc.setFontSize(12);
      doc.setTextColor(44, 95, 45);
      doc.text('Contact Us', margin, y);
      y += 7;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text('Email: hello@groveline.ai', margin, y);
      y += 6;
      doc.text('Phone: 903-605-6399', margin, y);
      y += 6;
      doc.text('Web: https://groveline.ai', margin, y);

      // Save PDF
      doc.save(`Groveline-Assessment-${name.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[var(--forest)]';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Strong Operational Foundation';
    if (score >= 60) return 'Good Progress, Room to Improve';
    if (score >= 40) return 'Significant Gaps to Address';
    return 'High Priority Areas Identified';
  };

  if (!isComplete || !name || !email) {
    return (
      <div className="max-w-[900px] mx-auto px-4 py-12 md:py-20">
        <div className="forest-card p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">Finish the assessment</h2>
          <p className="text-[var(--muted)] mb-6">Please complete the assessment to view results.</p>
          <a href="/assessment" className="px-6 py-3 rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity">Go to Assessment</a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--grove)]">
          Your Operational Readiness Results
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Based on your responses, here's where you stand
        </p>
      </div>

      {/* Score Card */}
      <div className="forest-card p-8 md:p-10 mb-10 text-center bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
        <div className="text-3xl md:text-4xl font-bold text-[var(--grove)] mb-4">{getScoreLabel(overallScore)}</div>
        <p className="text-lg text-[var(--muted)]">
          {insights.filter((i) => !i.isStrength).length > 0
            ? 'We have identified key areas where you can strengthen your operational infrastructure'
            : 'Your operational foundation is solid - keep building on these strengths'}
        </p>
      </div>

      {/* Insights */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[var(--grove)]">Key Insights & Recommendations</h2>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`forest-card p-6 md:p-8 ${
                insight.isStrength
                  ? 'border-l-4 border-[var(--forest)]'
                  : 'border-l-4 border-yellow-500'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl" aria-hidden="true">
                  {insight.isStrength ? '✅' : '🔍'}
                </span>
                <div>
                  <div className="text-xs font-semibold text-[var(--muted)] mb-1">
                    {insight.area}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--grove)]">{insight.category}</h3>
                </div>
              </div>
              <p className="text-[var(--ink)] mb-4 ml-12">{insight.summary}</p>
              <div className="ml-12 space-y-2">
                <p className="text-sm font-semibold text-[var(--grove)]">
                  {insight.isStrength ? 'What This Means:' : 'Recommendations:'}
                </p>
                {insight.recommendations.map((rec: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--forest)] mt-1">•</span>
                    <span className="text-sm text-[var(--muted)]">
                      {rec.text}
                      {rec.link && (
                        <>
                          {' '}
                          <a
                            href={rec.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--forest)] hover:underline"
                          >
                            ({rec.linkText || 'Learn more'})
                          </a>
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Groveline */}
      <div className="forest-card p-8 md:p-10 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-[var(--grove)]">
          About Groveline.ai — Institutional-Grade Infrastructure for Emerging Managers
        </h2>
        <p className="text-[var(--muted)] mb-4 leading-relaxed">
          At Groveline.ai, we help alternative investment managers build the operational backbone
          required to scale with confidence. Whether you're launching a fund, preparing for allocator
          due diligence, or modernizing your infrastructure, we deliver fractional COO, CFO, and CCO
          services backed by deep allocator insight and automation expertise.
        </p>
        <p className="text-[var(--muted)] mb-6 leading-relaxed">
          Our founder, Chris Hainlen, has launched multiple funds from zero to over $150M+ in
          institutional commitments, designed policy stacks that pass diligence at 60% of traditional
          cost, and conducted 900+ operational due diligence reviews across hedge fund, private
          equity, and real estate strategies.
        </p>

        <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-6 rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-3 text-[var(--grove)]">What We Offer</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--forest)]">•</span>
              <span>
                <strong>Fund Launch Support:</strong> SEC registration, structuring, vendor
                onboarding, and documentation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--forest)]">•</span>
              <span>
                <strong>Fractional Executive Services:</strong> Interim COO, CFO, and CCO support
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--forest)]">•</span>
              <span>
                <strong>Due Diligence Preparation:</strong> Policy drafting, audit readiness, and
                allocator-aligned workflows
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--forest)]">•</span>
              <span>
                <strong>System Implementation & Automation:</strong> OMS/PMS integration,
                reconciliation controls
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--forest)]">•</span>
              <span>
                <strong>Valuation & Governance Frameworks:</strong> Custom policy stacks for
                hard-to-value assets
              </span>
            </li>
          </ul>
        </div>

        <p className="text-[var(--grove)] font-semibold">
          💡 Why It Matters: Allocators walk away from 60% of funds during operational due diligence.
          We help you avoid that outcome by building infrastructure that passes scrutiny — and scales
          with your ambitions.
        </p>
      </div>

      {/* CTA Section */}
      <div className="forest-card p-8 md:p-10 text-center bg-gradient-to-br from-[#e8f5e8] to-[#f0f7f0] dark:from-[#0f1511] dark:to-[#0f1410]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--grove)]">
          Ready to Address These Gaps?
        </h2>
        <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
          Let's discuss how Groveline can help you build institutional-grade infrastructure at 60% of
          traditional costs.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={handleExportPDF}
            disabled={isGeneratingPDF}
            className="px-6 py-3 rounded-xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingPDF ? 'Generating PDF...' : '📄 Export PDF Report'}
          </button>

          <a
            href="https://outlook.office.com/bookwithme/user/1a049f8f31714e3e8efdf1ab744ed4d3@groveline.ai/meetingtype/guwMtq7wYkSN_8DLpJ5j3Q2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('assessment_cta_clicked', {
                event_category: 'conversion',
                event_label: 'Schedule Intro from Results',
              })
            }
            className="px-8 py-3 rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity"
          >
            Schedule a 20-minute Intro
          </a>
        </div>

        <div className="text-sm text-[var(--muted)]">
          <p className="mb-2">
            <strong className="text-[var(--grove)]">Chris Hainlen</strong> • Founder, Groveline.ai
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:hello@groveline.ai" className="hover:text-[var(--forest)] transition-colors">
              hello@groveline.ai
            </a>
            <span>•</span>
            <a href="tel:903-605-6399" className="hover:text-[var(--forest)] transition-colors">
              903-605-6399
            </a>
            <span>•</span>
            <Link href="/" className="hover:text-[var(--forest)] transition-colors">
              groveline.ai
            </Link>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--forest)] transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
