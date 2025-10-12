export interface ValidationErrors {
  name: string;
  email: string;
  consent: string;
}

export function validateAssessmentForm(name: string, email: string, consent: boolean): ValidationErrors {
  const errors: ValidationErrors = { name: '', email: '', consent: '' };

  // Name validation
  if (!name.trim()) {
    errors.name = 'Name is required';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email';
  }

  // Consent validation
  if (!consent) {
    errors.consent = 'Please agree to the terms to proceed.';
  }

  return errors;
}

export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.values(errors).some((error) => error !== '');
}
