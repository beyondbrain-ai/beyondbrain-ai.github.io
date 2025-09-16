'use client';

import { motion } from 'framer-motion';

export default function TeachersSection() {
  const cards = [
    { n: 1, title: 'Automated Assessments & Grading', text: 'Save hours with AI-powered assessment creation, automated grading, and detailed feedback generation.', note: 'Time saved per week', bar: '8+ hours' },
    { n: 2, title: 'Real-Time Analytics Dashboard', text: 'Gain insights into performance, identify gaps, and track progress with intuitive visualizations.', chart: true },
    { n: 3, title: 'Differentiated Instruction Tools', text: 'Personalized materials for different student needs and ability levels with AI assistance.', chips: ['A','B','C','Tailored'] },
    { n: 4, title: 'AI Lesson Planning Assistant', text: 'Generate creative, standards-aligned lesson plans, activities, and resources.', quote: '"Creating an engaging, interactive lesson plan..."' },
  ];

  return (
    <section id="teachers" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="font-display text-4xl sm:text-5xl font-bold"><span className="text-white">For </span><span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Teachers</span></h3>
          <p className="text-neutral-400 mt-3">Powerful tools to save time, gain insights, and personalize instruction.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <motion.div key={c.title} className="glass-strong rounded-2xl p-6 border border-glass-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-bold">{c.n}</div>
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
              <h4 className="font-semibold text-white mb-2">{c.title}</h4>
              <p className="text-neutral-300 text-sm mb-4">{c.text}</p>
              {c.note && (
                <>
                  <div className="text-xs text-neutral-400">{c.note}</div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 mt-2"><div className="h-2 rounded-full bg-orange-400" style={{ width: '80%' }} /></div>
                  <div className="text-xs text-neutral-400 mt-1">{c.bar}</div>
                </>
              )}
              {c.chart && (
                <div className="h-24 flex items-end gap-2">
                  {[40,70,55].map((h,i)=>(
                    <div key={i} className={`flex-1 rounded-t ${['bg-red-400','bg-pink-500','bg-purple-500'][i]}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              )}
              {c.chips && (
                <div className="flex gap-2 mt-2">
                  {c.chips.map(ch => <span key={ch} className="px-2 py-1 bg-white/10 rounded-full text-xs text-neutral-200">{ch}</span>)}
                </div>
              )}
              {c.quote && (
                <div className="mt-3 p-3 bg-white/10 rounded-lg border border-white/20 text-sm text-neutral-200">{c.quote}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


