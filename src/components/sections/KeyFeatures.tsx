'use client';

import { motion } from 'framer-motion';
import { Brain, Gamepad2, BarChart3 } from 'lucide-react';
import React from 'react';

type IconType = React.ComponentType<{ size?: number; className?: string }>;

type Meter = { label: string; value: number };

type FeatureCard = {
  icon: IconType;
  title: string;
  text: string;
  bullets?: string[];
  badges?: string[];
  meters?: Meter[];
};

export default function KeyFeatures() {
  const cards: FeatureCard[] = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      text: 'Advanced AI analyzes learning patterns to create personalized experiences for every student.',
      bullets: ['Adaptive learning paths', 'Learning style recognition', 'Intelligent recommendations']
    },
    {
      icon: Gamepad2,
      title: 'Gamified Learning Experience',
      text: 'Transform education into an exciting journey with points, badges, leaderboards, and challenges.',
      badges: ['Math', 'Quiz', 'Pro', 'Star']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      text: 'Gain valuable insights into progress with comprehensive analytics for students, teachers, and parents.',
      meters: [
        { label: 'Comprehension', value: 85 },
        { label: 'Engagement', value: 92 },
        { label: 'Retention', value: 78 }
      ]
    }
  ];

  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Key</span>{' '}
            <span className="text-white">Features</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Discover how Zunno.ai is revolutionizing K-12 education with these powerful capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="glass-strong rounded-2xl p-6 border border-glass-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-white">{card.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 mb-4">{card.text}</p>

                {card.bullets && (
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.badges && (
                  <div className="flex space-x-2">
                    {card.badges.map((b, i) => (
                      <span key={b} className={`px-3 py-1 rounded-full text-xs text-white ${['bg-primary','bg-accent','bg-purple-500','bg-orange-500'][i % 4]}`}>{b}</span>
                    ))}
                  </div>
                )}

                {card.meters && (
                  <div className="space-y-3">
                    {card.meters.map((m) => (
                      <div key={m.label}>
                        <div className="flex justify-between text-xs text-neutral-400 mb-1">
                          <span>{m.label}</span>
                          <span>{m.value}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-neutral-800">
                          <div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${m.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


