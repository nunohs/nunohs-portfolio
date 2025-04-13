import { useState } from 'react'
import './App.css'
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Server, Globe, Cloud, Terminal } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState({1: 0, 2: 0, 3: 0});

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: 'Australian Dictionary of Biographies Website',
      description: 'A website made by 5 group members that addresses the issues of our client: <b>Dr Carolyn Rasmussen</b>. The source code is <b>private</b> due to client ownership, but project documentation is available via <b>Confluence</b> and <b>Jira</b>. Main contribution: API development and back-end implementation. Git Workflow: <b>GitLab Flow</b>',
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
      description: 'A Java 2D <b>"Rhythm Game"</b> that is similar to the game "Guitar Hero"',
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
      description: "A <b>frontend</b> web app for my mom's bakery shop. ",
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      projectUrl: 'https://github.com/nunohs/nunohs-mindycake',
      images: [
        {
          url: '/nunohs-portfolio/mindy.png',
          subtitle: 'Screenshot of the website'
        },
      ]
    }
  ];

  // Skills with icons
  const skills = [
    { name: 'React', icon: <Code size={28} /> },
    { name: 'JavaScript', icon: <Terminal size={28} /> },
    { name: 'Node.js', icon: <Server size={28} /> },
    { name: 'MongoDB', icon: <Database size={28} /> },
    { name: 'Tailwind CSS', icon: <Globe size={28} /> },
    { name: 'Azure', icon: <Cloud size={28} /> },
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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-indigo-600">Hadi Nuno Handrison</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
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
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
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

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-3 w-full flex justify-center hover:shadow-md hover:bg-indigo-50 transition">
                    <div className="text-indigo-600">
                      {skill.icon}
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                  {/* Image Carousel */}
                  <div className="relative">
                    <img 
                      src={project.images[currentImageIndex[project.id]].url} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Carousel Controls */}
                    <button 
                      onClick={() => prevImage(project.id)} 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => nextImage(project.id)} 
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
                    <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
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
    </div>
  )
}

export default App
