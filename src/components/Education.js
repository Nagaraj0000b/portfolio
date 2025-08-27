import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const courses = [
    "Data Structures & Algorithms",
    "Operating Systems", 
    "Database Management Systems",
    "Computer Networks",
    "Cloud Computing",
    "Artificial Intelligence & Machine Learning"
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Education & Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">
              Bachelor of Technology
            </h3>
            <div className="space-y-3 mb-6">
              <p className="text-xl text-neon-purple">Computer Science & Engineering</p>
              <p className="text-gray-300">Indian Institute of Information Technology Guwahati (IIITG)</p>
              <p className="text-gray-400">2023 - 2027</p>
            </div>
            
            <h4 className="text-lg font-semibold mb-4 text-neon-green">
              Relevant Coursework:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
                  <span className="text-gray-300 text-sm">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">
              Certifications
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg border border-neon-blue/30"
            >
              <h4 className="text-lg font-semibold text-neon-blue mb-2">
                Complete Web Development Course
              </h4>
              <p className="text-gray-300 mb-2">Udemy</p>
              <p className="text-gray-400 text-sm">2024</p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                <span className="text-neon-green text-sm font-medium">Completed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;