'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAssessment } from '../useAssessment';
import { assessmentQuestions, Question } from '../data/questions';
import { trackPageView, trackEvent } from '../utils/analytics';

export default function AssessmentQuiz() {
  const router = useRouter();
  const { name, email, setAnswer, setOpenResponse, getAnswer, setComplete, setSubmittedAt } =
    useAssessment();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;

  useEffect(() => {
    // TEMPORARILY DISABLED FOR DEMO - redirect if no user info
    // if (!name || !email) {
    //   router.push('/assessment');
    //   return;
    // }

    trackPageView('/assessment/quiz', 'Assessment Quiz');
  }, [name, email, router]);

  useEffect(() => {
    // Track quiz start on first question
    if (currentQuestionIndex === 0) {
      trackEvent('assessment_quiz_started', {
        event_category: 'engagement',
      });
    }
  }, []);

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleMultipleChoice = (questionId: string, value: string) => {
    const currentAnswer = answers[questionId] || [];
    const newAnswer = currentAnswer.includes(value)
      ? currentAnswer.filter((v: string) => v !== value)
      : [...currentAnswer, value];
    handleAnswer(questionId, newAnswer);
  };

  const handleNext = () => {
    // Save current answer
    const answer = answers[currentQuestion.id];
    if (currentQuestion.number <= 10 && typeof answer === 'number') {
      setAnswer(currentQuestion.id as any, answer);
    } else {
      setOpenResponse(currentQuestion.id as any, JSON.stringify(answer));
    }

    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Save all answers to store
      assessmentQuestions.forEach((q) => {
        const answer = answers[q.id];
        if (q.number <= 10 && typeof answer === 'number') {
          setAnswer(q.id as any, answer);
        } else {
          setOpenResponse(q.id as any, JSON.stringify(answer));
        }
      });

      setComplete(true);
      setSubmittedAt();

      trackEvent('assessment_completed', {
        event_category: 'conversion',
        event_label: 'Assessment Quiz Completed',
      });

      router.push('/assessment/results');
    } catch (error) {
      console.error('Error submitting assessment:', error);
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (!answer) return false;

    if (currentQuestion.type === 'multiple') {
      return Array.isArray(answer) && answer.length > 0;
    }
    if (currentQuestion.type === 'multiple-with-text') {
      return answer.selected && Array.isArray(answer.selected) && answer.selected.length > 0;
    }
    if (currentQuestion.type === 'table') {
      return Object.keys(answer || {}).length > 0;
    }
    if (currentQuestion.type === 'text') {
      // Q15 is optional
      return currentQuestion.number === 15 || (answer && answer.trim().length > 0);
    }
    return true;
  };

  // Handle Enter key to advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && canProceed() && !isSubmitting) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, answers, isSubmitting]);

  // TEMPORARILY DISABLED FOR DEMO
  // if (!name || !email) {
  //   return null; // Will redirect
  // }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[var(--muted)]">
            Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
          </span>
          <span className="text-sm font-semibold text-[var(--grove)]">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-[var(--border)] rounded-full h-2">
          <div
            className="bg-[var(--forest)] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="forest-card p-8 md:p-10 mb-6">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="forest-badge text-xs">{currentQuestion.category}</span>
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--grove)]">
          {currentQuestion.question}
        </h2>

        {/* Answer Input */}
        <QuestionInput
          question={currentQuestion}
          value={answers[currentQuestion.id]}
          onChange={(value) => handleAnswer(currentQuestion.id, value)}
          onMultipleChange={(value) => handleMultipleChoice(currentQuestion.id, value)}
          onAutoAdvance={() => {
            setTimeout(() => handleNext(), 300);
          }}
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        {currentQuestionIndex > 0 && (
          <button
            onClick={handleBack}
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl bg-white dark:bg-[var(--panel)] text-[var(--grove)] border border-[var(--border)] font-semibold hover:bg-[#f0f7f0] dark:hover:bg-[#243a28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
        )}

        <button
          onClick={handleNext}
          disabled={!canProceed() || isSubmitting}
          className="ml-auto px-8 py-3 rounded-xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Submitting...'
          ) : currentQuestionIndex === assessmentQuestions.length - 1 ? (
            'Get My Results →'
          ) : (
            'Next →'
          )}
        </button>
      </div>

      {/* Exit Link */}
      <div className="mt-6 text-center">
        <Link
          href="/assessment"
          className="text-sm text-[var(--muted)] hover:text-[var(--forest)] transition-colors"
        >
          Save and exit
        </Link>
      </div>
    </div>
  );
}

// Question Input Component
interface QuestionInputProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  onMultipleChange: (value: string) => void;
  onAutoAdvance?: () => void;
}

function QuestionInput({ question, value, onChange, onMultipleChange, onAutoAdvance }: QuestionInputProps) {
  if (question.type === 'single') {
    return (
      <div className="space-y-3">
        {question.options?.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] cursor-pointer hover:bg-[#f0f7f0] dark:hover:bg-[#0f1511] transition-colors"
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => {
                onChange(option.value);
                // Auto-advance for single-choice questions
                if (onAutoAdvance) {
                  onAutoAdvance();
                }
              }}
              className="w-5 h-5 text-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]"
            />
            <span className="text-[var(--ink)]">{option.label}</span>
          </label>
        ))}
      </div>
    );
  }

  if (question.type === 'multiple') {
    const selectedValues = value || [];
    return (
      <div className="space-y-3">
        {question.options?.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] cursor-pointer hover:bg-[#f0f7f0] dark:hover:bg-[#0f1511] transition-colors"
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => onMultipleChange(option.value)}
              className="w-5 h-5 text-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)] rounded"
            />
            <span className="text-[var(--ink)]">{option.label}</span>
          </label>
        ))}
      </div>
    );
  }

  if (question.type === 'multiple-with-text') {
    const currentValue = value || { selected: [], details: {} };
    const selectedValues = currentValue.selected || [];
    const details = currentValue.details || {};

    return (
      <div className="space-y-3">
        {question.options?.map((option) => (
          <div key={option.value} className="space-y-2">
            <label className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] cursor-pointer hover:bg-[#f0f7f0] dark:hover:bg-[#0f1511] transition-colors">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={() => {
                  const newSelected = selectedValues.includes(option.value)
                    ? selectedValues.filter((v: string) => v !== option.value)
                    : [...selectedValues, option.value];
                  onChange({ selected: newSelected, details });
                }}
                className="w-5 h-5 text-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)] rounded"
              />
              <span className="text-[var(--ink)]">{option.label}</span>
            </label>
            {selectedValues.includes(option.value) && (
              <input
                type="text"
                placeholder={`Enter ${option.label} name`}
                value={details[option.value] || ''}
                onChange={(e) => {
                  const newDetails = { ...details, [option.value]: e.target.value };
                  onChange({ selected: selectedValues, details: newDetails });
                }}
                className="w-full px-4 py-2 ml-8 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (question.type === 'number') {
    return (
      <div className="space-y-3">
        {question.options?.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border)] cursor-pointer hover:bg-[#f0f7f0] dark:hover:bg-[#0f1511] transition-colors"
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="w-5 h-5 text-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]"
            />
            <span className="text-[var(--ink)]">{option.label}</span>
          </label>
        ))}
      </div>
    );
  }

  if (question.type === 'table') {
    const tableValues = value || {};
    return (
      <div className="space-y-3">
        {question.tableRows?.map((row) => (
          <div key={row} className="flex items-center gap-4">
            <label className="flex-1 text-[var(--ink)] font-medium">{row}</label>
            <input
              type="number"
              min="0"
              value={tableValues[row] || ''}
              onChange={(e) =>
                onChange({
                  ...tableValues,
                  [row]: e.target.value,
                })
              }
              className="w-24 px-4 py-2 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
              placeholder="0"
            />
          </div>
        ))}
      </div>
    );
  }

  if (question.type === 'text') {
    return (
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        rows={question.number === 15 ? 4 : 2}
        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)]"
      />
    );
  }

  return null;
}
