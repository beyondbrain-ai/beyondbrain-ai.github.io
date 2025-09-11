'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TorchSVG from '@/components/icons/TorchSVG';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)`
            }}
          />

          {/* Main Content */}
          <div className="relative flex flex-col items-center space-y-8">
            {/* Torch Container */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "backOut",
                delay: 0.2 
              }}
            >
              {/* Pulsing Glow Behind Torch */}
              <motion.div
                className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                style={{
                  background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
                  filter: "blur(20px)"
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Torch SVG */}
              <TorchSVG 
                isActive={true} 
                width={120} 
                height={168}
              />

              {/* Extra Flame Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`flame-particle-${i}`}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: 45 + Math.random() * 30,
                    top: 10 + Math.random() * 20
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: [0, (Math.random() - 0.5) * 40],
                    y: [0, -Math.random() * 40]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Brand Text */}
            <motion.div
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 
              }}
            >
              <motion.h1 
                className="font-display text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                zunno
              </motion.h1>
              
              <motion.p 
                className="text-neutral-400 text-lg font-medium"
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Lighting up minds
              </motion.p>
            </motion.div>

            {/* Loading Progress */}
            <motion.div
              className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.2 
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Floating Sparks */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`spark-${i}`}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${20 + Math.random() * 60}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}