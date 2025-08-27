import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-blue">
              Passionate Developer
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Currently pursuing B.Tech in Computer Science at IIIT Guwahati, I'm passionate about creating 
              innovative web solutions. I specialize in modern web technologies and love turning complex 
              problems into simple, beautiful designs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source 
              projects, or learning about the latest trends in software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-neon-blue">India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Education:</span>
                <span className="text-neon-blue">IIIT Guwahati</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Graduation:</span>
                <span className="text-neon-blue">2027</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Focus:</span>
                <span className="text-neon-blue">Full Stack Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;