'use client';

import { motion } from 'framer-motion';
import { Gamepad2, BarChart3, Brain, ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    id: 'students',
    title: 'For Students',
    subtitle: 'Learn Through Play, Win Through Practice',
    description: 'Gamified learning that makes education addictive. Compete with peers, unlock achievements, and level up your knowledge while having fun.',
    icon: Gamepad2,
    color: 'from-secondary to-accent',
    features: [
      { icon: Star, text: 'Interactive AI Tutor that adapts to your learning style' },
      { icon: TrendingUp, text: 'Real-time competitions and challenges' },
      { icon: Users, text: 'Social learning with friends and peers' }
    ],
    preview: {
      type: 'gamified',
      elements: [
        { label: 'Current Level', value: '12', icon: '🎮' },
        { label: 'XP Points', value: '2,847', icon: '⭐' },
        { label: 'Streak', value: '15 days', icon: '🔥' },
        { label: 'Rank', value: '#3', icon: '🏆' }
      ]
    }
  },
  {
    id: 'parents',
    title: 'For Parents',
    subtitle: 'Track Progress, Ensure Success',
    description: 'Comprehensive analytics dashboard that gives you complete visibility into your child\'s learning journey, strengths, and areas for improvement.',
    icon: BarChart3,
    color: 'from-primary to-secondary',
    features: [
      { icon: BarChart3, text: 'Detailed progress analytics and reports' },
      { icon: Brain, text: 'Personalized learning recommendations' },
      { icon: Star, text: 'Safety-first platform with parental controls' }
    ],
    preview: {
      type: 'dashboard',
      elements: [
        { label: 'Overall Score', value: '87%', icon: '📊', trend: '+12%' },
        { label: 'Study Time', value: '2.5h', icon: '⏰', trend: '+25%' },
        { label: 'Accuracy', value: '94%', icon: '🎯', trend: '+8%' },
        { label: 'Rank', value: '#5', icon: '🏅', trend: '↗️' }
      ]
    }
  },
  {
    id: 'educators',
    title: 'For Educators',
    subtitle: 'AI-Powered Insights, Human-Centered Results',
    description: 'Scalable education technology that enhances teaching effectiveness with data-driven insights and personalized curriculum delivery.',
    icon: Brain,
    color: 'from-accent to-primary',
    features: [
      { icon: Brain, text: 'Advanced AI algorithms for personalized learning paths' },
      { icon: BarChart3, text: 'Class-wide analytics and performance insights' },
      { icon: TrendingUp, text: 'Improved learning outcomes and engagement rates' }
    ],
    preview: {
      type: 'insights',
      elements: [
        { label: 'Class Average', value: '91%', icon: '👥' },
        { label: 'Engagement', value: '96%', icon: '💡' },
        { label: 'Completion', value: '88%', icon: '✅' },
        { label: 'Satisfaction', value: '4.9/5', icon: '⭐' }
      ]
    }
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            One Platform,{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Three Perspectives
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Every child deserves a brain, and we&apos;re building it through personalized AI that adapts to every learning need.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className={cn(
                "grid lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "lg:grid-flow-col-dense"
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              {/* Content */}
              <div className={cn(
                "space-y-6",
                index % 2 === 1 && "lg:col-start-2"
              )}>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      className={cn(
                        "p-3 rounded-xl bg-gradient-to-r",
                        pillar.color
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pillar.icon size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-primary font-semibold">{pillar.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + featureIndex * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 glass rounded-full flex items-center justify-center">
                        <feature.icon size={14} className="text-primary" />
                      </div>
                      <span className="text-neutral-200 font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className={cn(
                    "group flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r transition-all duration-300",
                    pillar.color
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore for {pillar.title.split(' ')[1]}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Preview Mockup */}
              <motion.div
                className={cn(
                  "relative",
                  index % 2 === 1 && "lg:col-start-1"
                )}
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative glass-strong rounded-2xl p-6 border border-glass-border transform-3d">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center",
                        pillar.color
                      )}>
                        <pillar.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {pillar.title} Dashboard
                        </h4>
                        <p className="text-sm text-neutral-300">Live Preview</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 glass px-2 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
                      <span className="text-green text-xs font-medium">Live</span>
                    </div>
                  </div>

                  {/* Preview Content */}
                  <div className="grid grid-cols-2 gap-4">
                    {pillar.preview.elements.map((element, elementIndex) => (
                      <motion.div
                        key={element.label}
                        className="glass p-4 rounded-lg transform-3d"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + elementIndex * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-neutral-400 font-medium">
                            {element.label}
                          </span>
                          <span className="text-lg">{element.icon}</span>
                        </div>
                        <div className="flex items-end justify-between">
                          <span className="font-bold text-lg text-white">
                            {element.value}
                          </span>
                          {'trend' in element && (
                            <span className="text-xs text-green font-medium">
                              {element.trend}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Element */}
                  <motion.div
                    className={cn(
                      "mt-4 p-3 rounded-lg bg-gradient-to-r text-white text-center",
                      pillar.color
                    )}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(67, 56, 202, 0.4)",
                        "0 0 0 10px rgba(67, 56, 202, 0)",
                        "0 0 0 0 rgba(67, 56, 202, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm font-medium">
                      {pillar.id === 'students' && "🎮 New Challenge Available!"}
                      {pillar.id === 'parents' && "📊 Weekly Report Ready"}
                      {pillar.id === 'educators' && "💡 New Insights Generated"}
                    </span>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                {pillar.id === 'students' && (
                  <motion.div
                    className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-full shadow-lg"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🏆
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}