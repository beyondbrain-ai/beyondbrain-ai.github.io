'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  'For Students': [
    { name: 'AI Tutor', href: '#ai-tutor' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Study Materials', href: '#materials' }
  ],
  'For Parents': [
    { name: 'Progress Tracking', href: '#progress' },
    { name: 'Safety & Security', href: '#safety' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Success Stories', href: '#stories' }
  ],
  'For Schools': [
    { name: 'Platform Overview', href: '#platform' },
    { name: 'Analytics Dashboard', href: '#analytics' },
    { name: 'Integration', href: '#integration' },
    { name: 'Enterprise', href: '#enterprise' }
  ],
  'Company': [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Contact', href: '#contact' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
];

const contactInfo = [
  { icon: Mail, text: 'hello@zunno.ai', href: 'mailto:hello@zunno.ai' },
  { icon: Phone, text: '+91-9876543210', href: 'tel:+919876543210' },
  { icon: MapPin, text: 'hyderabad, Telangana, India', href: '#' }
];

export default function Footer() {
  return (
    <footer className="glass-strong border-t border-glass-border text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="font-display font-bold text-2xl">zunno.ai</span>
            </motion.div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Every child deserves a brain, and we are building it. The Tesla of EdTech - 
              premium, innovative, and future-forward AI-powered education.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <info.icon size={16} />
                  <span className="text-sm">{info.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-12 pt-8 border-t border-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-md">
            <h3 className="font-display font-semibold text-lg mb-2">Stay Updated</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Get the latest updates on new features, competitions, and success stories.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-neutral-400 text-sm">
              <span>© 2024 zunno.ai. Built with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>in India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}