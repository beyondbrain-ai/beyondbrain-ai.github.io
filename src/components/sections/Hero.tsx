'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp, Brain, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Students Learning', value: '50,000+', icon: Brain },
  { label: 'Success Rate', value: '94%', icon: Target },
  { label: 'Average Improvement', value: '40%', icon: TrendingUp },
];

const floatingElements = [
  { icon: '🏆', delay: 0, duration: 3 },
  { icon: '🎯', delay: 0.5, duration: 4 },
  { icon: '🚀', delay: 1, duration: 3.5 },
  { icon: '💡', delay: 1.5, duration: 4.5 },
  { icon: '⭐', delay: 2, duration: 3.2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden perspective">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,205,196,0.1)_0%,transparent_60%)]" />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 glass text-primary px-4 py-2 rounded-full text-sm font-medium glow-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateX: 10 }}
            >
              <Star size={16} className="text-secondary" />
              <span>The Tesla of EdTech</span>
            </motion.div>

            {/* Headlines */}
            <div className="space-y-4">
              <motion.h1
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Where AI Meets{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Academic Excellence
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transform your child into a confident competitor with AI-powered personalized learning that adapts to their unique potential.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center transform-3d"
                  whileHover={{ scale: 1.05, y: -5, rotateY: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 glass rounded-lg mb-2 mx-auto glow-primary">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div className="font-display font-bold text-2xl text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold text-lg glow-primary transition-all duration-300 flex items-center justify-center space-x-2 transform-3d"
                whileHover={{ scale: 1.02, y: -2, rotateX: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="group glass-strong text-white px-8 py-4 rounded-xl font-semibold text-lg hover:glow-accent transition-all duration-300 flex items-center justify-center space-x-2 transform-3d"
                whileHover={{ scale: 1.02, y: -2, rotateX: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={20} className="group-hover:text-secondary transition-colors" />
                <span>See Success Stories</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              className="flex items-center space-x-4 text-sm text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold glow-primary transform-3d"
                    whileHover={{ scale: 1.2, rotateY: 180, z: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <span>Trusted by 50,000+ students across 15 states</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <motion.div
                className="glass-strong rounded-2xl p-6 border border-glass-border glow-accent transform-3d"
                whileHover={{ y: -5, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center glow-secondary">
                      <Brain size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">AI Learning Companion</h3>
                      <p className="text-sm text-neutral-300">Arjun&apos;s Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 glass px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
                    <span className="text-green text-xs font-medium">Learning</span>
                  </div>
                </div>

                {/* Progress Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { subject: 'Mathematics', progress: 85, color: 'bg-primary' },
                    { subject: 'Science', progress: 92, color: 'bg-secondary' },
                    { subject: 'English', progress: 78, color: 'bg-accent' },
                    { subject: 'Hindi', progress: 89, color: 'bg-green-500' },
                  ].map((item) => (
                    <motion.div
                      key={item.subject}
                      className="p-4 glass rounded-lg transform-3d"
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-200">{item.subject}</span>
                        <span className="text-xs text-neutral-400">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-2">
                        <motion.div
                          className={cn("h-2 rounded-full", item.color)}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievement Badge */}
                <motion.div
                  className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 rounded-lg border border-secondary/20"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">New Achievement!</h4>
                      <p className="text-sm text-neutral-600">Math Olympiad Qualifier - Level 2</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Chat Bubble */}
              <motion.div
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-lg max-w-48"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm font-medium mb-2">AI Tutor says:</p>
                <p className="text-xs">
                  &ldquo;Great job on algebra! Ready to tackle quadratic equations? I&apos;ve prepared a fun challenge for you! 🚀&rdquo;
                </p>
                <div className="flex items-center space-x-1 mt-2">
                  <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>

              {/* Competition Leaderboard Preview */}
              <motion.div
                className="absolute -left-8 bottom-4 bg-white p-4 rounded-lg shadow-lg border border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-sm font-semibold text-neutral-900 mb-2">Live Rankings</h4>
                <div className="space-y-1">
                  {[
                    { name: 'Arjun K.', score: '2,847', rank: 1 },
                    { name: 'Priya S.', score: '2,832', rank: 2 },
                    { name: 'Rohit M.', score: '2,821', rank: 3 },
                  ].map((student) => (
                    <div key={student.name} className="flex items-center space-x-2 text-xs">
                      <span className={cn(
                        "w-4 h-4 rounded-full flex items-center justify-center text-white font-bold",
                        student.rank === 1 ? "bg-yellow-500" : student.rank === 2 ? "bg-gray-400" : "bg-orange-600"
                      )}>
                        {student.rank}
                      </span>
                      <span className="text-neutral-700">{student.name}</span>
                      <span className="text-primary font-medium">{student.score}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}