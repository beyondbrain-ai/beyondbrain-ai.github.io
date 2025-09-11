'use client';

import { motion } from 'framer-motion';

export default function WhySection() {
  const stats = [
    {
      number: "300M+",
      label: "children lack quality education globally",
      color: "from-secondary to-accent"
    },
    {
      number: "40%",
      label: "improvement in learning outcomes with AI",
      color: "from-primary to-secondary"
    },
    {
      number: "1:1",
      label: "personalized attention every child deserves",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-8">
            The problem is 
            <span className="block font-medium bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              massive
            </span>
          </h2>
          
          <p className="text-xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            Traditional education fails millions of children every day. 
            One-size-fits-all approaches ignore individual learning patterns, 
            leaving brilliant minds underdeveloped.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="transform-3d"
            >
              <div className="glass-strong p-8 rounded-2xl border border-glass-border">
                <motion.div
                  className={`text-5xl sm:text-6xl font-light mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-neutral-300 font-light leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glass-strong p-12 rounded-3xl border border-glass-border max-w-4xl mx-auto"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-light text-white mb-6">
            We&apos;re building the 
            <span className="font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}brain every child deserves
            </span>
          </h3>
          
          <p className="text-xl text-neutral-300 font-light leading-relaxed">
            An AI that understands each child&apos;s unique learning pattern, adapts in real-time, 
            and unlocks their full potential. Because every brilliant mind deserves to shine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}