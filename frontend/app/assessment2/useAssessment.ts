'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define question ID types
type BestPracticeQuestionId = `q${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`;
type OpenEndedQuestionId = 'q11' | 'q12' | 'q13' | 'q14' | 'q15';
type QuestionId = BestPracticeQuestionId | OpenEndedQuestionId;

// Define assessment state interface
interface AssessmentState {
  // User info
  name: string;
  email: string;

  // Answers
  answers: Record<BestPracticeQuestionId, number>;
  openResponses: Record<OpenEndedQuestionId, string>;

  // Metadata
  startedAt?: Date;
  submittedAt?: Date;
  isComplete: boolean;

  // Actions
  setUserInfo: (name: string, email: string) => void;
  setAnswer: (questionId: BestPracticeQuestionId, value: number) => void;
  setOpenResponse: (questionId: OpenEndedQuestionId, value: string) => void;
  getAnswer: (questionId: QuestionId) => string | number | undefined;
  calculateScore: () => number;
  setStartedAt: () => void;
  setSubmittedAt: () => void;
  setComplete: (value: boolean) => void;
  reset: () => void;
}

// Zustand store
export const useAssessment = create<AssessmentState>()(
  persist(
    (set, get) => ({
      name: '',
      email: '',
      answers: {} as Record<BestPracticeQuestionId, number>,
      openResponses: {} as Record<OpenEndedQuestionId, string>,
      startedAt: undefined,
      submittedAt: undefined,
      isComplete: false,

      setUserInfo: (name, email) => set({ name, email }),

      setAnswer: (questionId, value) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: value,
          },
        })),

      setOpenResponse: (questionId, value) =>
        set((state) => ({
          openResponses: {
            ...state.openResponses,
            [questionId]: value,
          },
        })),

      getAnswer: (questionId) => {
        if (questionId.startsWith('q') && Number(questionId.slice(1)) <= 10) {
          return get().answers[questionId as BestPracticeQuestionId];
        } else {
          return get().openResponses[questionId as OpenEndedQuestionId];
        }
      },

      calculateScore: () => {
        const answers = get().answers;
        let totalScore = 0;
        let maxScore = 0;

        for (let i = 1; i <= 10; i++) {
          const key = `q${i}` as BestPracticeQuestionId;
          const answer = answers[key];
          if (typeof answer === 'number') {
            totalScore += answer;
            maxScore += 5;
          }
        }

        return maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
      },

      setStartedAt: () => set({ startedAt: new Date() }),
      setSubmittedAt: () => set({ submittedAt: new Date() }),
      setComplete: (value) => set({ isComplete: value }),

      reset: () =>
        set({
          name: '',
          email: '',
          answers: {} as Record<BestPracticeQuestionId, number>,
          openResponses: {} as Record<OpenEndedQuestionId, string>,
          startedAt: undefined,
          submittedAt: undefined,
          isComplete: false,
        }),
    }),
    {
      name: 'groveline-assessment-storage',
    }
  )
);
