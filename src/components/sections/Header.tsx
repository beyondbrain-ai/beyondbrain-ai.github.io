'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const audiences = ['Students', 'Parents', 'Schools'] as const;
type Audience = typeof audiences[number];

const navigation = {
  Students: [
    { name: 'AI Tutor', href: '#ai-tutor' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Achievements', href: '#achievements' }
  ],
  Parents: [
    { name: 'Progress Tracking', href: '#progress' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'Safety & Security', href: '#safety' },
    { name: 'Pricing', href: '#pricing' }
  ],
  Schools: [
    { name: 'Platform Overview', href: '#platform' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Integration', href: '#integration' },
    { name: 'Contact Sales', href: '#contact' }
  ]
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState<Audience>('Parents');

  return (
    <header className="fixed top-0 w-full glass-strong z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">zunno.ai</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Audience Selector */}
            <div className="relative">
              <motion.button
                className="flex items-center space-x-1 px-4 py-2 rounded-lg glass hover:glass-strong transition-all duration-300"
                whileHover={{ scale: 1.02, rotateX: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium text-neutral-200">For {activeAudience}</span>
                <ChevronDown size={16} className="text-neutral-400" />
              </motion.button>
              
              <motion.div 
                className="absolute top-full mt-2 left-0 glass-strong rounded-lg py-2 min-w-32 border border-glass-border"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {audiences.map((audience) => (
                  <button
                    key={audience}
                    onClick={() => setActiveAudience(audience)}
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm hover:bg-neutral-800 transition-colors text-neutral-300",
                      activeAudience === audience && "text-primary font-medium"
                    )}
                  >
                    For {audience}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
              {navigation[activeAudience].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-300 hover:text-primary font-medium transition-colors"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                className="text-primary font-medium hover:text-primary/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 glow-primary"
                whileHover={{ scale: 1.05, y: -2, rotateX: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-neutral-200">
            {/* Mobile Audience Selector */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-neutral-500">Choose your perspective:</span>
              <div className="flex space-x-2">
                {audiences.map((audience) => (
                  <button
                    key={audience}
                    onClick={() => setActiveAudience(audience)}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                      activeAudience === audience
                        ? "bg-primary text-white"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    )}
                  >
                    {audience}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navigation[activeAudience].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-neutral-600 hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-2 pt-4">
              <button className="text-primary font-medium text-left">
                Sign In
              </button>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium text-center">
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}