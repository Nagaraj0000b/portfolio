import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-text-muted mb-4">
            Built using React & Tailwind CSS
          </p>
          <p className="text-text-muted text-sm">
            © 2025 Nagaraj. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;