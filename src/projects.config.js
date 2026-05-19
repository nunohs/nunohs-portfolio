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
    id: 3,
    title: 'Sales Performance Dashboard',
    hook: 'Interactive Power BI dashboard analyzing sales trends, regional performance, and product revenue.',
    outcomes: [
      'Analyzed a multi-dimensional retail dataset across product categories, regions, and time periods',
      'Built DAX measures for revenue, growth rate, and regional contribution KPIs',
      'Designed drill-down visuals enabling filtering by category, region, and time period',
      'Prepared and cleaned source data in Excel before ingestion into the Power BI data model',
    ],
    tags: ['Power BI', 'Microsoft Excel', 'DAX', 'Data Analysis'],
    githubUrl: 'https://github.com/nunohs/Sales-performance-dashboard',
    demoUrl: null,
    category: 'Data & Finance',
    images: [
      { url: '/nunohs-portfolio/dashboard-overview-sales.png', subtitle: 'Dashboard Overview' },
      { url: '/nunohs-portfolio/datamodel.png', subtitle: 'Data Model' },
    ],
  },
  {
    id: 4,
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
  'Sales-performance-dashboard',
  'Strategic-Financial-Business-Analysis-Harvey-Norman',
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
  'ecommerce-kpi-dashboard': { title: 'Ecommerce KPI Dashboard', category: ['Data & Finance', 'AI', 'Full-Stack', 'Business'] },
};
