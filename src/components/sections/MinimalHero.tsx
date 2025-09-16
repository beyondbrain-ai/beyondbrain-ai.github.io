'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TorchSVG from '@/components/icons/TorchSVG';
import KnowledgeTreeSVG from '@/components/icons/KnowledgeTreeSVG';

export default function MinimalHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInTreeArea, setIsInTreeArea] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-x-hidden overflow-y-visible">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20" style={{ overflow: "visible" }}>
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-12 lg:col-span-8"
            style={{ overflow: "visible", minWidth: 0 }}
          >
            {/* Main Mission Statement */}
            <div className="space-y-8 overflow-visible">
              <motion.h1 
                className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.span 
                  className="block hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default font-extrabold"
                  whileHover={{ scale: 1.02, letterSpacing: "0.1em" }}
                >
                  EVERY CHILD
                </motion.span>
                <motion.span 
                  className="block hover:bg-gradient-to-r hover:from-secondary hover:via-accent hover:to-primary hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default font-extrabold"
                  whileHover={{ scale: 1.02, letterSpacing: "0.1em" }}
                >
                  DESERVES
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-black hover:from-yellow-400 hover:via-orange-500 hover:to-pink-500 transition-all duration-500 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  whileHover={{ scale: 1.05, letterSpacing: "0.15em" }}
                >
                  A BRAIN
                </motion.span>
                <motion.span 
                  className="block text-3xl sm:text-4xl lg:text-5xl font-medium mt-6 hover:bg-gradient-to-r hover:from-accent hover:via-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.6 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  and we are building it
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-xl sm:text-2xl text-neutral-400 font-light max-w-lg hover:text-neutral-200 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                AI-powered personalized learning that adapts to every child&apos;s unique potential
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              <motion.button
                className="group relative px-8 py-4 text-lg font-medium text-white glass-strong rounded-full border border-glass-border overflow-hidden transform-3d"
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  rotateX: 10
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <span className="relative flex items-center space-x-2">
                  <span>Begin the Journey</span>
                  <ArrowRight 
                    size={18} 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center space-x-8 text-sm text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <div className="flex items-center space-x-2 hover:text-green hover:scale-105 transition-all duration-300 cursor-default">
                <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
                <span>50,000+ students</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>15 states</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-accent hover:scale-105 transition-all duration-300 cursor-default">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>94% success</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Knowledge Tree */}
          <motion.div
            className="relative lg:col-span-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onMouseEnter={() => setIsInTreeArea(true)}
            onMouseLeave={() => setIsInTreeArea(false)}
          >
            {/* Tree Container - Elegant and growing */}
            <motion.div 
              className="relative w-[350px] h-[350px] cursor-none"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-25"
                style={{
                  background: isInTreeArea 
                    ? "radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(50,205,50,0.2) 40%, transparent 70%)"
                    : "radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(50,205,50,0.15) 40%, transparent 70%)",
                  filter: "blur(25px)"
                }}
                animate={{
                  scale: isInTreeArea ? [1, 1.3, 1] : [1, 1.1, 1],
                  opacity: isInTreeArea ? [0.3, 0.6, 0.3] : [0.15, 0.25, 0.15]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Knowledge Tree SVG */}
              <KnowledgeTreeSVG 
                isLit={isInTreeArea} 
                className="w-full h-full relative z-10" 
                width={350}
                height={350}
                size="large"
              />

              {/* Floating Knowledge Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`knowledge-particle-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: ['#00d4ff', '#4ecdc4', '#fbbf24', '#a855f7', '#ff6b6b', '#10b981'][i],
                    left: `${30 + Math.random() * 40}%`,
                    top: `${20 + Math.random() * 60}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.8
                  }}
                />
              ))}

              {/* Dynamic Light Following Torch */}
              {isInTreeArea && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    left: mousePosition.x - window.innerWidth/2 - 25,
                    top: mousePosition.y - window.innerHeight/2 - 25,
                    width: 50,
                    height: 50,
                    background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(50,205,50,0.3) 40%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(8px)"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}