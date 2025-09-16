'use client';

import { motion } from 'framer-motion';

export default function SchoolsSection() {
  const bottom = [
    'Competitive Learning Environment',
    'Performance Improvement Tracking',
    'Curriculum Optimization'
  ];

  return (
    <section id="schools" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="font-display text-4xl sm:text-5xl font-bold"><span className="text-white">For </span><span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Schools</span></h3>
          <p className="text-neutral-400 mt-3">Data-driven insights, improved outcomes, and a competitive learning environment.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div className="glass-strong rounded-2xl p-6 border border-glass-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="font-semibold text-white mb-2">Comprehensive Analytics Dashboard</h4>
            <ul className="space-y-2 text-sm text-neutral-300 mb-4">
              {['Track performance across grades and subjects','Identify learning gaps','Generate detailed reports'].map(i => (
                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />{i}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="glass-strong rounded-2xl p-6 border border-glass-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="font-semibold text-white mb-4">School Performance Dashboard</h4>
            <div className="grid grid-cols-3 gap-3 mb-6 text-center text-neutral-200">
              {[
                { t: 'Average Score', v: 87 },
                { t: 'Engagement Rate', v: 94 },
                { t: 'Completion Rate', v: 91 }
              ].map(k => (
                <div key={k.t} className="glass rounded-xl p-3">
                  <div className="text-xs opacity-80">{k.t}</div>
                  <div className="text-2xl font-bold">{k.v}%</div>
                </div>
              ))}
            </div>
            <div className="h-40">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path d="M0,100 C60,60 120,80 180,50 C240,30 270,40 300,35" fill="none" stroke="#fb923c" strokeWidth="4" />
                <path d="M0,105 C60,85 120,95 180,75 C240,55 270,60 300,58" fill="none" stroke="#f472b6" strokeWidth="4" />
              </svg>
              <div className="flex justify-end gap-4 text-xs text-neutral-400"><span className="text-orange-400">Math</span><span className="text-pink-400">Science</span></div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {bottom.map((t) => (
            <motion.div key={t} className="glass-strong rounded-2xl p-6 border border-glass-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="font-semibold text-white mb-2">{t}</h4>
              <p className="text-neutral-300 text-sm">Insights and tools that foster improvement across your institution.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


