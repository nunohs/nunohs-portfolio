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
  const [currentImageIndex, setCurrentImageIndex] = useState({1: 0, 2: 0, 3: 0});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: 'Australian Dictionary of Biographies Website',
      description: 'This project involved developing a comprehensive website for the Australian Dictionary of Biographies. As part of a 5-member team, we worked directly with Dr. Carolyn Rasmussen to address specific client requirements. My main contributions included API development and back-end implementation. The project followed Agile methodologies with regular sprints and utilized GitLab Flow for version control. Due to client ownership, the source code is private, but project documentation is available through Confluence and Jira.',
      tags: ['Typescript', 'Node.js', 'Azure', 'Express','Jira', 'Confluence', 'Agile', 'REST APIs', 'AzureSQL', 'Docker', 'Postman', 'Gitlab Flow', 'Sprints' ],
      projectUrl: 'https://github.com/nunohs',
      images: [
        {
          url: '/nunohs-portfolio/webdesign3.jpg',
          subtitle: 'Screenshot of the design #1'
        },
        {
          url: '/nunohs-portfolio/sampledesign.png',
          subtitle: 'Screenshot of the design #2'
        },
        {
          url: '/nunohs-portfolio/projectroadmap.png',
          subtitle: 'Project Roadmap'
        },
        {
          url: '/nunohs-portfolio/confluencepic.png',
          subtitle: 'Confluence Documentation Home Page'
        },
        {
          url: '/nunohs-portfolio/jirapic.png',
          subtitle: 'Jira Timeline'
        },
      ]
    },
    {
      id: 2,
      title: 'Shadow Dance',
      description: 'Shadow Dance is a Java-based 2D rhythm game inspired by Guitar Hero. Players must press the correct keys in time with the music to score points. The game features multiple levels with increasing difficulty, custom music tracks, and visual effects. This project was developed as one of my assignments on my 2nd year of my degree to learn game development concepts and Java programming.',
      tags: ['Object-Oriented Programming', 'Java', 'Game-Development'],
      projectUrl: 'https://github.com/nunohs/nunohs-shadowdance',
      images: [
        {
          url: '/nunohs-portfolio/sh2.png',
          subtitle: 'Level 1'
        },
        {
          url: '/nunohs-portfolio/sh6.png',
          subtitle: 'Level 3'
        },
      ]
    },
    {
      id: 3,
      title: 'Sales Performance Dashboard',
      description: 'Analysed sales data using Power BI to identify trends, regional performance, and key revenue drivers. Developed an interactive dashboard to support data-driven decision making across product categories and geographic regions.',
      tags: ['Power BI', 'Microsoft Excel', 'Data Analysis'],
      projectUrl: 'https://github.com/nunohs/sales-performance-dashboard', 
      images: [
        {
          url: '/nunohs-portfolio/dashboard-overview-sales.png',
          subtitle: 'Sales Performance Dashboard Overview'
        },
        {
          url: '/nunohs-portfolio/datamodel.png',
          subtitle: 'Data Model'
        }
      ]
    }
  ];

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
        {name: 'Microsoft Excel', icon: <FileSpreadsheet size={24} /> },
        {name: 'Power BI', icon: <ChartBar size={24} /> },
      ]
    },
    {
      name: "Tools & Workflow",
      skills: [
        { name: 'Git', icon: <GitBranch size={24} /> },
        {name: 'Postman', icon: <GitCompareArrows size={24} /> },
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
    const projectImages = projects.find(p => p.id === projectId).images;
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectId]: (currentImageIndex[projectId] + 1) % projectImages.length
    });
  };

  const prevImage = (projectId) => {
    const projectImages = projects.find(p => p.id === projectId).images;
    setCurrentImageIndex({
      ...currentImageIndex,
      [projectId]: (currentImageIndex[projectId] - 1 + projectImages.length) % projectImages.length
    });
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextModalImage = () => {
    if (selectedProject) {
      setModalImageIndex((modalImageIndex + 1) % selectedProject.images.length);
    }
  };

  const prevModalImage = () => {
    if (selectedProject) {
      setModalImageIndex((modalImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="relative min-h-screen">
      <PaperShaderBackground color1="#5b5ff0" color2="#e8ecfc" />
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-indigo-100/60 shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-brand-700">Hadi Nuno Handrison</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item ? 'text-brand-600 font-medium' : 'text-slate-600 hover:text-brand-600'
                } capitalize`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md py-2 border-t border-indigo-100/50">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item ? 'text-brand-600 font-medium' : 'text-slate-600'
                  } capitalize py-2 text-left`}
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
        <section id="home" className="relative py-20 bg-white/25 backdrop-blur-[2px]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Hello, I'm <span className="text-brand-600">Hadi Nuno Handrison</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-700 mb-6">
              Computer Science Graduate @UniMelb | Master of Management @USYD
              </h2>
              <p className="text-slate-700 mb-8 max-w-lg">
              I build and support technology solutions across software, data, and business environments — with experience in development, analytics, and project delivery.
              </p>
              <p className="text-slate-700 mb-8 max-w-lg">
              Open to internship and graduate opportunities across software, business analysis, and technology roles.
              </p>
              <div className="flex space-x-4">
                <button onClick={() => scrollToSection('contact')} className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 shadow-md shadow-brand-600/25 transition">
                  Get in Touch
                </button>
                <button onClick={() => scrollToSection('projects')} className="border border-brand-600 text-brand-600 px-6 py-3 rounded-lg bg-white/60 hover:bg-white/90 backdrop-blur-sm transition">
                  View My Work
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/90 shadow-xl ring-2 ring-brand-200/60">
                <img src="/nunohs-portfolio/hadi.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover" 
                style={{objectPosition: 'center 55%'}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">About Me</h2>
            <div className="max-w-3xl mx-auto bg-white/75 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/70">
              <div className="space-y-6">
              <p className="text text-brand-900 italic">
              I am a <strong>Computing and Software Systems</strong> graduate from the University of Melbourne, currently pursuing a <strong>Master of Management</strong> at the University of Sydney.

              <br /><br />

              My experience spans <strong>software development</strong>, <strong>data analysis</strong>, 
              and <strong>business-facing technology work</strong>. During my internship at <strong>Bank Negara Indonesia</strong>, 
              I supported <strong>IT Business Partners</strong> and project teams in managing <strong>system change requests</strong>, 
              documenting <strong>technical processes</strong>, and contributing to <strong>cross-functional delivery</strong> in a large-scale banking environment.

              <br /><br />

              I am particularly interested in roles where <strong>technology meets business impact</strong> — whether 
              through <strong>building systems</strong>, <strong>analysing data</strong>, or 
              supporting <strong>projects that improve organisational performance
                </strong>.
              </p>
              <h3 className="text font-semibold mb-2 text-slate-800">Location: Based in Australia</h3>
              </div>
              <div className="flex space-x-4 mt-8">
              <a href="mailto:hadinuno@gmail.com" target='_blank' className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/nunohs" target='_blank' className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full transition">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hadi-nuno-handrison/" target='_blank' className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
                  <Linkedin size={20} />
                </a>
                
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 flex items-center justify-center gap-3">
              <Briefcase className="text-brand-600 hidden sm:inline" size={32} aria-hidden />
              Experience
            </h2>
            <div className="max-w-3xl mx-auto bg-white/75 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/70">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    IT Business Partner &amp; Project Management Intern
                  </h3>
                  <p className="text-lg text-brand-700 font-medium mt-1">Bank Negara Indonesia (BNI)</p>
                </div>
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Supported IT Business Partners and project teams in managing system change requests and
                technology initiatives within a banking environment.
              </p>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Contributions</h4>
              <ul className="list-disc list-inside space-y-3 text-slate-700 marker:text-brand-600">
                <li>Prepared and managed change request (CR) documentation</li>
                <li>Supported coordination between business and IT stakeholders</li>
                <li>Contributed to system enhancement and regulatory documentation</li>
                <li>Gained exposure to enterprise systems, IT governance, and project workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section*/}
        <section id="projects" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white/85 backdrop-blur-md rounded-xl overflow-hidden border border-white/80 shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl hover:border-brand-200/80 cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  {/* Image Carousel */}
                  <div className="relative">
                    <img 
                      src={project.images[currentImageIndex[project.id]].url} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Carousel Controls */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(project.id);
                      }} 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(project.id);
                      }} 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                      {currentImageIndex[project.id] + 1}/{project.images.length}
                    </div>
                  </div>
                  
                  {/* Image Subtitle */}
                  <div className="px-4 py-2 border-b border-brand-100/80 bg-brand-50/90">
                    <p className="text-sm text-brand-800 italic">
                      {project.images[currentImageIndex[project.id]].subtitle}
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">{project.title}</h3>
                    <p className="text-slate-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm border border-brand-100/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center  mt-8 ">
                <a
                  href="https://github.com/nunohs" 
                  target='_blank'
                  className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md shadow-brand-600/20 transition-colors"
                >
                  View More On My GitHub
                </a>
              </div>
          </div>
        </section>

        {/* Skills Section - Now after Projects */}
        <section id="skills" className="py-20 bg-white/25 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">My Skills</h2>
            <div className="max-w-5xl mx-auto">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-xl font-semibold mb-6 text-brand-700 border-b border-brand-200/80 pb-2">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center group">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-white/80 shadow-sm mb-2 w-full flex justify-center items-center h-16 hover:shadow-md hover:bg-brand-50/90 transition">
                          <div className="text-brand-600 group-hover:text-brand-700 transition-colors">
                            {skill.icon}
                          </div>
                        </div>
                        <span className="text-slate-800 font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Get In Touch</h2>
            <div className="max-w-2xl mx-auto bg-white/75 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/70">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="mr-4 text-brand-600" size={24} />
                  <div>
                    <h4 className="font-medium text-slate-900">Email</h4>
                    <p className="text-slate-700">hadinuno@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-4 text-brand-600" size={24} />
                  <div>
                    <h4 className="font-medium text-slate-900">LinkedIn</h4>
                    <p className="text-slate-700">https://www.linkedin.com/in/hadi-nuno-handrison/</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Github className="mr-4 text-brand-600" size={24} />
                  <div>
                    <h4 className="font-medium text-slate-900">GitHub</h4>
                    <p className="text-slate-700">https://github.com/nunohs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/95 backdrop-blur-md text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl mb-2">Hadi Nuno Handrison</div>
              <p className="text-gray-400">Computer Science Graduate | Master of Management Candidate | Technology, Data & Project-Focused</p>
            </div>
           
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Hadi Nuno Handrison. All rights reserved.</p>
          </div>
        </div>
      </footer>

       {/* Project Modal */}
       {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-screen overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeProjectModal();
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Large Image Carousel */}
              <div className="relative mb-8 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.images[modalImageIndex].url} 
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain max-h-96 mx-auto"
                />
                
                {/* Carousel Controls */}
                <button 
                  onClick={prevModalImage} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={nextModalImage} 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                
                {/* Image Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <p className="text-lg">{selectedProject.images[modalImageIndex].subtitle}</p>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full">
                  {modalImageIndex + 1}/{selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
                {selectedProject.images.map((image, index) => (
                  <button 
                    key={index} 
                    onClick={() => setModalImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      modalImageIndex === index ? 'border-brand-600' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image.url} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Project Details</h4>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="bg-brand-50 text-brand-700 px-4 py-2 rounded-lg text-sm border border-brand-100/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="flex justify-end space-x-4 mt-8">
                <button 
                  onClick={closeProjectModal}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <a 
                  href={selectedProject.projectUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 flex items-center"
                >
                  Visit Project <ExternalLink size={16} className="ml-2" />
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
