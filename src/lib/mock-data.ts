// Realistic mock data for the Autonomous Data Analyst Agent.
// Replace these with API calls to the FastAPI backend later.

export type District = {
  name: string;
  spend: number; // ₹ crore
  perCapita: number; // ₹
  beds: number; // per 10k
  outcome: number; // health index 0-100
  anomaly?: boolean;
};

export const districts: District[] = [
  { name: "Pune", spend: 1450, perCapita: 1540, beds: 14.2, outcome: 82, anomaly: true },
  { name: "Mumbai Sub.", spend: 1210, perCapita: 1290, beds: 16.8, outcome: 85 },
  { name: "Nagpur", spend: 690, perCapita: 1480, beds: 11.3, outcome: 74 },
  { name: "Thane", spend: 780, perCapita: 700, beds: 9.4, outcome: 71 },
  { name: "Nashik", spend: 610, perCapita: 990, beds: 8.9, outcome: 69 },
  { name: "Aurangabad", spend: 540, perCapita: 1450, beds: 7.6, outcome: 66 },
  { name: "Solapur", spend: 320, perCapita: 740, beds: 6.1, outcome: 58 },
  { name: "Kolhapur", spend: 480, perCapita: 1240, beds: 8.2, outcome: 72 },
  { name: "Amravati", spend: 190, perCapita: 660, beds: 5.4, outcome: 61, anomaly: true },
  { name: "Latur", spend: 230, perCapita: 940, beds: 5.0, outcome: 55 },
  { name: "Gadchiroli", spend: 410, perCapita: 3800, beds: 4.1, outcome: 47, anomaly: true },
  { name: "Nanded", spend: 350, perCapita: 1040, beds: 6.0, outcome: 60 },
];

export const avgSpend = Math.round(districts.reduce((a, d) => a + d.spend, 0) / districts.length);

export const monthlyTrend = [
  { month: "Apr", actual: 420, budget: 450 },
  { month: "May", actual: 460, budget: 460 },
  { month: "Jun", actual: 510, budget: 470 },
  { month: "Jul", actual: 590, budget: 480 },
  { month: "Aug", actual: 640, budget: 490 },
  { month: "Sep", actual: 610, budget: 500 },
  { month: "Oct", actual: 700, budget: 510 },
  { month: "Nov", actual: 760, budget: 520 },
  { month: "Dec", actual: 820, budget: 530 },
  { month: "Jan", actual: 790, budget: 540 },
  { month: "Feb", actual: 860, budget: 550 },
  { month: "Mar", actual: 940, budget: 560 },
];

export const histogram = [
  { bin: "0–200", count: 2 },
  { bin: "200–400", count: 4 },
  { bin: "400–600", count: 3 },
  { bin: "600–800", count: 2 },
  { bin: "800–1000", count: 0 },
  { bin: "1000–1200", count: 0 },
  { bin: "1200+", count: 2 },
];

export const heatmapRows = ["Primary care", "Hospitals", "Medicines", "Staff", "Infra"];
export const heatmapCols = ["Pune", "Mumbai", "Nagpur", "Thane", "Nashik", "Solapur", "Amravati", "Gadchiroli"];
export const heatmap: number[][] = [
  [0.62, 0.55, 0.48, 0.41, 0.39, 0.22, 0.18, 0.31],
  [0.95, 0.88, 0.52, 0.6, 0.44, 0.26, 0.12, 0.2],
  [0.7, 0.66, 0.5, 0.47, 0.42, 0.3, 0.15, 0.58],
  [0.58, 0.72, 0.55, 0.45, 0.4, 0.28, 0.21, 0.17],
  [0.83, 0.61, 0.38, 0.52, 0.3, 0.19, 0.09, 0.91],
];

export type BoxStat = { label: string; min: number; q1: number; med: number; q3: number; max: number };
export const boxplot: BoxStat[] = [
  { label: "Urban", min: 620, q1: 760, med: 990, q3: 1230, max: 1450 },
  { label: "Semi-urban", min: 300, q1: 400, med: 500, q3: 620, max: 780 },
  { label: "Rural", min: 180, q1: 220, med: 320, q3: 410, max: 690 },
];

export const datasetSummary = {
  name: "district_health_spending_FY25.csv",
  rows: 18432,
  columns: 14,
  numeric: 9,
  categorical: 4,
  datetime: 1,
  missingPct: 2.4,
  duplicates: 37,
  sizeMb: 4.8,
  columnList: [
    { name: "district", type: "categorical", missing: 0 },
    { name: "month", type: "datetime", missing: 0 },
    { name: "spend_crore", type: "numeric", missing: 1.2 },
    { name: "per_capita_inr", type: "numeric", missing: 3.1 },
    { name: "beds_per_10k", type: "numeric", missing: 0.4 },
    { name: "doctors_per_10k", type: "numeric", missing: 5.8 },
    { name: "health_index", type: "numeric", missing: 0 },
    { name: "scheme", type: "categorical", missing: 0.9 },
  ],
};

export const sessions = [
  { id: "s1", name: "District health spending FY25", file: "district_health_spending_FY25.csv", when: "2h ago", rows: "18.4k" },
  { id: "s2", name: "Hospital bed utilisation", file: "bed_utilisation_q4.xlsx", when: "Yesterday", rows: "6.2k" },
  { id: "s3", name: "Immunisation coverage", file: "immunisation_2024.csv", when: "3d ago", rows: "41k" },
  { id: "s4", name: "Medicine procurement", file: "procurement_ledger.csv", when: "1w ago", rows: "112k" },
];

export const agents = [
  { key: "understanding", name: "Understanding Agent", short: "Understanding", role: "Profiles the dataset and interprets your question in context." },
  { key: "planner", name: "Planner Agent", short: "Planner", role: "Breaks the question into an executable analysis plan." },
  { key: "analysis", name: "Analysis Agent", short: "Analysis", role: "Runs statistics, ML and anomaly detection with Pandas and Scikit-learn." },
  { key: "insight", name: "Insight Agent", short: "Insight", role: "Turns raw results into ranked, plain-English findings." },
  { key: "report", name: "Report Agent", short: "Report", role: "Assembles charts and findings into a shareable report." },
] as const;

export const pipelineLogs: Record<(typeof agents)[number]["key"], string> = {
  understanding: "Parsed 14 columns · detected 12 districts · question scope: anomalies",
  planner: "Plan: z-score per district → IQR on per-capita → cluster by tier",
  analysis: "Ran IsolationForest (n=18,432) · 3 outliers flagged · 6 charts generated",
  insight: "Ranked 5 findings by effect size and confidence",
  report: "Compiled executive summary, methodology and recommendations",
};

export const anomalies = [
  {
    district: "Pune",
    metric: "Total spend",
    value: "₹1,450 crore",
    baseline: "avg ₹650 crore",
    delta: "+123%",
    severity: "high" as const,
    note: "2.3σ above state mean; driven by a one-time hospital infra grant in Q3.",
  },
  {
    district: "Gadchiroli",
    metric: "Per-capita spend",
    value: "₹3,800",
    baseline: "avg ₹1,320",
    delta: "+188%",
    severity: "high" as const,
    note: "Highest per-capita spend yet the lowest health index (47) — low efficiency.",
  },
  {
    district: "Amravati",
    metric: "Beds per 10k",
    value: "5.4",
    baseline: "avg 8.6",
    delta: "−37%",
    severity: "medium" as const,
    note: "Under-resourced relative to population; spend has been flat for 9 months.",
  },
];

export const insights = [
  { title: "Spending is heavily concentrated", body: "Pune and Mumbai Suburban account for 41% of total healthcare spend across the 12 districts.", icon: "pie" },
  { title: "Spend does not predict outcomes past ₹1,200 per capita", body: "Correlation between per-capita spend and health index flattens (r = 0.12) beyond this threshold.", icon: "trend" },
  { title: "Rural districts show a 32% funding gap", body: "Median rural spend is ₹320 crore vs ₹990 crore urban, with a 3× gap in beds per 10k.", icon: "gap" },
  { title: "Q4 overspend accelerated", body: "Actual spend exceeded budget by 68% in March, up from 7% in June — a consistent upward drift.", icon: "alert" },
  { title: "Gadchiroli is a high-spend, low-outcome outlier", body: "Infra allocation dominates (91% of category max) while primary care lags — a reallocation candidate.", icon: "target" },
];

export const sampleAnswer =
  "I found 3 districts with unusual healthcare spending patterns. Pune's total spend of ₹1,450 crore is more than double the state average of ₹650 crore, largely due to a one-time infrastructure grant. Gadchiroli has the highest per-capita spend (₹3,800) but the lowest health index, suggesting an efficiency problem rather than under-funding. Amravati is under-resourced on hospital beds despite average spend. Overall, spending is concentrated in two urban districts, and additional spend beyond ₹1,200 per capita shows diminishing returns on outcomes.";

export const suggestedQuestions = [
  "Which districts show unusual healthcare patterns?",
  "How does spend correlate with health outcomes?",
  "Where did actual spend exceed budget the most?",
  "Compare urban vs rural per-capita spending",
];

export const techStack = ["Pandas", "NumPy", "Scikit-learn", "Plotly", "FastAPI", "LangGraph"];
