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

          {/* Nav and CTA */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { name: 'For Students', href: '#students' },
              { name: 'For Teachers', href: '#teachers' },
              { name: 'For Parents', href: '#parents' },
              { name: 'For Schools', href: '#schools' },
              { name: 'About Us', href: '#about' },
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-neutral-300 hover:text-white text-sm font-medium">
                {item.name}
              </a>
            ))}
            <a href="#cta" className="ml-2 bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg font-medium">Request Demo</a>
          </nav>
        </div>
      </div>
    </header>
  );
}