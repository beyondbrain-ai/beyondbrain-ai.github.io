'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Zunno.ai</span>
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6">
            Zunno.ai is revolutionizing K-12 education by harnessing the power of AI to create personalized, engaging, and effective learning experiences for students of all ages and abilities.
          </p>
          <ul className="space-y-3 text-neutral-300">
            {['Democratize access to quality education','Empower teachers with AI tools','Foster curiosity and lifelong learning'].map(m => (
              <li key={m} className="flex items-start space-x-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#cta" className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold">Join Our Mission</a>
          </div>
        </div>
        <div className="lg:col-span-6">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1519458246479-6acae7536988?q=80&w=1600&auto=format&fit=crop" alt="Classroom" className="w-full h-[360px] object-cover" />
            <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-3 text-neutral-800 font-semibold">35% Better Scores</div>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 text-neutral-800 font-semibold">92% Engagement</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


