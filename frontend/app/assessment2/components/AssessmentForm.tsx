'use client';

import { useAssessmentForm } from '../hooks/useAssessmentForm';
import { FormError } from './FormError';

export function AssessmentForm() {
  const {
    name,
    email,
    errors,
    isSubmitting,
    handleNameChange,
    handleEmailChange,
    handleSubmit,
  } = useAssessmentForm();

  return (
    <div id="assessment-form" className="forest-card p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-[var(--grove)]">
        Start Your Complimentary Assessment
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[var(--grove)]">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            disabled={isSubmitting}
            required
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="John Smith"
          />
          <FormError message={errors.name} id="name-error" />
        </div>

        <div className="mb-8">
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[var(--grove)]">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            disabled={isSubmitting}
            required
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? 'true' : 'false'}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white dark:bg-[var(--panel)] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--forest)] disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="john@fundname.com"
          />
          <FormError message={errors.email} id="email-error" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 text-lg rounded-2xl forest-button-gradient text-white font-bold border border-[#1f4d20] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Starting...
            </span>
          ) : (
            'Start Assessment →'
          )}
        </button>

        <p className="text-xs text-center text-[var(--muted)] mt-4">
          We respect your privacy. Your information will only be used to send you your assessment
          results.
        </p>
      </form>
    </div>
  );
}
