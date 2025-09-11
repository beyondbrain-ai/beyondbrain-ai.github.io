'use client';

import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';

export default function MinimalFooter() {
  return (
    <footer className="py-16 glass-strong border-t border-glass-border">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-light text-white mb-4">
            Join the mission
          </h3>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Be part of building the brain every child deserves. 
            Get early access and help shape the future of learning.
          </p>
        </motion.div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 glass rounded-full text-white placeholder-neutral-500 border border-glass-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium glow-primary transition-all"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Notify Me
            </motion.button>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <motion.a
            href="mailto:hello@zunno.ai"
            className="inline-flex items-center space-x-2 text-neutral-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <Mail size={16} />
            <span>hello@zunno.ai</span>
          </motion.a>
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center space-x-2 text-neutral-500 text-sm"
        >
          <span>Built with</span>
          <Heart size={14} className="text-secondary animate-pulse" />
          <span>by zunno.ai</span>
        </motion.div>
      </div>
    </footer>
  );
}