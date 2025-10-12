'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AssessmentHero } from './components/AssessmentHero';
import { AssessmentBenefits } from './components/AssessmentBenefits';
import { AssessmentCredibility } from './components/AssessmentCredibility';
import { AssessmentForm } from './components/AssessmentForm';
import { trackPageView } from './utils/analytics';

export default function AssessmentIntro() {
  useEffect(() => {
    trackPageView('/assessment', 'Free Operational Readiness Assessment');
  }, []);

  return (
    <div className="max-w-[900px] mx-auto px-4 py-12 md:py-20">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-[var(--muted)] hover:text-[var(--forest)] transition-colors text-sm"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <AssessmentHero />

      {/* Benefits & Readiness Hooks */}
      <AssessmentBenefits />

      {/* Credibility Section */}
      <AssessmentCredibility />

      {/* Form Section */}
      <AssessmentForm />

      {/* Trust Signal */}
      <div className="mt-10 text-center">
        <p className="text-sm text-[var(--muted)]">
          Join emerging managers who've raised $350M+ with institutional-grade operations
        </p>
      </div>
    </div>
  );
}
