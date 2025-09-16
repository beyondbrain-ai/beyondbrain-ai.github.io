'use client';

import { motion } from 'framer-motion';

export default function ParentsSection() {
  const cards = [
    { title: 'Real-Time Progress Tracking', text: "Monitor your child's journey with detailed insights into strengths and challenges.", meters: [
      { label: 'Mathematics', value: 87 },
      { label: 'Science', value: 92 },
      { label: 'Language Arts', value: 78 },
      { label: 'Social Studies', value: 85 },
    ]},
    { title: 'Smart Notifications', text: 'Timely updates on assignments, tests, achievements, and areas needing support.', list: ['Math quiz scheduled for Friday','Science project completed with 95% score'] },
    { title: 'Direct Teacher Communication', text: 'Message teachers, schedule conferences, and stay informed about expectations.', chat: true },
  ];

  return (
    <section id="parents" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="font-display text-4xl sm:text-5xl font-bold"><span className="text-white">For </span><span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Parents</span></h3>
          <p className="text-neutral-400 mt-3">Stay connected with meaningful insights and support.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div key={c.title} className="glass-strong rounded-2xl p-6 border border-glass-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 className="font-semibold text-white mb-2">{c.title}</h4>
              <p className="text-neutral-300 text-sm mb-4">{c.text}</p>
              {c.meters && (
                <div className="space-y-3">
                  {c.meters.map(m => (
                    <div key={m.label}>
                      <div className="flex justify-between text-xs text-neutral-400 mb-1"><span>{m.label}</span><span>{m.value}%</span></div>
                      <div className="w-full h-2 rounded-full bg-neutral-800"><div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${m.value}%` }} /></div>
                    </div>
                  ))}
                </div>
              )}
              {c.list && (
                <ul className="space-y-2 text-sm text-neutral-300">
                  {c.list.map(item => (
                    <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />{item}</li>
                  ))}
                </ul>
              )}
              {c.chat && (
                <div className="mt-2 space-y-2">
                  <div className="glass rounded-lg p-3 text-neutral-200 text-sm">Alex did great on today's lab experiment. He showed excellent analytical skills!</div>
                  <input className="w-full glass rounded-lg px-3 py-2 border border-white/20 text-sm placeholder-neutral-500" placeholder="Type your message..." />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


