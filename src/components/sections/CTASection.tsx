'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-orange-400 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-white">
            <h3 className="font-display text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Learning?</h3>
            <p className="opacity-90 max-w-2xl mx-auto mb-8">Join thousands of schools elevating their educational experience with Zunno.ai. Request a personalized demo today.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="#contact" className="px-6 py-3 bg-white/90 text-neutral-900 rounded-xl font-semibold">Request a Demo</a>
              <a href="#about" className="px-6 py-3 bg-white/20 text-white rounded-xl font-semibold border border-white/40">Learn more about us</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


