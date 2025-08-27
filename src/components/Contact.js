import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Nagaraj,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    const mailtoLink = `mailto:nagarajbenchamatti@gmail.com?subject=${subject}&body=${body}`;
    
    // Try window.open first, then fallback to window.location
    const opened = window.open(mailtoLink);
    if (!opened) {
      window.location.href = mailtoLink;
    }
    
    setTimeout(() => {
      alert('Email client should open with your message ready to send!');
    }, 500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Get In Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-neon-blue text-xl" />
                  <span className="text-gray-300">nagarajbenchamatti@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-neon-purple text-xl" />
                  <span className="text-gray-300">+91 9740842826</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-neon-pink text-xl" />
                  <span className="text-gray-300">India</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 text-neon-purple">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Nagaraj0000b"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="p-3 rounded-full neon-border hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nagarajb1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="p-3 rounded-full neon-border hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-green">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card/50 border border-dark-border rounded-lg focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card/50 border border-dark-border rounded-lg focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card/50 border border-dark-border rounded-lg focus:border-neon-blue focus:outline-none transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glow-button"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;