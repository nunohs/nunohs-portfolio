// Featured projects — shown as large cards with images and outcome bullets.
// These require custom content so they stay manually curated here.
export const featuredProjects = [
  {
    id: 1,
    title: 'ADB Web Application',
    hook: 'Full-stack web app managing 1,000–5,000 biographical entries for the Australian Dictionary of Biography.',
    outcomes: [
      'Led backend development for a 5-person team, delivering RESTful APIs with Node.js and TypeScript',
      'Integrated AzureSQL database and containerized deployment pipeline with Docker',
      'Ran Agile/Scrum sprints tracked end-to-end in JIRA with full documentation in Confluence',
      'Source code is client-owned (private) — project documented comprehensively via Confluence',
    ],
    tags: ['TypeScript', 'Node.js', 'Express.js', 'Azure', 'Docker', 'REST APIs', 'AzureSQL'],
    githubUrl: 'https://github.com/nunohs',
    demoUrl: null,
    category: 'Full-Stack',
    images: [
      { url: '/nunohs-portfolio/webdesign3.jpg', subtitle: 'Web Design Screenshot #1' },
      { url: '/nunohs-portfolio/sampledesign.png', subtitle: 'Web Design Screenshot #2' },
      { url: '/nunohs-portfolio/projectroadmap.png', subtitle: 'Project Roadmap' },
      { url: '/nunohs-portfolio/confluencepic.png', subtitle: 'Confluence Documentation' },
      { url: '/nunohs-portfolio/jirapic.png', subtitle: 'Jira Timeline' },
    ],
  },
  {
    id: 2,
    title: 'Worldcup2026 Sim',
    hook: 'Monte Carlo tournament simulator predicting FIFA World Cup outcomes from 10,000 simulated tournaments.',
    outcomes: [
      'Built an iterative, opponent-weighted team-rating system over 49,000+ historical matches, fixing a confederation-strength bias that capped the naive model at 42% accuracy',
      'Modelled matches with a Poisson goal engine and the official 2026 tiebreaker rules and 48-team bracket format',
      'Validated against the completed group stage: correctly predicted 11/12 group winners and 9/12 top-two qualifiers (92% accuracy)',
      'Logged all manual adjustments (injuries, form, host advantage) with documented reasons and bounded ranges to keep the statistical model doing most of the work',
    ],
    tags: ['Python', 'PostgreSQL', 'Monte Carlo Simulation', 'Poisson Distribution', 'pandas', 'SciPy'],
    githubUrl: 'https://github.com/nunohs/worldcup2026-sim',
    demoUrl: 'https://nunohs.github.io/worldcup2026-sim/',
    category: 'Data & Finance',
    images: [
      { url: '/nunohs-portfolio/wcscreenshot1.png', subtitle: 'Championship Probability Model' },
      { url: '/nunohs-portfolio/wcscreenshot2.png', subtitle: 'Model Validations and Methods' },
    ],
  },
  {
    id: 3,
    title: 'Financial Report Analyser (RAG)',
    hook: 'AI app that lets you upload a company annual report PDF and ask questions about it in plain English, powered by Retrieval-Augmented Generation.',
    outcomes: [
      'Built a RAG pipeline: PDF text extraction with pdfplumber, chunking, and a FAISS vector index over Gemini embeddings',
      'Answers are grounded strictly in the uploaded document, with expandable source citations for every response',
      'Generates an automatic 5-point report summary on upload plus a chat interface with conversation history',
      'Deployed full-stack with a React/TypeScript frontend on Vercel and a FastAPI backend on Render',
    ],
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'FAISS', 'Gemini API', 'RAG'],
    githubUrl: 'https://github.com/nunohs/financial-report-analyser',
    demoUrl: 'https://financial-report-analyser-theta.vercel.app',
    category: 'AI',
    images: [
      { url: '/nunohs-portfolio/ragscreenshot1.png', subtitle: 'Financial Report Analyser Screenshot #1' },
      { url: '/nunohs-portfolio/ragscreenshot2.png', subtitle: 'Financial Report Analyser Screenshot #2' },
      { url: '/nunohs-portfolio/ragscreenshot3.png', subtitle: 'Financial Report Analyser Screenshot #3' },
    ],
  },
  {
    id: 4,
    title: 'SaaS Business KPI Dashboard',
    hook: 'Full-stack analytics dashboard turning e-commerce transaction data into KPIs and plain-English business insights.',
    outcomes: [
      'Tracks 8 key metrics — revenue, AOV, repeat purchase rate, CAC, CLV, and more — across 7/30/90-day windows',
      'Built a FastAPI + SQLAlchemy backend over SQLite, deployed on Render, with a React 19 + Vite frontend on Vercel',
      'Generates rule-based natural language business insights derived directly from the computed KPIs',
      'Visualizes revenue trend, category performance, and top products with Recharts',
    ],
    tags: ['Python', 'FastAPI', 'React', 'SQLite', 'Recharts', 'Business Intelligence'],
    githubUrl: 'https://github.com/nunohs/ecommerce-kpi-dashboard',
    demoUrl: 'https://ecommerce-kpi-dashboard-tau.vercel.app',
    category: ['Business', 'Data & Finance'],
    images: [
      { url: '/nunohs-portfolio/ecomscreenshot1.png', subtitle: 'Metric Cards & Charts' },
      { url: '/nunohs-portfolio/ecomscreenshot2.png', subtitle: 'Full Dashboard View' },
    ],
  },
  {
    id: 5,
    title: 'Stock & Crypto Portfolio Tracker',
    hook: 'Live financial dashboard tracking portfolio performance, allocation breakdowns, and return vs benchmark.',
    outcomes: [
      'Built a real-time data pipeline integrating Yahoo Finance API with pandas for live portfolio metrics',
      'Visualized P&L, allocation breakdown, and benchmark return using interactive Plotly charts',
      'Deployed as a Streamlit web app accessible from any browser with no local setup required',
      'Supports multi-asset portfolios spanning equities and crypto in a single unified dashboard',
    ],
    tags: ['Python', 'Streamlit', 'Plotly', 'pandas', 'Yahoo Finance API'],
    githubUrl: 'https://github.com/nunohs/financial-portfolio-tracker-dashboard',
    demoUrl: null,
    category: 'Data & Finance',
    images: [{ url: '/nunohs-portfolio/dashboard-screenshot1.png', subtitle: 'Dashboard Screenshot #1' }],
  },
  {
    id: 6,
    title: 'Harvey Norman Financial Analysis',
    hook: 'Consulting-style financial deep dive identifying margin risks and revenue concentration in Harvey Norman.',
    outcomes: [
      'Conducted ratio analysis and DuPont decomposition across 3+ years of Harvey Norman annual reports',
      'Identified 3+ margin risk areas and revenue concentration vulnerabilities affecting long-term performance',
      'Applied cost allocation modelling to assess segment-level profitability drivers',
      'Delivered findings as a structured consulting report with actionable strategic recommendations',
    ],
    tags: ['Financial Analysis', 'DuPont Framework', 'Excel', 'Business Strategy', 'Ratio Analysis'],
    githubUrl: 'https://github.com/nunohs/Strategic-Financial-Business-Analysis-Harvey-Norman',
    demoUrl: null,
    category: 'Business',
    images: [{ url: '/nunohs-portfolio/hvn_screenshot.png', subtitle: 'Harvey Norman Financial Analysis' }],
  },
];

// Repos to hide from the auto-fetched grid (already shown as featured cards).
export const excludedRepos = [
  'financial-portfolio-tracker-dashboard',
  'Strategic-Financial-Business-Analysis-Harvey-Norman',
  'financial-report-analyser',
  'ecommerce-kpi-dashboard',
  'worldcup2026-sim',
  'oresimulator',
  'nunohs-fcc-javascriptalgorithms-datastructures',
  'nunohs-fcc-responsivewebdesign',
];

// Per-repo display overrides, keyed by exact GitHub repo name.
// description and tags come from GitHub (About text + Topics) — only override
// title (when the repo name doesn't auto-prettify well) and category (for filtering).
// New repos auto-appear without needing an entry here at all.
export const projectOverrides = {
  EcoLive:               { title: 'EcoLive',                category: 'Full-Stack' },
  'nunohs-goalsTracker': { title: 'Goals Tracker',          category: 'Full-Stack' },
  'nunohs-footyTrivia':  { title: 'Footy Trivia',           category: 'Full-Stack' },
  'nunohs-shadowdance':  { title: 'Shadow Dance',           category: 'Full-Stack' },
  'nunohs-tknfanta':     { title: 'Tkn Fanta Runner',       category: 'Full-Stack' },
  'nunohs-tanksUnity':   { title: 'Tanks (Unity)',          category: 'Full-Stack' },
  'nunohs-mindycake':    { title: 'MindyCake',              category: 'Full-Stack' },
  'nunohs-cpuschedulersim': { title: 'CPU Scheduler Simulator', category: 'Full-Stack' },
  'nunohs-portfolio':    { title: 'nunohs-portfolio',       category: 'Full-Stack' },
  'resume-job-analyser': { title: 'Resume Job Analyser',    category: ['Full-Stack', 'AI'] },
  'Sales-performance-dashboard': { title: 'Sales Performance Dashboard', category: 'Data & Finance' },
};
