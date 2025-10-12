export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  number: number;
  question: string;
  type: 'single' | 'multiple' | 'number' | 'text' | 'table' | 'multiple-with-text';
  options?: QuestionOption[];
  placeholder?: string;
  category: string;
  insightHook?: string;
  tableRows?: string[];
}

export const assessmentQuestions: Question[] = [
  // Fund Structure & Formation
  {
    id: 'q1',
    number: 1,
    question: 'Do you plan to have tax-exempt investors (e.g., offshore, endowments, foundations)?',
    type: 'single',
    category: 'Fund Formation',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'unsure', label: "I'm not sure" },
    ],
    insightHook: 'If Yes or Unsure then Suggest mini-master structure for future offshore flexibility',
  },
  {
    id: 'q2',
    number: 2,
    question: 'What type of investors will your fund accept?',
    type: 'single',
    category: 'Regulatory Strategy',
    options: [
      { value: 'accredited', label: 'Accredited only' },
      { value: 'qualified', label: 'Qualified purchasers' },
      { value: 'both', label: 'Both' },
      { value: 'unsure', label: 'Not sure' },
    ],
    insightHook: 'Educate on investor limits and fund exemptions',
  },

  // Compensation & Alignment
  {
    id: 'q3',
    number: 3,
    question: 'How do you plan to compensate employees?',
    type: 'single',
    category: 'Team Alignment',
    options: [
      { value: 'salary', label: 'Salary only' },
      { value: 'salary_bonus', label: 'Salary + cash bonus' },
      { value: 'salary_equity', label: 'Salary + real equity' },
      { value: 'salary_phantom', label: 'Salary + phantom equity' },
      { value: 'salary_vest', label: 'Salary + 3-year vest investment in firm' },
    ],
    insightHook: 'Gauge alignment and retention strategy',
  },
  {
    id: 'q4',
    number: 4,
    question: 'What is your policy on personal trading by employees?',
    type: 'single',
    category: 'Compliance Culture',
    options: [
      { value: 'not_allowed', label: 'Not allowed' },
      { value: 'allowed_freely', label: 'Allowed freely' },
      { value: 'preclearance', label: 'Allowed with pre-clearance' },
    ],
    insightHook: 'Highlight best practices for investor alignment',
  },

  // Operational Costs & Controls
  {
    id: 'q5',
    number: 5,
    question: 'Will operational costs be deducted from the fund?',
    type: 'single',
    category: 'Fund Docs & Budgeting',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'unsure', label: 'Not sure' },
    ],
    insightHook: 'Flag documentation needs and timing flexibility',
  },
  {
    id: 'q6',
    number: 6,
    question: 'How many signatories are required to move money from the fund?',
    type: 'single',
    category: 'Internal Controls',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5+' },
    ],
    insightHook: 'Recommend dual control, especially if one is in trading',
  },

  // Infrastructure & Systems
  {
    id: 'q7',
    number: 7,
    question: 'How many prime brokerage accounts do you plan to use?',
    type: 'single',
    category: 'Infrastructure',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5+' },
    ],
    insightHook: 'Flag need for OMS/PMS if >1',
  },
  {
    id: 'q8',
    number: 8,
    question: 'Will your fund hold any hard-to-value assets (e.g., Swaps, Credit, Private, Illiquid Stock, etc.)?',
    type: 'single',
    category: 'Valuation Policy',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'possibly', label: 'Possibly' },
    ],
    insightHook: 'Offer valuation policy framework',
  },

  // Service Providers & Team
  {
    id: 'q9',
    number: 9,
    question: 'Have you selected your core service providers? (check all that are selected)',
    type: 'multiple-with-text',
    category: 'Vendor Strategy',
    options: [
      { value: 'prime_broker', label: 'Prime Broker' },
      { value: 'custodian', label: 'Custodian' },
      { value: 'fund_admin', label: 'Fund Administrator' },
      { value: 'auditor', label: 'Auditor' },
      { value: 'legal', label: 'Legal Counsel' },
      { value: 'none', label: 'None Selected' },
    ],
    insightHook: 'Identify gaps and offer vendor selection support',
  },
  {
    id: 'q10',
    number: 10,
    question: 'How many employees do you currently have by function? (0 if not dedicated employee)',
    type: 'table',
    category: 'Org Design',
    tableRows: ['Trading', 'Portfolio Management', 'Operations', 'Compliance', 'Other'],
    insightHook: 'Assess team balance and operational load',
  },

  // Scale & Strategy
  {
    id: 'q11',
    number: 11,
    question: 'What is your current AUM?',
    type: 'text',
    category: 'Growth Planning',
    placeholder: 'e.g., $5M or Pre-launch',
    insightHook: 'Tailor readiness suggestions to scale',
  },
  {
    id: 'q12',
    number: 12,
    question: 'What is your target raise over the next 12 months?',
    type: 'text',
    category: 'Growth Planning',
    placeholder: 'e.g., $25M',
    insightHook: 'Tailor roadmap to fundraising goals',
  },
  {
    id: 'q13',
    number: 13,
    question: 'What are your biggest operational pain points today?',
    type: 'multiple',
    category: 'Immediate Needs',
    options: [
      { value: 'accounting', label: 'Accounting' },
      { value: 'operations', label: 'Operations' },
      { value: 'compliance', label: 'Compliance' },
      { value: 'legal', label: 'Legal' },
      { value: 'technology', label: 'Technology' },
    ],
    insightHook: 'Segment by urgency',
  },
  {
    id: 'q14',
    number: 14,
    question: 'What solutions are you exploring to address operational risks?',
    type: 'multiple',
    category: 'Engagement Strategy',
    options: [
      { value: 'hire', label: 'Hire full-time staff' },
      { value: 'consultant', label: 'Add a consultant' },
      { value: 'system', label: 'Implement a system' },
      { value: 'unsure', label: 'Not sure' },
    ],
    insightHook: 'Align offering with their mindset',
  },
  {
    id: 'q15',
    number: 15,
    question: 'Is there anything else we should know about your fund?',
    type: 'text',
    category: 'Qualitative Insight',
    placeholder: 'Optional: Share any additional context...',
    insightHook: 'Capture qualitative data for follow-up',
  },
];
