'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessment } from '../useAssessment';
import {
  validateAssessmentForm,
  hasValidationErrors,
  ValidationErrors,
} from '../utils/validation';
import { trackEvent } from '../utils/analytics';

export function useAssessmentForm() {
  const router = useRouter();
  const { setUserInfo, setStartedAt } = useAssessment();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // Clear error when user starts typing
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateAssessmentForm(name, email);
    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) {
      return;
    }

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Track analytics event
      trackEvent('assessment_started', {
        event_category: 'engagement',
        event_label: 'Assessment Form Submission',
      });

      // Save user info and timestamp
      setUserInfo(name, email);
      setStartedAt();

      // Navigate to quiz
      router.push('/assessment2/quiz');
    } catch (error) {
      console.error('Error starting assessment:', error);
      setIsSubmitting(false);
    }
  };

  return {
    name,
    email,
    errors,
    isSubmitting,
    handleNameChange,
    handleEmailChange,
    handleSubmit,
  };
}
