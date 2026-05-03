import { useState } from 'react'
import './App.css'
import { PaperShaderBackground } from './components/ui/paper-shader-background'
import {
  Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Server,
  Globe, FileCode, FileSpreadsheet, ChartBar,
  Container, Timer, Workflow, FileJson, Cpu,
  FileType, Table, Database as DatabaseIcon, Workflow as WorkflowIcon,
  GitBranch, GitCompareArrows,
  PanelLeft, Component,
  Briefcase
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // --- Featured Projects (Tier 1) ---
  const featuredProjects = [
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

  // --- Other Projects ---
  const otherProjects = [
    {
      id: 'o1',
      title: 'EcoLive',
      description: 'Mobile-first web app MVP testing whether gamified rewards can drive sustainable behaviour at events.',
      tags: ['TypeScript', 'React', 'MVP', 'Product Design'],
      githubUrl: 'https://github.com/nunohs/EcoLive',
      category: 'Full-Stack',
    },
    {
      id: 'o2',
      title: 'Goals Tracker',
      description: 'Full-stack MERN goals tracker with JWT authentication, React Query, TypeScript, and Tailwind CSS.',
      tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/nunohs/nunohs-goalsTracker',
      category: 'Full-Stack',
    },
    {
      id: 'o3',
      title: 'Footy Trivia',
      description: 'Android football quiz app built with Kotlin and Jetpack Compose.',
      tags: ['Kotlin', 'Jetpack Compose', 'Android'],
      githubUrl: 'https://github.com/nunohs/nunohs-footyTrivia',
      category: 'Full-Stack',
    },
    {
      id: 'o4',
      title: 'Shadow Dance',
      description: 'Java 2D rhythm game inspired by Guitar Hero with timing mechanics, scoring logic, and custom music.',
      tags: ['Java', 'OOP', 'Game Development'],
      githubUrl: 'https://github.com/nunohs/nunohs-shadowdance',
      category: 'Full-Stack',
    },
    {
      id: 'o5',
      title: 'Tkn Fanta Runner',
      description: 'Java 2D endless runner inspired by the Chrome Dino game, built with OOP principles.',
      tags: ['Java', 'OOP', 'Game Development'],
      githubUrl: 'https://github.com/nunohs/nunohs-tknfanta',
      category: 'Full-Stack',
    },
    {
      id: 'o6',
      title: 'Tanks (Unity)',
      description: 'Tank battle game built with Unity, customized and extended from the official Unity Tanks tutorial.',
      tags: ['C#', 'Unity', 'Game Development'],
      githubUrl: 'https://github.com/nunohs/nunohs-tanksUnity',
      category: 'Full-Stack',
    },
    {
      id: 'o7',
      title: 'MindyCake',
      description: 'Frontend website built for a local bakery, showcasing products and contact details.',
      tags: ['JavaScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/nunohs/nunohs-mindycake',
      category: 'Full-Stack',
    },
    {
      id: 'o8',
      title: 'CPU Scheduler Simulator',
      description: 'Simulation of CPU scheduling algorithms (FCFS, SJF, Round Robin) implemented in C.',
      tags: ['C', 'Systems', 'Operating Systems'],
      githubUrl: 'https://github.com/nunohs/nunohs-cpuschedulersim',
      category: 'Full-Stack',
    },
    {
      id: 'o9',
      title: 'nunohs-portfolio',
      description: 'This personal portfolio — built with React, Vite, Tailwind CSS, and a Three.js animated background.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Three.js'],
      githubUrl: 'https://github.com/nunohs/nunohs-portfolio',
      category: 'Full-Stack',
    },
  ];

  const filterCategories = ['All', 'Data & Finance', 'AI', 'Full-Stack', 'Business'];

  const allProjectsForGrid = [
    ...featuredProjects.map(fp => ({
      id: `featured-${fp.id}`,
      title: fp.title,
      description: fp.hook,
      tags: fp.tags,
      githubUrl: fp.githubUrl,
      demoUrl: fp.demoUrl,
      category: fp.category,
      isFeatured: true,
      featuredData: fp,
    })),
    ...otherProjects.map(op => ({ ...op, isFeatured: false, featuredData: null })),
  ];

  const filteredAllProjects = activeFilter === 'All'
    ? allProjectsForGrid
    : allProjectsForGrid.filter(p => p.category === activeFilter);

  // Skills with icons and categories
  const skillCategories = [
    {
      name: "Programming & Development",
      skills: [
        { name: 'JavaScript', icon: <FileCode size={24} /> },
        { name: 'TypeScript', icon: <FileType size={24} /> },
        { name: 'Java', icon: <Cpu size={24} /> },
        { name: 'Python', icon: <Cpu size={24} /> },
        { name: 'SQL', icon: <Database size={24} /> },
        { name: 'React', icon: <Component size={24} /> },
        { name: 'Node.js', icon: <Server size={24} /> },
      ]
    },
    {
      name: "Data & Systems",
      skills: [
        { name: 'AzureSQL', icon: <DatabaseIcon size={24} /> },
        { name: 'MySQL', icon: <Table size={24} /> },
        { name: 'Microsoft Excel', icon: <FileSpreadsheet size={24} /> },
        { name: 'Power BI', icon: <ChartBar size={24} /> },
      ]
    },
    {
      name: "Tools & Workflow",
      skills: [
        { name: 'Git', icon: <GitBranch size={24} /> },
        { name: 'Postman', icon: <GitCompareArrows size={24} /> },
        { name: 'Agile', icon: <Timer size={24} /> },
        { name: 'Scrum', icon: <Workflow size={24} /> },
        { name: 'Jira', icon: <PanelLeft size={24} /> },
        { name: 'Confluence', icon: <FileJson size={24} /> },
        { name: 'REST APIs', icon: <Globe size={24} /> },
      ]
    },
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = (projectId) => {
    const project = featuredProjects.find(p => p.id === projectId);
    if (!project || project.images.length === 0) return;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % project.images.length
    }));
  };

  const prevImage = (projectId) => {
    const project = featuredProjects.find(p => p.id === projectId);
    if (!project || project.images.length === 0) return;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + project.images.length) % project.images.length
    }));
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextModalImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setModalImageIndex(i => (i + 1) % selectedProject.images.length);
    }
  };

  const prevModalImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setModalImageIndex(i => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <PaperShaderBackground color1="#E6ECE3" color2="#F8F6F1" />

      {/* Header/Navigation */}
      <header className="bg-[rgba(248,246,241,0.86)] backdrop-blur-md border-b border-[var(--border)] sticky top-0 z-30 shadow-[0_2px_18px_rgba(47,58,50,0.06)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-syne font-bold text-xl text-[var(--accent-dark)]">Hadi Nuno Handrison</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-syne text-sm tracking-wide capitalize transition ${
                  activeSection === item
                    ? 'text-[var(--accent-dark)] font-medium underline underline-offset-8 decoration-2 decoration-[var(--accent)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--accent-dark)]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[var(--text-muted)] hover:text-[var(--accent-dark)] transition">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[rgba(252,251,248,0.96)] backdrop-blur-md py-2 border-t border-[var(--border)]">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-syne capitalize py-2 text-left text-sm tracking-wide transition ${
                    activeSection === item ? 'text-[var(--accent-dark)] font-medium' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-syne text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight">
                Hello, I'm <span className="text-[var(--accent-dark)]">Hadi Nuno Handrison</span>
              </h1>
              <h2 className="font-syne text-lg md:text-xl text-[var(--text-muted)] mb-6 font-medium">
                Computer Science Graduate @UniMelb | Master of Management @USYD
              </h2>
              <p className="text-[var(--text-muted)] mb-5 max-w-lg leading-relaxed">
                I build and support technology solutions across software, data, and business environments — with experience in development, analytics, and project delivery.
              </p>
              <p className="text-[var(--text-muted)] mb-8 max-w-lg leading-relaxed">
                Open to internship and graduate opportunities across software, business analysis, and technology roles.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-syne bg-[var(--accent)] text-[var(--bg-main)] px-6 py-3 rounded-lg hover:bg-[var(--accent-dark)] font-semibold shadow-[0_10px_24px_rgba(47,58,50,0.12)] transition"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="font-syne border border-[var(--accent)] text-[var(--accent-dark)] bg-[rgba(252,251,248,0.52)] px-6 py-3 rounded-lg hover:bg-[var(--accent-light)] transition"
                >
                  View My Work
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[var(--card-bg)] shadow-[0_18px_46px_rgba(47,58,50,0.14)] ring-2 ring-[var(--accent-light)]">
                <img
                  src="/nunohs-portfolio/profilepic.png"  // dist\profilepic.jpg public\profilepic.jpg
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 55%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-syne text-3xl font-bold text-center mb-16 text-[var(--text-main)]">About Me</h2>
            <div className="max-w-3xl mx-auto bg-[var(--card-bg)] backdrop-blur-md p-8 rounded-xl border border-[var(--surface-glass-border)] shadow-[0_12px_34px_rgba(47,58,50,0.08)]">
              <div className="space-y-6">
                <p className="text-[var(--text-muted)] leading-relaxed italic">
                  I am a <strong className="text-[var(--text-main)] font-semibold">Computing and Software Systems</strong> graduate from the University of Melbourne, currently pursuing a <strong className="text-[var(--text-main)] font-semibold">Master of Management</strong> at the University of Sydney.

                  <br /><br />

                  My experience spans <strong className="text-[var(--text-main)] font-semibold">software development</strong>, <strong className="text-[var(--text-main)] font-semibold">data analysis</strong>,
                  and <strong className="text-[var(--text-main)] font-semibold">business-facing technology work</strong>. During my internship at <strong className="text-[var(--text-main)] font-semibold">Bank Negara Indonesia</strong>,
                  I supported <strong className="text-[var(--text-main)] font-semibold">IT Business Partners</strong> and project teams in managing <strong className="text-[var(--text-main)] font-semibold">system change requests</strong>,
                  documenting <strong className="text-[var(--text-main)] font-semibold">technical processes</strong>, and contributing to <strong className="text-[var(--text-main)] font-semibold">cross-functional delivery</strong> in a large-scale banking environment.

                  <br /><br />

                  I am particularly interested in roles where <strong className="text-[var(--text-main)] font-semibold">technology meets business impact</strong> — whether
                  through <strong className="text-[var(--text-main)] font-semibold">building systems</strong>, <strong className="text-[var(--text-main)] font-semibold">analysing data</strong>, or
                  supporting <strong className="text-[var(--text-main)] font-semibold">projects that improve organisational performance</strong>.
                </p>
                <p className="text-[var(--text-muted)] font-medium">Location: Based in Australia</p>
              </div>
              <div className="flex space-x-3 mt-8">
                <a href="mailto:hadinuno@gmail.com" target="_blank" className="bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent-dark)] hover:border-[rgba(112,134,107,0.36)] p-3 rounded-full transition">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/nunohs" target="_blank" className="bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent-dark)] hover:border-[rgba(112,134,107,0.36)] p-3 rounded-full transition">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hadi-nuno-handrison/" target="_blank" className="bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent-dark)] hover:border-[rgba(112,134,107,0.36)] p-3 rounded-full transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-[rgba(236,239,232,0.46)]">
          <div className="container mx-auto px-4">
            <h2 className="font-syne text-3xl font-bold text-center mb-16 text-[var(--text-main)] flex items-center justify-center gap-3">
              <Briefcase className="text-[var(--accent-dark)] hidden sm:inline" size={28} aria-hidden />
              Experience
            </h2>
            <div className="max-w-3xl mx-auto bg-[var(--card-bg)] backdrop-blur-md p-8 rounded-xl border border-[var(--surface-glass-border)] shadow-[0_12px_34px_rgba(47,58,50,0.08)]">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-syne text-xl font-semibold text-[var(--text-main)]">
                    IT Business Partner &amp; Project Management Intern
                  </h3>
                  <p className="font-syne text-lg text-[var(--accent-dark)] font-medium mt-1">Bank Negara Indonesia (BNI)</p>
                </div>
              </div>
              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                Supported IT Business Partners and project teams in managing system change requests and
                technology initiatives within a banking environment.
              </p>
              <h4 className="font-syne text-base font-semibold text-[var(--text-main)] mb-4 uppercase tracking-wide">Key Contributions</h4>
              <ul className="list-disc list-inside space-y-3 text-[var(--text-muted)] marker:text-[var(--accent-dark)]">
                <li>Prepared and managed change request (CR) documentation</li>
                <li>Supported coordination between business and IT stakeholders</li>
                <li>Contributed to system enhancement and regulatory documentation</li>
                <li>Gained exposure to enterprise systems, IT governance, and project workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section — Two-tier redesign */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">

            {/* Section header */}
            <h2 className="font-syne text-3xl font-bold text-center mb-3 text-[var(--text-main)]">Projects</h2>
            <p className="text-center text-[var(--text-muted)] text-sm mb-16 max-w-xl mx-auto">
              Work spanning data analytics, full-stack development, and business analysis — from deployed apps to consulting-style reports.
            </p>

            {/* ── TIER 1: Featured Projects ── */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="font-mono text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest whitespace-nowrap">Featured Projects</h3>
                <div className="flex-1 h-px bg-[var(--border)]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-[var(--card-bg)] backdrop-blur-md rounded-xl overflow-hidden border border-[var(--surface-glass-border)] shadow-[0_10px_28px_rgba(47,58,50,0.07)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(112,134,107,0.32)] hover:shadow-[0_8px_30px_rgba(47,58,50,0.10)] flex flex-col cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    {/* Card header: image carousel or gradient banner */}
                    {project.images.length > 0 ? (
                      <div className="relative shrink-0">
                        <img
                          src={project.images[currentImageIndex[project.id]].url}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                        {/* Category badge */}
                        <span className="font-mono absolute top-3 left-3 bg-[rgba(252,251,248,0.88)] text-[var(--accent-dark)] text-xs font-medium px-3 py-1 rounded-full border border-[rgba(112,134,107,0.32)] backdrop-blur-sm">
                          {project.category}
                        </span>
                        {/* Carousel controls */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => { e.stopPropagation(); prevImage(project.id); }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[rgba(47,58,50,0.72)] text-[var(--bg-main)] p-1.5 rounded-full hover:bg-[rgba(47,58,50,0.86)] transition"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                              </svg>
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); nextImage(project.id); }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[rgba(47,58,50,0.72)] text-[var(--bg-main)] p-1.5 rounded-full hover:bg-[rgba(47,58,50,0.86)] transition"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </button>
                            <div className="font-mono absolute top-3 right-3 bg-[rgba(47,58,50,0.72)] text-[var(--bg-main)] text-xs px-2 py-0.5 rounded-full">
                              {currentImageIndex[project.id] + 1}/{project.images.length}
                            </div>
                          </>
                        )}
                        {/* Image subtitle */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(47,58,50,0.78)] to-transparent px-4 py-3">
                          <p className="font-mono text-[var(--bg-main)] text-xs leading-tight">{project.images[currentImageIndex[project.id]].subtitle}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="h-32 bg-gradient-to-br from-[var(--section-bg)] to-[var(--bg-gradient-1)] relative overflow-hidden flex items-end px-5 pb-4 shrink-0 border-b border-[var(--border)]">
                        <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(112,134,107,0.28)]" />
                        <div className="absolute -top-8 -right-8 w-36 h-36 bg-[rgba(112,134,107,0.08)] rounded-full" />
                        <div className="absolute top-4 right-12 w-20 h-20 bg-[rgba(112,134,107,0.06)] rounded-full" />
                        <span className="font-mono relative z-10 bg-[var(--accent-soft)] text-[var(--accent-dark)] text-xs font-medium px-3 py-1 rounded-full border border-[rgba(112,134,107,0.32)]">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-syne text-lg font-bold text-[var(--text-main)] mb-2">{project.title}</h3>
                      <p className="text-[var(--text-muted)] text-sm italic mb-4 leading-relaxed">{project.hook}</p>

                      <ul className="space-y-2 mb-5">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-[var(--text-muted)] text-sm">
                            <span className="text-[var(--accent-dark)] mt-0.5 shrink-0">▸</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="font-mono bg-[var(--accent-soft)] text-[var(--accent-dark)] px-2.5 py-0.5 rounded-full text-xs border border-[rgba(112,134,107,0.26)]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links — stopPropagation prevents triggering modal */}
                      <div className="flex flex-wrap gap-3 pt-3 mt-auto border-t border-[var(--surface-glass-border)]">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="font-syne inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--bg-main)] bg-[var(--accent)] hover:bg-[var(--accent-dark)] px-3 py-1.5 rounded-lg transition"
                          >
                            <ExternalLink size={13} /> Live Demo
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="font-syne inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-dark)] border border-[var(--border)] hover:border-[rgba(112,134,107,0.4)] px-3 py-1.5 rounded-lg bg-[var(--surface-glass)] transition"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── TIER 2: All Projects (filterable compact grid) ── */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-[var(--border)]"></div>
                <h3 className="font-mono text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest whitespace-nowrap">All Projects</h3>
                <div className="flex-1 h-px bg-[var(--border)]"></div>
              </div>

              {/* Filter bar */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filterCategories.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`font-mono px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      activeFilter === filter
                        ? 'bg-[var(--accent)] text-[var(--bg-main)] shadow-[0_6px_18px_rgba(47,58,50,0.10)]'
                        : 'bg-[rgba(252,251,248,0.62)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[rgba(112,134,107,0.36)] hover:text-[var(--accent-dark)]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Compact project grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAllProjects.length > 0 ? (
                  filteredAllProjects.map((project) => (
                    <div
                      key={project.id}
                      className={`bg-[var(--card-bg)] backdrop-blur-sm rounded-xl p-5 border border-[var(--surface-glass-border)] shadow-[0_8px_22px_rgba(47,58,50,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(112,134,107,0.26)] hover:shadow-[0_4px_20px_rgba(47,58,50,0.09)] flex flex-col ${project.isFeatured ? 'cursor-pointer' : ''}`}
                      onClick={() => project.isFeatured && openProjectModal(project.featuredData)}
                    >
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h4 className="font-syne font-semibold text-[var(--text-main)] leading-snug">{project.title}</h4>
                        {project.isFeatured && (
                          <span className="font-mono shrink-0 text-[10px] font-medium text-[var(--accent-dark)] bg-[var(--accent-soft)] px-2 py-0.5 rounded-full border border-[rgba(112,134,107,0.26)]">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      <p className="text-[var(--text-muted)] text-sm mb-3 leading-relaxed flex-1">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="font-mono bg-[rgba(252,251,248,0.62)] text-[var(--text-muted)] px-2 py-0.5 rounded-full text-[11px] border border-[var(--border)]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 mt-auto">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="font-syne inline-flex items-center gap-1.5 text-sm text-[var(--accent-dark)] hover:text-[var(--accent-dark)] font-medium transition"
                        >
                          <Github size={13} /> GitHub
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="font-syne inline-flex items-center gap-1.5 text-sm text-[var(--accent-dark)] hover:text-[var(--accent-dark)] font-medium transition"
                          >
                            <ExternalLink size={13} /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-[rgba(95,107,97,0.72)] text-sm font-mono">
                    No projects in this category yet — check back soon.
                  </div>
                )}
              </div>
            </div>

            {/* GitHub CTA */}
            <div className="flex justify-center mt-12">
              <a
                href="https://github.com/nunohs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-syne inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--bg-main)] px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_10px_24px_rgba(47,58,50,0.12)] transition"
              >
                <Github size={16} /> View All on GitHub
              </a>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[rgba(236,239,232,0.46)]">
          <div className="container mx-auto px-4">
            <h2 className="font-syne text-3xl font-bold text-center mb-16 text-[var(--text-main)]">My Skills</h2>
            <div className="max-w-5xl mx-auto">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="font-syne text-sm font-semibold mb-6 text-[var(--accent-dark)] border-b border-[var(--border)] pb-3 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center group">
                        <div className="bg-[var(--card-bg)] border border-[var(--surface-glass-border)] p-4 rounded-lg mb-2 w-full flex justify-center items-center h-16 shadow-[0_6px_16px_rgba(47,58,50,0.05)] hover:border-[rgba(112,134,107,0.32)] hover:bg-[var(--accent-light)] transition">
                          <div className="text-[var(--text-muted)] group-hover:text-[var(--accent-dark)] transition-colors">
                            {skill.icon}
                          </div>
                        </div>
                        <span className="font-mono text-[var(--text-muted)] text-xs font-medium group-hover:text-[var(--text-muted)] transition-colors">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-syne text-3xl font-bold text-center mb-8 text-[var(--text-main)]">Get In Touch</h2>
            <div className="max-w-2xl mx-auto bg-[var(--card-bg)] backdrop-blur-md p-8 rounded-xl border border-[var(--surface-glass-border)] shadow-[0_12px_34px_rgba(47,58,50,0.08)]">
              <h3 className="font-syne text-lg font-semibold mb-6 text-[var(--text-main)] uppercase tracking-wide">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-[var(--accent-dark)] shrink-0" size={22} />
                  <div>
                    <h4 className="font-syne font-medium text-[var(--text-main)] text-sm uppercase tracking-wide mb-0.5">Email</h4>
                    <p className="text-[var(--text-muted)]">hadinuno@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="text-[var(--accent-dark)] shrink-0" size={22} />
                  <div>
                    <h4 className="font-syne font-medium text-[var(--text-main)] text-sm uppercase tracking-wide mb-0.5">LinkedIn</h4>
                    <p className="text-[var(--text-muted)] text-sm">linkedin.com/in/hadi-nuno-handrison/</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="text-[var(--accent-dark)] shrink-0" size={22} />
                  <div>
                    <h4 className="font-syne font-medium text-[var(--text-main)] text-sm uppercase tracking-wide mb-0.5">GitHub</h4>
                    <p className="text-[var(--text-muted)]">github.com/nunohs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[rgba(236,239,232,0.68)] text-[var(--text-main)] py-12 border-t border-[var(--border)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-syne font-bold text-xl text-[var(--accent-dark)] mb-2">Hadi Nuno Handrison</div>
              <p className="text-[var(--text-muted)] text-sm">Computer Science Graduate · Master of Management Candidate · Technology, Data & Business</p>
            </div>
          </div>
          <div className="border-t border-[var(--border)] mt-8 pt-8 text-center text-[rgba(95,107,97,0.72)] text-sm font-mono">
            <p>© {new Date().getFullYear()} Hadi Nuno Handrison. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[rgba(47,58,50,0.54)] z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeProjectModal}
        >
          <div
            className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-[rgba(47,58,50,0.18)]"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex justify-between items-start p-6 border-b border-[var(--surface-glass-border)]">
              <div>
                <span className="font-mono text-[10px] font-medium text-[var(--accent-dark)] bg-[var(--accent-soft)] px-2.5 py-0.5 rounded-full border border-[rgba(112,134,107,0.26)]">
                  {selectedProject.category}
                </span>
                <h3 className="font-syne text-xl font-bold text-[var(--text-main)] mt-2">{selectedProject.title}</h3>
              </div>
              <button
                onClick={closeProjectModal}
                className="text-[rgba(95,107,97,0.72)] hover:text-[var(--text-muted)] ml-4 shrink-0 mt-1 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* Image carousel — only when images exist */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <>
                <div className="relative bg-[var(--section-bg)]">
                  <img
                    src={selectedProject.images[modalImageIndex].url}
                    alt={selectedProject.title}
                    className="w-full h-auto object-contain max-h-80 mx-auto"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[rgba(47,58,50,0.72)] text-[var(--bg-main)] p-2.5 rounded-full hover:bg-[rgba(47,58,50,0.86)] transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[rgba(47,58,50,0.72)] text-[var(--bg-main)] p-2.5 rounded-full hover:bg-[rgba(47,58,50,0.86)] transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                      <div className="font-mono absolute top-3 right-3 bg-[rgba(47,58,50,0.72)] text-[var(--bg-main)] text-xs px-2.5 py-1 rounded-full">
                        {modalImageIndex + 1}/{selectedProject.images.length}
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(47,58,50,0.78)] to-transparent px-5 py-4">
                    <p className="font-mono text-[var(--bg-main)] text-xs">{selectedProject.images[modalImageIndex].subtitle}</p>
                  </div>
                </div>

                {/* Thumbnail strip */}
                {selectedProject.images.length > 1 && (
                  <div className="flex overflow-x-auto gap-2 px-6 py-3 border-b border-[var(--surface-glass-border)] bg-[rgba(236,239,232,0.72)]">
                    {selectedProject.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setModalImageIndex(i)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                          modalImageIndex === i ? 'border-[var(--accent)]' : 'border-transparent hover:border-[var(--accent)]'
                        }`}
                      >
                        <img src={img.url} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Project details */}
            <div className="p-6">
              <p className="text-[var(--text-muted)] italic text-sm mb-5 leading-relaxed">{selectedProject.hook}</p>

              {selectedProject.outcomes && selectedProject.outcomes.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {selectedProject.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--text-muted)] text-sm">
                      <span className="text-[var(--accent-dark)] mt-0.5 shrink-0">▸</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="font-mono bg-[var(--accent-soft)] text-[var(--accent-dark)] px-3 py-1 rounded-full text-xs border border-[rgba(112,134,107,0.26)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Modal footer actions */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={closeProjectModal}
                  className="font-syne px-4 py-2 text-sm border border-[var(--border)] rounded-lg text-[var(--text-muted)] hover:bg-[rgba(252,251,248,0.62)] transition"
                >
                  Close
                </button>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-syne inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[var(--bg-main)] bg-[var(--accent)] hover:bg-[var(--accent-dark)] rounded-lg transition"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-syne inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-dark)] border border-[var(--border)] hover:border-[rgba(112,134,107,0.36)] rounded-lg bg-[var(--surface-glass)] transition"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App


