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

/* ----------------------------
   Scoring (1 = high risk, 5 = best practice)
----------------------------- */
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

/* ----------------------------
   Insight templates (used when an area is weak)
----------------------------- */
const insightTemplates: Record<string, Insight> = {
  q1: {
    area: 'Fund Formation',
    category: 'Fund Structure',
    summary: 'Adopt a structure that scales with strategy and investor mix.',
    recommendations: [
      {
        text: 'Evaluate a mini-master or master-feeder to accommodate growth and tax considerations.',
      },
      {
        text: 'Review SEC guidance relevant to private fund formation.',
        link: 'https://www.sec.gov/investment/private-fund-advisers',
        linkText: 'SEC: Private Fund Advisers',
      },
    ],
    score: 0,
  },
  q2: {
    area: 'Regulatory Strategy',
    category: 'Investor Type',
    summary: 'Clarify your exemption strategy early to avoid costly restructuring.',
    recommendations: [
      {
        text: 'Document the chosen exemption (3(c)(1) or 3(c)(7)) in offering documents and (where applicable) ADV materials.',
      },
      {
        text: 'Understand limits: 3(c)(1) typically caps at 100 investors (accredited), 3(c)(7) permits up to 2,000 qualified purchasers.',
      },
      {
        text: 'Ensure subscription docs capture accreditation / qualified purchaser certifications.',
      },
      {
        text: 'Pressure-test the choice against fundraising plans and potential cross-border investors.',
        link: 'https://www.morganlewis.com/pubs/2023/09/sec-updates-private-fund-adviser-rules-what-you-need-to-know',
        linkText: 'Morgan Lewis: Private Fund Adviser Rules',
      },
    ],
    score: 0,
  },
  q3: {
    area: 'Team Alignment',
    category: 'Compensation Structure',
    summary: 'Strengthen employee alignment with durable, performance-linked incentives.',
    recommendations: [
      { text: 'Add equity or phantom equity to deepen long-term alignment.' },
      { text: 'Use vesting schedules and clear milestones to retain key talent.' },
      { text: 'Document compensation policies for allocator due diligence.' },
    ],
    score: 0,
  },
  q4: {
    area: 'Compliance Culture',
    category: 'Personal Trading Policy',
    summary: 'Tighten personal trading controls to reduce conflicts and ODD risk.',
    recommendations: [
      { text: 'Implement pre-clearance for employee trades with restricted lists.' },
      { text: 'Codify procedures in the compliance manual and train staff annually.' },
      {
        text: 'Benchmark against industry practice.',
        link: 'https://fintech.global/2024/12/09/best-practices-for-monitoring-employee-trades-in-sec-regulated-firms/',
        linkText: 'FinTech Global: Personal Trading Best Practices',
      },
    ],
    score: 0,
  },
  q5: {
    area: 'Fund Docs & Budgeting',
    category: 'Expense Treatment',
    summary: 'Ambiguous expense treatment slows fundraising and increases regulatory risk.',
    recommendations: [
      { text: 'Map offering doc disclosures to each expense category (legal, audit, tax, compliance, travel, IR, etc.).' },
      { text: 'Specify what is fund-borne vs. manager-borne; avoid “miscellaneous” buckets.' },
      { text: 'Align with prevailing practice to limit allocator pushback.' },
      {
        text: 'Review SEC expectations on private fund advisers and expense disclosures.',
        link: 'https://www.sec.gov/investment/private-fund-advisers',
        linkText: 'SEC: Private Fund Advisers',
      },
    ],
    score: 0,
  },
  q6: {
    area: 'Internal Controls',
    category: 'Fund Signatories',
    summary: 'Single signatory increases operational and fraud risk.',
    recommendations: [
      { text: 'Adopt dual-authorization for payments and wire transfers.' },
      { text: 'Document authority matrices and approval thresholds.' },
      { text: 'Segregate duties between trading, operations, and finance.' },
    ],
    score: 0,
  },
  q7: {
    area: 'Infrastructure', 
	category: 'Trading Systems Integration', 
	summary: 'Multiple prime brokers require integrated OMS, PMS, and EMS for consistency and control.', 
	recommendations: [ 
		{ text: 'Select and integrate an OMS/PMS/EMS stack capable of aggregating trades, positions, financing, and margin across all brokers.' }, 
		{ text: 'Automate daily reconciliations (cash, positions, margin) to catch breaks and discrepancies proactively.' }, 
		{ text: 'Define clear data ownership and flow between front, middle, and back office systems to avoid reconciliation gaps.' }, 
		{ text: 'Document your multi-prime workflows—trade allocation, collateral management, broker communication—for ODD purposes.' }, 
		{ 
			text: 'Review infrastructure-level guidance on OMS/PMS design, capabilities, and prime broker integration.', 
			link: 'https://www.broadridge.com/insight-pages/why-hedge-funds-need-the-right-oms-pms-to-scale-with-confidence', 
			linkText: 'Why Hedge Funds Need the Right OMS/PMS', 
		} 
	], 
	score: 0 
},

  q8: {
    area: 'Valuation Policy',
    category: 'Hard-to-Value Assets',
    summary: 'Illiquid or complex assets need a formal, defensible pricing framework.',
    recommendations: [
      { text: 'Adopt a tiered pricing source hierarchy with documented overrides.' },
      { text: 'Establish governance for challenge/approval of pricing exceptions.' },
      { text: 'Leverage external benchmarks and periodic independent reviews.' },
      {
        text: 'Use recognized principles as a reference point.',
        link: 'https://www.iosco.org/library/pubdocs/pdf/IOSCOPD335.pdf',
        linkText: 'IOSCO: Hedge Fund Valuation Principles',
      },
    ],
    score: 0,
  },
};

/* ----------------------------
   Positive (strength) templates
----------------------------- */
const strengthTemplates: Record<string, Insight> = {
  q1: {
    area: 'Fund Formation',
    category: 'Fund Structure',
    summary: 'Your structure is scalable and investor-friendly.',
    recommendations: [{ text: 'Maintain optionality for future tax and investor needs.' }],
    score: 0,
    isStrength: true,
  },
  q2: {
    area: 'Regulatory Strategy',
    category: 'Investor Type',
    summary: 'Your exemption strategy supports institutional growth.',
    recommendations: [{ text: 'Eligibility controls and documentation appear well-calibrated.' }],
    score: 0,
    isStrength: true,
  },
  q3: {
    area: 'Team Alignment',
    category: 'Compensation',
    summary: 'Compensation design promotes durable alignment.',
    recommendations: [{ text: 'Equity and vesting structures support retention and accountability.' }],
    score: 0,
    isStrength: true,
  },
  q4: {
    area: 'Compliance Culture',
    category: 'Personal Trading',
    summary: 'Personal trading controls reflect strong governance.',
    recommendations: [{ text: 'Pre-clearance and monitoring reduce conflicts and enforcement risk.' }],
    score: 0,
    isStrength: true,
  },
  q5: {
    area: 'Fund Docs & Budgeting',
    category: 'Expense Treatment',
    summary: 'Expense disclosures are clear and operationalized.',
    recommendations: [{ text: 'Consistent line-item reporting builds allocator confidence.' }],
    score: 0,
    isStrength: true,
  },
  q6: {
    area: 'Internal Controls',
    category: 'Fund Signatories',
    summary: 'Authorization controls meet institutional standards.',
    recommendations: [{ text: 'Dual approval and duty segregation are well-implemented.' }],
    score: 0,
    isStrength: true,
  },
  q7: {
    area: 'Infrastructure',
    category: 'Prime Brokerage',
    summary: 'Prime brokerage setup is well-controlled.',
    recommendations: [{ text: 'Coverage through a single PB keeps operational risk contained.' }],
    score: 0,
    isStrength: true,
  },
  q8: {
    area: 'Valuation Policy',
    category: 'Asset Valuation',
    summary: 'Valuation approach is straightforward and supportable.',
    recommendations: [{ text: 'Standard pricing sources fit the current strategy profile.' }],
    score: 0,
    isStrength: true,
  },
};

/* ----------------------------
   Helpers
----------------------------- */
function normalize(val: any): string | undefined {
  if (val == null) return undefined;
  return String(val).toLowerCase().trim();
}

/* ----------------------------
   Scoring
----------------------------- */
export function calculateAssessmentScore(
  answers: Record<string, any>
): QuestionScore[] {
  const scores: QuestionScore[] = [];

  Object.keys(scoreMappings).forEach((questionId) => {
    const scoreMap = scoreMappings[questionId];
    const answerKey = normalize(answers[questionId]);

    if (answerKey && scoreMap[answerKey] !== undefined) {
      const template = insightTemplates[questionId];
      scores.push({
        questionId,
        score: scoreMap[answerKey],
        maxScore: 5,
        category: template.category,
        area: template.area,
      });
    }
  });

  return scores;
}

/* ----------------------------
   Insights
----------------------------- */
export function generateInsights(answers: Record<string, any>): Insight[] {
  const scores = calculateAssessmentScore(answers);

  // Sort weak → strong for weak areas, and keep strong areas separate
  const weakAreas = scores
    .filter((s) => s.score <= 3)
    .sort((a, b) => a.score - b.score);

  const strongAreas = scores.filter((s) => s.score >= 5);

  const insights: Insight[] = [];
  const picked = new Set<string>();

  // Up to 3 weak areas first
  for (const s of weakAreas) {
    if (insights.length >= 3) break;
    if (!picked.has(s.questionId)) {
      const t = insightTemplates[s.questionId];
      if (t) {
        insights.push({ ...t, score: s.score, isStrength: false });
        picked.add(s.questionId);
      }
    }
  }

  // If fewer than 3, fill with strengths
  if (insights.length < 3) {
    for (const s of strongAreas) {
      if (insights.length >= 3) break;
      if (!picked.has(s.questionId)) {
        const t = strengthTemplates[s.questionId];
        if (t) {
          insights.push({ ...t, score: s.score, isStrength: true });
          picked.add(s.questionId);
        }
      }
    }
  }

  return insights;
}

export function calculateOverallScore(scores: QuestionScore[]): number {
  if (!scores || scores.length === 0) return 0;
  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const maxPossible = scores.length * 5;
  return Math.round((totalScore / maxPossible) * 100);
}
