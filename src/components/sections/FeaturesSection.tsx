'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Trophy, 
  Heart, 
  Zap, 
  Target, 
  Star, 
  BookOpen, 
  Languages, 
  Palette, 
  BarChart3, 
  Users, 
  PieChart, 
  Home, 
  TrendingUp, 
  // Shield, 
  Lightbulb,
  Sparkles,
  Award,
  MessageCircle,
  Eye,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const categories = [
  {
    id: 'students',
    title: 'STUDENTS',
    subtitle: 'Supercharge Your Learning',
    icon: Brain,
    color: 'primary',
    gradient: 'from-primary via-accent to-secondary',
    description: 'AI-powered personalized learning that adapts to your unique style',
    features: [
      {
        category: 'Hyper-Personalization',
        items: [
          {
            name: 'Hyper-Personalized Learning Paths',
            description: 'AI creates unique learning journeys tailored to your strengths and interests',
            icon: Target,
            highlight: true
          },
          {
            name: 'Personalized Feedback',
            description: 'Celebrates your individual progress with encouraging messages',
            icon: Heart,
            example: '"You\'re amazing at counting today, Ria!"'
          },
          {
            name: 'Microlearning Modules',
            description: 'Bite-sized lessons that fit perfectly into your schedule',
            icon: Zap
          },
          {
            name: 'Smart Flashcards',
            description: 'AI-powered revision cards that adapt to your memory patterns',
            icon: BookOpen
          },
          {
            name: 'Real-Time Quiz Feedback',
            description: 'Instant insights to help you learn from every question',
            icon: Lightbulb
          }
        ]
      },
      {
        category: 'Competitions & Assessment',
        items: [
          {
            name: 'Daily/Weekly/Monthly Quizzes',
            description: 'Regular challenges to keep your skills sharp and growing',
            icon: Trophy
          },
          {
            name: 'Dynamic Leaderboard',
            description: 'Compete with friends and celebrate your achievements',
            icon: TrendingUp,
            highlight: true
          },
          {
            name: 'Badges & Rewards',
            description: 'Unlock achievements as you master new skills',
            icon: Award
          },
          {
            name: 'Learning Streaks',
            description: 'Build momentum with daily learning habits',
            icon: Sparkles
          }
        ]
      },
      {
        category: 'AI-Buddy',
        items: [
          {
            name: 'Your Personal AI Buddy',
            description: 'A friendly AI companion that guides your learning journey',
            icon: MessageCircle,
            highlight: true
          },
          {
            name: 'Daily Motivation Boosters',
            description: 'Personalized encouragement to keep you inspired',
            icon: Star
          },
          {
            name: 'Skill Progress Tracker',
            description: 'Visual progress maps showing your learning growth',
            icon: BarChart3
          }
        ]
      },
      {
        category: 'Advanced Tools',
        items: [
          {
            name: 'Smart Note Taking',
            description: 'AI-enhanced notes that organize and connect your learning',
            icon: BookOpen
          },
          {
            name: 'Language Translation',
            description: 'Seamless translation for better topic understanding',
            icon: Languages
          },
          {
            name: 'Multi-Sensory Learning',
            description: 'Engaging visuals, animations, sounds, and rewards',
            icon: Palette,
            highlight: true
          },
          {
            name: 'Dynamic Content Generation',
            description: 'AI creates custom text and video content for any topic',
            icon: Sparkles
          }
        ]
      }
    ]
  },
  {
    id: 'teachers',
    title: 'TEACHERS',
    subtitle: 'Empower Your Classroom',
    icon: Users,
    color: 'accent',
    gradient: 'from-accent via-primary to-purple',
    description: 'Professional tools that amplify your teaching impact',
    features: [
      {
        category: 'Classroom Management',
        items: [
          {
            name: 'Dynamic Quiz Creation Tools',
            description: 'Create engaging assessments in minutes with AI assistance',
            icon: Trophy,
            highlight: true
          },
          {
            name: 'Student Insights Dashboard',
            description: 'Deep analytics into each student\'s learning patterns',
            icon: Eye
          },
          {
            name: 'Classroom Performance Analytics',
            description: 'Real-time data to optimize your teaching strategies',
            icon: PieChart,
            highlight: true
          }
        ]
      }
    ]
  },
  {
    id: 'parents',
    title: 'PARENTS',
    subtitle: 'Support Your Child\'s Growth',
    icon: Home,
    color: 'secondary',
    gradient: 'from-secondary via-purple to-green',
    description: 'Stay connected to your child\'s educational journey',
    features: [
      {
        category: 'Family Dashboard',
        items: [
          {
            name: 'Parent View Dashboard',
            description: 'Complete overview of your child\'s learning progress',
            icon: BarChart3,
            highlight: true
          },
          {
            name: 'Weekly Performance Digest',
            description: 'Detailed reports delivered straight to your inbox',
            icon: TrendingUp
          },
          {
            name: 'Skill Gap Insights',
            description: 'Identify areas where your child needs extra support',
            icon: Target
          },
          {
            name: 'Home Learning Suggestions',
            description: 'Personalized activities to reinforce learning at home',
            icon: Lightbulb,
            highlight: true
          }
        ]
      }
    ]
  }
];

export default function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState('students');

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-neutral-900/50 to-background" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Features That
            </span>
            <br />
            <span className="text-white">Change Everything</span>
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how AI-powered personalization transforms learning for students, empowers teachers, and connects parents
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl border transition-all duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-r ' + category.gradient + ' border-transparent text-white shadow-2xl' 
                    : 'glass border-glass-border text-neutral-300 hover:text-white hover:border-white/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <Icon size={24} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <div className="text-left">
                    <div className="font-bold text-lg">{category.title}</div>
                    <div className={`text-sm ${isActive ? 'text-white/80' : 'text-neutral-500'}`}>
                      {category.subtitle}
                    </div>
                  </div>
                </div>
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Features Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {categories.find(cat => cat.id === activeCategory)?.features.map((featureGroup, groupIndex) => (
            <motion.div
              key={featureGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              {/* Feature Group Header */}
              <motion.h3 
                className="text-3xl font-bold text-white mb-8 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <span className={`bg-gradient-to-r ${categories.find(cat => cat.id === activeCategory)?.gradient} bg-clip-text text-transparent`}>
                  {featureGroup.category}
                </span>
              </motion.h3>

              {/* Feature Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featureGroup.items.map((feature, featureIndex) => {
                  const FeatureIcon = feature.icon;
                  
                  return (
                    <motion.div
                      key={feature.name}
                      className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                        feature.highlight 
                          ? 'glass-strong border-primary/30 hover:border-primary/60' 
                          : 'glass border-glass-border hover:border-white/30'
                      }`}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -5,
                        rotateX: 5,
                        rotateY: 2
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: groupIndex * 0.1 + featureIndex * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Highlight Glow */}
                      {feature.highlight && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${categories.find(cat => cat.id === activeCategory)?.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                          initial={false}
                        />
                      )}

                      {/* Feature Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                            feature.highlight 
                              ? `bg-gradient-to-r ${categories.find(cat => cat.id === activeCategory)?.gradient}` 
                              : 'bg-white/10'
                          }`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <FeatureIcon size={24} className="text-white" />
                        </motion.div>

                        {/* Feature Name */}
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary group-hover:to-accent transition-all duration-300">
                          {feature.name}
                        </h4>

                        {/* Description */}
                        <p className="text-neutral-400 text-sm leading-relaxed mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                          {feature.description}
                        </p>

                        {/* Example */}
                        {feature.example && (
                          <div className="mt-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                            <p className="text-primary text-xs italic">
                              {feature.example}
                            </p>
                          </div>
                        )}

                        {/* Learn More Arrow */}
                        <motion.div
                          className="flex items-center mt-4 text-xs text-neutral-500 group-hover:text-primary transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <span>Learn more</span>
                          <ChevronRight size={16} className="ml-1" />
                        </motion.div>
                      </div>

                      {/* Floating Particles */}
                      {feature.highlight && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-primary rounded-full"
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`
                              }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                y: [0, -20]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-12 py-6 text-xl font-bold text-white glass-strong rounded-full border border-glass-border overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              rotateX: 10
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            <span className="relative flex items-center space-x-3">
              <span>Experience All Features</span>
              <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}