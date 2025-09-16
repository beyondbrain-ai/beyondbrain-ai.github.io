'use client';

import { motion } from 'framer-motion';

export default function StudentsSection() {
  const cards = [
    { title: 'Personalized Learning Paths', text: 'AI analyzes your style, strengths, and growth areas to create a unique journey.', meter: '75% improvement in learning outcomes' },
    { title: 'Gamified Learning Experience', text: 'Turn studying into a game with badges, leaderboards, and challenges.', badges: ['A+','B+','S','Earn badges as you learn'] },
    { title: 'AI Study Buddy', text: '24/7 help that explains concepts and prepares you for tests.', quote: '"Let me break it down step by step..."' },
    { title: 'Interactive Study Materials', text: 'Videos, simulations, and interactive exercises that bring learning to life.', chips: ['Video','3D','Quiz'] },
    { title: 'Smart Study Schedule', text: 'Optimal plan based on habits, peak times, and upcoming tests.', calendar: true },
  ];

  return (
    <section id="students" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="font-display text-4xl sm:text-5xl font-bold"><span className="text-white">For </span><span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Students</span></h3>
          <p className="text-neutral-400 mt-3">Transform learning into an exciting journey tailored to your needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div key={c.title} className="glass-strong rounded-2xl p-6 border border-glass-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-sm text-neutral-500 mb-2">{c.meter && '1'}</div>
              <h4 className="font-semibold text-white mb-2">{c.title}</h4>
              <p className="text-neutral-300 text-sm mb-4">{c.text}</p>
              {c.meter && (
                <>
                  <div className="w-full bg-neutral-800 h-2 rounded-full mb-2"><div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: '75%' }} /></div>
                  <div className="text-xs text-neutral-400">{c.meter}</div>
                </>
              )}
              {c.badges && (
                <div className="flex gap-2 flex-wrap">
                  {c.badges.map((b, i) => (
                    <span key={b} className={`px-3 py-1 rounded-full text-xs text-white ${['bg-primary','bg-purple-500','bg-pink-500','bg-neutral-200 text-neutral-900'][i % 4]}`}>{b}</span>
                  ))}
                </div>
              )}
              {c.quote && (
                <div className="mt-3 p-3 bg-white/10 rounded-lg border border-white/20 text-sm text-neutral-200">{c.quote}</div>
              )}
              {c.chips && (
                <div className="grid grid-cols-3 gap-2">
                  {c.chips.map(ch => <div key={ch} className="h-16 rounded-lg bg-neutral-800/60 flex items-center justify-center text-xs text-neutral-300">{ch}</div>)}
                </div>
              )}
              {c.calendar && (
                <div className="grid grid-cols-7 gap-1 mt-2 text-xs text-neutral-400">
                  {['M','T','W','T','F','S','S'].map((d,i)=> (
                    <div key={d} className={`h-10 rounded ${[2,3,4].includes(i)?'bg-orange-500/60':'bg-neutral-800'}`} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


