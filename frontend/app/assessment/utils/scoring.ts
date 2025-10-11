interface ScoreMapping {
  [key: string]: number;
}

interface QuestionScore {
  questionId: string;
  score: number;
  maxScore: number;
  category: string;
  area: string;
}

interface InsightRecommendation {
  text: string;
  link?: string;
  linkText?: string;
}

export interface Insight {
  area: string;
  category: string;
  summary: string;
  recommendations: InsightRecommendation[];
  score: number;
  isStrength?: boolean;
}

// Scoring mappings for each question (1 = high risk, 5 = best practice)
const scoreMappings: Record<string, ScoreMapping> = {
  q1: { yes: 5, no: 3, unsure: 4 },
  q2: { accredited: 3, qualified: 5, both: 4, unsure: 2 },
  q3: {
    salary: 2,
    salary_bonus: 3,
    salary_equity: 5,
    salary_phantom: 4,
    salary_vest: 5,
  },
  q4: { not_allowed: 3, allowed_freely: 1, preclearance: 5 },
  q5: { yes: 4, no: 4, unsure: 2 },
  q6: { '1': 2, '2': 5, '3': 5, '4': 5, '5': 5 },
  q7: { '1': 4, '2': 3, '3': 3, '4': 2, '5': 2 },
  q8: { yes: 3, no: 5, possibly: 4 },
};

// Insight templates for low-scoring areas
const insightTemplates: Record<string, Insight> = {
  q1: {
    area: 'Fund Formation',
    category: 'Fund Structure',
    summary: 'Consider a flexible fund structure to accommodate future growth',
    recommendations: [
      {
        text: 'Consider starting with a mini-master structure to keep options open as your investor base evolves',
      },
      {
        text: 'Review SEC guidance on private fund formation',
        link: 'https://www.sec.gov/investment/private-fund-advisers',
        linkText: 'SEC Private Fund Advisers',
      },
    ],
    score: 0,
  },
  q2: {
    area: 'Regulatory Strategy',
    category: 'Investor Type',
    summary: 'Clarify your exemption strategy early to avoid costly restructuring',
    recommendations: [
      {
        text: 'Document your chosen exemption (3(c)(1) or 3(c)(7)) in your offering documents',
      },
      {
        text: 'Understand investor limits: 3(c)(1) allows 99 investors, 3(c)(7) allows 2,000 qualified purchasers',
      },
      {
        text: 'Review exemption strategies',
        link: 'https://carta.com/learn/equity/private-company/section-3c1-and-3c7/',
        linkText: 'Carta Guide to 3(c)(1) vs 3(c)(7)',
      },
    ],
    score: 0,
  },
  q3: {
    area: 'Team Alignment',
    category: 'Compensation Structure',
    summary: 'Strengthen employee alignment with performance-based incentives',
    recommendations: [
      {
        text: 'Consider adding equity or phantom equity to deepen long-term alignment',
      },
      {
        text: 'Implement vesting schedules to retain key talent',
      },
      {
        text: 'Document compensation structures clearly for allocator due diligence',
      },
    ],
    score: 0,
  },
  q4: {
    area: 'Compliance Culture',
    category: 'Personal Trading Policy',
    summary: 'Your personal trading policy may raise red flags during due diligence',
    recommendations: [
      {
        text: 'Implement a pre-clearance process for employee trades',
      },
      {
        text: 'Document the policy in your compliance manual',
      },
      {
        text: 'Train staff on conflict-of-interest scenarios',
      },
      {
        text: 'Review ACA best practices for personal trading',
        link: 'https://www.acaglobal.com/industry-insights/best-practices-capturing-employee-personal-trading-activity-sec-regulated-firms/#:~:text=Under%20SEC%20regulations%2C%20most%20financial,their%20trading%20and%20investment%20processes.',
        linkText: 'ACA Best Practices for Personal Trading',
      },
    ],
    score: 0,
  },
  q5: {
    area: 'Fund Docs & Budgeting',
    category: 'Expense Treatment',
    summary: 'Unclear expense policies can delay fundraising and create legal exposure',
    recommendations: [
      {
        text: 'Review offering documents for expense disclosures',
      },
      {
        text: 'Clarify which costs are fund-borne vs manager-borne',
      },
      {
        text: 'Align with industry standards to avoid allocator pushback',
      },
      {
        text: 'Review SEC cost principles',
        link: 'https://www.sec.gov/investment/private-fund-advisers',
        linkText: 'SEC Private Fund Adviser FAQs',
      },
    ],
    score: 0,
  },
  q6: {
    area: 'Internal Controls',
    category: 'Fund Signatories',
    summary: 'Single signatory creates unnecessary risk',
    recommendations: [
      {
        text: 'Implement dual signatory requirements for fund transfers',
      },
      {
        text: 'Document authorization procedures in your control framework',
      },
      {
        text: 'Consider segregation of duties between trading and operations',
      },
    ],
    score: 0,
  },
  q7: {
    area: 'Infrastructure',
    category: 'Prime Brokerage',
    summary: 'Multiple prime brokers require robust systems for reconciliation',
    recommendations: [
      {
        text: 'Implement an OMS/PMS system to track positions across multiple brokers',
      },
      {
        text: 'Build automated reconciliation workflows',
      },
      {
        text: 'Document your multi-PB strategy for allocator due diligence',
      },
      {
        text: 'Review AIMA guidance',
        link: 'https://www.marex.com/insights/prime-brokerage-explained',
        linkText: 'Prime Brokerage Best Practices',
      },
    ],
    score: 0,
  },
  q8: {
    area: 'Valuation Policy',
    category: 'Hard-to-Value Assets',
    summary: 'Hard-to-value assets require a formal pricing framework',
    recommendations: [
      {
        text: 'Draft a valuation policy with tiered pricing sources',
      },
      {
        text: 'Include governance procedures for pricing overrides',
      },
      {
        text: 'Use external benchmarks for illiquid assets',
      },
      {
        text: 'Review IOSCO valuation principles',
        link: 'https://www.iosco.org/library/pubdocs/pdf/IOSCOPD335.pdf',
        linkText: 'IOSCO Hedge Fund Valuation Principles',
      },
    ],
    score: 0,
  },
};

// Positive insights for high-scoring areas
const strengthTemplates: Record<string, Insight> = {
  q1: {
    area: 'Fund Formation',
    category: 'Fund Structure',
    summary: 'Your fund structure is well-positioned for growth',
    recommendations: [
      { text: 'You have a clear strategy for accommodating different investor types' },
    ],
    score: 0,
    isStrength: true,
  },
  q2: {
    area: 'Regulatory Strategy',
    category: 'Investor Type',
    summary: 'Your exemption strategy is aligned with institutional growth',
    recommendations: [
      { text: 'Your investor structure supports scale and allocator access' },
    ],
    score: 0,
    isStrength: true,
  },
  q3: {
    area: 'Team Alignment',
    category: 'Compensation',
    summary: 'Your compensation structure signals long-term alignment',
    recommendations: [
      { text: 'Equity and vesting structures build investor confidence' },
    ],
    score: 0,
    isStrength: true,
  },
  q4: {
    area: 'Compliance Culture',
    category: 'Personal Trading',
    summary: 'Your personal trading policy follows best practices',
    recommendations: [
      { text: 'Pre-clearance demonstrates strong investor alignment' },
    ],
    score: 0,
    isStrength: true,
  },
  q5: {
    area: 'Fund Docs & Budgeting',
    category: 'Expense Treatment',
    summary: 'Your expense treatment is clearly documented',
    recommendations: [
      { text: 'Clear expense policies prevent fundraising delays' },
    ],
    score: 0,
    isStrength: true,
  },
  q6: {
    area: 'Internal Controls',
    category: 'Fund Signatories',
    summary: 'Your signatory controls follow institutional standards',
    recommendations: [
      { text: 'Dual or multi-signatory control enhances fund security' },
    ],
    score: 0,
    isStrength: true,
  },
  q7: {
    area: 'Infrastructure',
    category: 'Prime Brokerage',
    summary: 'Your prime brokerage setup is manageable',
    recommendations: [
      { text: 'Single PB reduces complexity while maintaining flexibility' },
    ],
    score: 0,
    isStrength: true,
  },
  q8: {
    area: 'Valuation Policy',
    category: 'Asset Valuation',
    summary: 'Your asset profile supports straightforward valuation',
    recommendations: [
      { text: 'Standard valuation practices should suffice for your strategy' },
    ],
    score: 0,
    isStrength: true,
  },
};

export function calculateAssessmentScore(answers: Record<string, any>): QuestionScore[] {
  const scores: QuestionScore[] = [];

  Object.keys(scoreMappings).forEach((questionId) => {
    const answer = answers[questionId];
    const scoreMap = scoreMappings[questionId];

    if (answer && scoreMap[answer] !== undefined) {
      const template = insightTemplates[questionId];
      scores.push({
        questionId,
        score: scoreMap[answer],
        maxScore: 5,
        category: template.category,
        area: template.area,
      });
    }
  });

  return scores;
}

export function generateInsights(answers: Record<string, any>): Insight[] {
  const scores = calculateAssessmentScore(answers);
  const insights: Insight[] = [];

  // Get low-scoring areas (score <= 3)
  const weakAreas = scores.filter((s) => s.score <= 3).sort((a, b) => a.score - b.score);

  // Get high-scoring areas (score >= 5)
  const strongAreas = scores.filter((s) => s.score >= 5);

  // Add top 3 improvement areas
  weakAreas.slice(0, 3).forEach((scoreItem) => {
    const template = insightTemplates[scoreItem.questionId];
    if (template) {
      insights.push({
        ...template,
        score: scoreItem.score,
      });
    }
  });

  // If fewer than 3 weak areas, add strengths
  if (weakAreas.length < 3 && strongAreas.length > 0) {
    strongAreas.slice(0, 3 - weakAreas.length).forEach((scoreItem) => {
      const template = strengthTemplates[scoreItem.questionId];
      if (template) {
        insights.push({
          ...template,
          score: scoreItem.score,
          isStrength: true,
        });
      }
    });
  }

  // If all areas are strong (no weak areas), show top 3 strengths
  if (weakAreas.length === 0) {
    strongAreas.slice(0, 3).forEach((scoreItem) => {
      const template = strengthTemplates[scoreItem.questionId];
      if (template) {
        insights.push({
          ...template,
          score: scoreItem.score,
          isStrength: true,
        });
      }
    });
  }

  return insights;
}

export function calculateOverallScore(scores: QuestionScore[]): number {
  if (scores.length === 0) return 0;

  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const maxPossible = scores.length * 5;

  return Math.round((totalScore / maxPossible) * 100);
}
