import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Todo App",
      description: "Modern task management application with dark/light theme toggle and local storage persistence.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nagaraj0000b/Todo-App",
      demo: "https://nagaraj0000b.github.io/Todo-App/",
      features: [
        "Add, edit, delete tasks",
        "Mark tasks as complete",
        "Filter tasks (All, Active, Completed)",
        "Dark/Light theme toggle",
        "Local storage persistence"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Featured Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-neon-blue">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-neon-purple">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 neon-border rounded-lg hover:bg-neon-blue/10 transition-all duration-300"
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 glow-button"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-neon-green">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center space-x-2 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;