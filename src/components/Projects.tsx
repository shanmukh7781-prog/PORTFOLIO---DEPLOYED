import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "LinkedIn Clone",
    year: "2024",
    description: "A full-featured LinkedIn clone with professional networking capabilities and modern UI.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Linkedin-Clone",
    demo: "https://shanmukh7781-prog.github.io/Linkedin-Clone",
    details: {
      technologies: ["React", "Firebase", "Redux", "Tailwind CSS"],
      features: [
        "User authentication",
        "Profile management",
        "Post creation and interaction",
        "Real-time updates"
      ],
      challenges: "Implementing real-time features and maintaining LinkedIn's complex UI structure"
    }
  },
  {
    title: "Security Attacks Demo",
    year: "2024",
    description: "Educational platform demonstrating various security attacks and prevention methods.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Security-Attacks",
    demo: "https://shanmukh7781-prog.github.io/Security-Attacks",
    details: {
      technologies: ["Python", "JavaScript", "Security Tools", "Docker"],
      features: [
        "Attack simulations",
        "Prevention techniques",
        "Interactive tutorials",
        "Security best practices"
      ],
      challenges: "Creating safe demonstration environments while maintaining educational value"
    }
  },
  {
    title: "Basic Car Website",
    year: "2024",
    description: "Modern car dealership website with vehicle showcase and booking system.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Basic-Car-Website",
    demo: "https://shanmukh7781-prog.github.io/Basic-Car-Website",
    details: {
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Vehicle catalog",
        "Booking system",
        "Price comparison",
        "User reviews"
      ],
      challenges: "Implementing a responsive design with smooth image loading and filtering"
    }
  },
  {
    title: "Banner Page of Sassto",
    year: "2024",
    description: "Dynamic banner page with modern design and animations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Banner-Page-of-Sassto",
    demo: "https://shanmukh7781-prog.github.io/Banner-Page-of-Sassto",
    details: {
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      features: [
        "Animated transitions",
        "Responsive design",
        "Modern UI elements",
        "Performance optimization"
      ],
      challenges: "Creating smooth animations while maintaining performance"
    }
  },
  {
    title: "Secure File Sharing",
    year: "2024",
    description: "End-to-end encrypted file sharing platform with advanced security features.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Secure-File-Sharing",
    demo: "https://shanmukh7781-prog.github.io/Secure-File-Sharing",
    details: {
      technologies: ["Node.js", "React", "AWS S3", "Encryption"],
      features: [
        "End-to-end encryption",
        "Access control",
        "File versioning",
        "Audit logging"
      ],
      challenges: "Implementing secure key management and maintaining user privacy"
    }
  },
  {
    title: "Information Gathering Tool",
    year: "2024",
    description: "Advanced reconnaissance tool for ethical hacking and security assessment.",
    image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Information-Gathering-Tool",
    secondaryGithub: "https://github.com/shanmukh7781-prog/Infomaration-Gathering.git",
    demo: "https://shanmukh7781-prog.github.io/Information-Gathering-Tool",
    details: {
      technologies: ["Python", "OSINT frameworks", "API integration"],
      features: [
        "Domain information gathering",
        "Network scanning",
        "Vulnerability assessment",
        "Report generation"
      ],
      challenges: "Handling rate limiting and API restrictions while maintaining tool efficiency"
    }
  },
  {
    title: "Advanced Search Engine",
    year: "2024",
    description: "Sophisticated search engine with advanced filtering and ranking capabilities.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Advanced-Search-Engine",
    demo: "https://shanmukh7781-prog.github.io/Advanced-Search-Engine",
    details: {
      technologies: ["Python", "Elasticsearch", "NLP", "Machine Learning"],
      features: [
        "Advanced text analysis",
        "Semantic search",
        "Real-time indexing",
        "Custom ranking algorithms"
      ],
      challenges: "Implementing efficient search algorithms and handling large datasets"
    }
  },
  {
    title: "Online Bank Management",
    year: "2024",
    description: "Comprehensive banking system with robust security and transaction management.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/ONLINE-BANK-MANAGEMENT",
    secondaryGithub: "https://github.com/shanmukh7781-prog/Online-Bank-Management-System",
    demo: "https://shanmukh7781-prog.github.io/ONLINE-BANK-MANAGEMENT",
    details: {
      technologies: ["Java", "Spring Boot", "MySQL", "React"],
      features: [
        "User authentication",
        "Transaction processing",
        "Account management",
        "Security monitoring"
      ],
      challenges: "Ensuring secure transactions and maintaining data consistency"
    }
  },
  {
    title: "Todo Application",
    year: "2024",
    description: "Feature-rich task management application with real-time updates.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Todo-Application",
    secondaryGithub: "https://github.com/shanmukh7781-prog/Todo-app",
    demo: "https://shanmukh7781-prog.github.io/Todo-Application",
    details: {
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Task management",
        "Categories and tags",
        "Due date tracking",
        "Progress monitoring"
      ],
      challenges: "Implementing real-time updates and optimizing performance"
    }
  },
  {
    title: "Portfolio",
    year: "2024",
    description: "Personal portfolio showcasing projects and skills with modern design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Portfolio",
    demo: "https://shanmukh7781-prog.github.io/Portfolio",
    secondaryDemo: "https://github.com/shanmukh7781-prog/PORTFOLIO---DEPLOYED",
    details: {
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Project showcase",
        "Contact form"
      ],
      challenges: "Creating an engaging and performant user experience"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.secondaryGithub && (
                    <a
                      href={project.secondaryGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {project.secondaryDemo && (
                    <a
                      href={project.secondaryDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>

                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Technical Challenges</h4>
                    <p className="text-gray-700">{selectedProject.details.challenges}</p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    {selectedProject.secondaryGithub && (
                      <a
                        href={selectedProject.secondaryGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    )}
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                    {selectedProject.secondaryDemo && (
                      <a
                        href={selectedProject.secondaryDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;