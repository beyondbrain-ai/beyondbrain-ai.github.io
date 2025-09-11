'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TorchSVG from '@/components/icons/TorchSVG';
import BrainSVG from '@/components/icons/BrainSVG';

export default function MinimalHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInBrainArea, setIsInBrainArea] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-x-hidden overflow-y-visible">
      {/* Custom Torch Cursor */}
      {isInBrainArea && (
        <motion.div 
          className="fixed pointer-events-none z-50"
          style={{ 
            left: mousePosition.x - 40, 
            top: mousePosition.y - 56,
          }}
        >
          <TorchSVG isActive={true} />
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20" style={{ overflow: "visible" }}>
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-12"
            style={{ overflow: "visible", minWidth: 0 }}
          >
            {/* Main Mission Statement */}
            <div className="space-y-8 overflow-visible">
              <div className="relative overflow-visible min-w-0 flex-1">
                <motion.h1 
                  className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.div 
                    className="block font-extrabold relative overflow-visible"
                    whileHover={{ 
                      background: "linear-gradient(90deg, #00d4ff, #4ecdc4, #ff6b6b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 30px rgba(0, 212, 255, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      minWidth: "fit-content",
                      paddingRight: "2rem"
                    }}
                  >
                    EVERY CHILD
                  </motion.div>
                  <motion.div 
                    className="block font-extrabold relative overflow-visible"
                    whileHover={{ 
                      background: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #00d4ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 30px rgba(255, 107, 107, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      minWidth: "fit-content",
                      paddingRight: "2rem"
                    }}
                  >
                    DESERVES
                  </motion.div>
                  <motion.div 
                    className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-black relative overflow-visible"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    whileHover={{ 
                      background: "linear-gradient(90deg, #fbbf24, #f59e0b, #dc2626)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 40px rgba(251, 191, 36, 0.8)",
                      filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))"
                    }}
                    style={{ 
                      minWidth: "fit-content",
                      paddingRight: "2rem"
                    }}
                  >
                    A BRAIN
                  </motion.div>
                  <motion.div 
                    className="block text-3xl sm:text-4xl lg:text-5xl font-medium mt-6 relative overflow-visible"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    whileHover={{ 
                      background: "linear-gradient(90deg, #4ecdc4, #00d4ff, #ff6b6b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 25px rgba(78, 205, 196, 0.5)"
                    }}
                    style={{ 
                      minWidth: "fit-content",
                      paddingRight: "2rem"
                    }}
                  >
                    and we are building it
                  </motion.div>
                </motion.h1>
              </div>

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

          {/* Right Side - Interactive Brain */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            onMouseEnter={() => setIsInBrainArea(true)}
            onMouseLeave={() => setIsInBrainArea(false)}
          >
            {/* Brain Container */}
            <div className="relative w-[500px] h-[500px] cursor-none">
              
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: isInBrainArea 
                    ? "radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(249,115,22,0.2) 40%, transparent 70%)"
                    : "radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(78,205,196,0.1) 40%, transparent 70%)",
                  filter: "blur(40px)"
                }}
                animate={{
                  scale: isInBrainArea ? [1, 1.3, 1] : [1, 1.1, 1],
                  opacity: isInBrainArea ? [0.3, 0.6, 0.3] : [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* High-Quality Brain SVG */}
              <BrainSVG 
                isLit={isInBrainArea} 
                className="w-full h-full relative z-10" 
              />

              {/* Dynamic Light Following Torch */}
              {isInBrainArea && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    left: mousePosition.x - window.innerWidth/2 - 50,
                    top: mousePosition.y - window.innerHeight/2 - 50,
                    width: 100,
                    height: 100,
                    background: "radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(249,115,22,0.3) 40%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(15px)"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}