'use client';

import { motion } from 'framer-motion';

export default function MinimalHeader() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-wide">zunno.ai</span>
          </motion.div>

          {/* Simple CTA */}
          <motion.button
            className="glass px-6 py-2 rounded-full text-sm font-medium text-neutral-200 hover:text-white transition-colors"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </div>
      </div>
    </header>
  );
}