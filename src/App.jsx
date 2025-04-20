import { useState } from 'react'
import './App.css'
import { 
  Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Server, 
  Globe, Cloud, Terminal, Laptop, FileCode, Boxes, BrainCircuit, 
  CircuitBoard, Container, LayoutGrid, Settings, MessageSquareCode, 
  Timer, Workflow, FileJson, Kanban, Layers, Cpu, Languages, 
  FileType, Table, Database as DatabaseIcon, CloudCog, Workflow as WorkflowIcon,
  GitBranch, Keyboard, Wrench, GitCompareArrows, SquareKanban, 
  PanelLeft, Component, Infinity, Grid3X3, ArrowDownWideNarrow, FlaskConical, Dice1
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
      tags: ['Object-Oriented Programming', 'Java', 'Game-Development', 'Animation'],
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
      title: 'MindyCake',
      description: 'MindyCake is a frontend web application developed for my mom\'s local bakery shop. The website showcases the bakery\'s products, provides information about the business, and includes contact details for customer inquiries. Built with React and styled with Tailwind CSS, this project demonstrates my ability to create responsive and visually appealing user interfaces.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      projectUrl: 'https://github.com/nunohs/nunohs-mindycake',
      images: [
        {
          url: '/nunohs-portfolio/mindy.png',
          subtitle: 'Screenshot #1'
        },
        {
          url: '/nunohs-portfolio/mindypic1.png',
          subtitle: 'Screenshot #2'
        },
        {
          url: '/nunohs-portfolio/mindypic2.png',
          subtitle: 'Screenshot #3'
        }
      ]
    }
  ];

  // Skills with icons and categories
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: 'JavaScript', icon: <FileCode size={24} /> },
        { name: 'TypeScript', icon: <FileType size={24} /> },
        { name: 'Java', icon: <Cpu size={24} /> },
        { name: 'Python', icon: <Cpu size={24} /> },
        { name: 'C', icon: <Terminal size={24} /> },
        { name: 'SQL', icon: <Database size={24} /> },
        { name: 'HTML', icon: <Code size={24} /> },
        { name: 'CSS', icon: <Layers size={24} /> },
        { name: 'MATLAB', icon: <FlaskConical size={24} /> },
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: 'React', icon: <Component size={24} /> },
        { name: 'Redux', icon: <Infinity size={24} /> },
        { name: 'Tailwind CSS', icon: <LayoutGrid size={24} /> },
        { name: 'Bootstrap', icon: <Grid3X3 size={24} /> },
        { name: 'Vite', icon: <Component size={24} /> },
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: 'Node.js', icon: <Server size={24} /> },
        { name: 'Express', icon: <MessageSquareCode size={24} /> },
        { name: 'REST APIs', icon: <Globe size={24} /> },
        { name: 'Gradle', icon: <Boxes size={24} /> },
      ]
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: 'AzureSQL', icon: <DatabaseIcon size={24} /> },
        { name: 'MySQL', icon: <Table size={24} /> },
        { name: 'MongoDB', icon: <Database size={24} /> },
        { name: 'Microsoft Azure', icon: <CloudCog size={24} /> },
        { name: 'Cloud', icon: <Cloud size={24} /> },
      ]
    },
    {
      name: "DevOps & Version Control",
      skills: [
        { name: 'Git', icon: <GitBranch size={24} /> },
        { name: 'Docker', icon: <Container size={24} /> },
        { name: 'GitLab Flow', icon: <WorkflowIcon size={24} /> },
      ]
    },
    {
      name: "Development Tools",
      skills: [
        { name: 'Visual Studio Code', icon: <Keyboard size={24} /> },
        { name: 'IntelliJ', icon: <Wrench size={24} /> },
        { name: 'PyCharm', icon: <Wrench size={24} /> },
        { name: 'Postman', icon: <GitCompareArrows size={24} /> },
      ]
    },
    {
      name: "Project Management & Methodologies",
      skills: [
        { name: 'Agile', icon: <Timer size={24} /> },
        { name: 'Scrum', icon: <Workflow size={24} /> },
        { name: 'Kanban', icon: <SquareKanban size={24} /> },
        { name: 'Jira', icon: <PanelLeft size={24} /> },
        { name: 'Confluence', icon: <FileJson size={24} /> },
        { name: 'UML', icon: <Workflow size={24} /> },
        { name: 'OOP', icon: <BrainCircuit size={24} /> },
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: 'Game Development', icon: <CircuitBoard size={24} /> },
        { name: 'Animation', icon: <Dice1 size={24} /> },
      ]
    }
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
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-indigo-600">Hadi Nuno Handrison</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-indigo-500'
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
          <div className="md:hidden bg-white py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item ? 'text-indigo-600 font-medium' : 'text-gray-600'
                  } capitalize py-2 text-left`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Hello, I'm <span className="text-indigo-600">Hadi Nuno Handrison</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                I build responsive, user-friendly applications with modern technologies.
                Let's create something amazing together.
              </p>
              <div className="flex space-x-4">
                <button onClick={() => scrollToSection('contact')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                  Get in Touch
                </button>
                <button onClick={() => scrollToSection('projects')} className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                  View My Work
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src="/nunohs-portfolio/hadipic.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">About Me</h2>
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium w-full md:w-1/4 text-gray-700 mb-1 md:mb-0">Name:</span>
                  <span className="text-gray-600">Hadi Nuno Handrison</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium w-full md:w-1/4 text-gray-700 mb-1 md:mb-0">Age:</span>
                  <span className="text-gray-600">21</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium w-full md:w-1/4 text-gray-700 mb-1 md:mb-0">Location:</span>
                  <span className="text-gray-600">Melbourne, Australia</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium w-full md:w-1/4 text-gray-700 mb-1 md:mb-0">Education:</span>
                  <span className="text-gray-600">B.S. Computing & Software Systems, University of Melbourne</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium w-full md:w-1/4 text-gray-700 mb-1 md:mb-0">Looking For:</span>
                  <span className="text-gray-600">Internships or Junior Dev Roles in 2025</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/nunohs" target='_blank' className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full transition">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hadi-nuno-handrison/" target='_blank' className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:hadinuno@gmail.com" target='_blank' className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Now before Skills */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
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
                  <div className="px-4 py-2 border-b border-gray-100 bg-indigo-50">
                    <p className="text-sm text-indigo-700 italic">
                      {project.images[currentImageIndex[project.id]].subtitle}
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
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
                  className="bg-indigo-600 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  View More On My GitHub
                </a>
              </div>
          </div>
        </section>

        {/* Skills Section - Now after Projects */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">My Skills</h2>
            <div className="max-w-5xl mx-auto">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-xl font-semibold mb-6 text-indigo-700 border-b border-indigo-100 pb-2">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center group">
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-2 w-full flex justify-center items-center h-16 hover:shadow-md hover:bg-indigo-50 transition">
                          <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                            {skill.icon}
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Get In Touch</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="mr-4 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">hadinuno@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-4 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-medium text-gray-800">LinkedIn</h4>
                    <p className="text-gray-600">https://www.linkedin.com/in/hadi-nuno-handrison/</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Github className="mr-4 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-medium text-gray-800">GitHub</h4>
                    <p className="text-gray-600">https://github.com/nunohs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl mb-2">Hadi Nuno Handrison</div>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
           
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
                      modalImageIndex === index ? 'border-indigo-600' : 'border-transparent'
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
                      <span key={index} className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm">
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
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
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
