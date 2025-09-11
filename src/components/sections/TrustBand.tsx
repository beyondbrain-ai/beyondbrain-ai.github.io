'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';
import { formatNumber } from '@/lib/utils';

const achievements = [
  "Arjun improved Math scores by 40% in 3 months",
  "Priya won National Science Olympiad after 6 months on Zunno",
  "Rahul's confidence in English doubled - parent testimonial",
  "Sneha mastered algebra concepts 3x faster than traditional methods",
  "Karan qualified for Regional Mathematics Competition",
  "Aditi's reading comprehension improved from 60% to 95%",
  "Vikram solved 500+ challenging problems in 2 months",
  "Meera's parents report 80% improvement in study habits"
];

const partners = [
  { name: "CBSE", logo: "🎓" },
  { name: "Delhi Public School", logo: "🏫" },
  { name: "Kendriya Vidyalaya", logo: "📚" },
  { name: "Ryan International", logo: "🌟" },
  { name: "DAV Schools", logo: "✨" },
  { name: "Amity Schools", logo: "🎯" }
];

const liveStats = [
  {
    icon: Users,
    label: "Students Learning Right Now",
    value: 1247,
    increment: true
  },
  {
    icon: Trophy,
    label: "Competitions Won This Month",
    value: 156,
    increment: true
  },
  {
    icon: Calendar,
    label: "Active Learning Sessions Today",
    value: 2847,
    increment: true
  }
];

export default function TrustBand() {
  return (
    <section className="glass py-12 border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Achievements Ticker */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex space-x-8 whitespace-nowrap"
            animate={{ x: [-100, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...achievements, ...achievements].map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 glass px-6 py-3 rounded-full border border-glass-border transform-3d"
                whileHover={{ scale: 1.05, y: -2, rotateX: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-neutral-200">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partner Logos */}
        <div className="mb-8">
          <p className="text-center text-sm text-neutral-400 mb-4">
            Trusted by leading educational institutions across India
          </p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center space-x-2 px-4 py-2 glass rounded-lg border border-glass-border transform-3d"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2, rotateX: 5 }}
              >
                <span className="text-2xl">{partner.logo}</span>
                <span className="text-sm font-medium text-neutral-200">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Live Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon size={24} className="text-primary" />
              </motion.div>
              
              <motion.div
                className="font-display font-bold text-3xl text-neutral-900 mb-2"
                key={stat.value} // This ensures re-render when value changes
                initial={{ scale: 1.2, color: '#10b981' }}
                animate={{ scale: 1, color: '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                <Counter target={stat.value} />
              </motion.div>
              
              <p className="text-sm text-neutral-400 font-medium">
                {stat.label}
              </p>
              
              {stat.increment && (
                <motion.div
                  className="flex items-center justify-center space-x-1 mt-2 text-green"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs">↗</span>
                  <span className="text-xs font-medium">Live</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter component for animated numbers
function Counter({ target }: { target: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {formatNumber(target)}
    </motion.span>
  );
}