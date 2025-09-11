'use client';

import { motion } from 'framer-motion';

interface TorchSVGProps {
  className?: string;
  width?: number;
  height?: number;
  isActive?: boolean;
}

export default function TorchSVG({ className = "", width = 80, height = 112, isActive = true }: TorchSVGProps) {
  return (
    <motion.svg
      viewBox="0 0 80 112"
      className={className}
      width={width}
      height={height}
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: -10 }}
      transition={{ duration: 0.3, ease: "backOut" }}
    >
      <defs>
        {/* Handle Gradients */}
        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="25%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="75%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>

        <linearGradient id="handleHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Flame Gradients */}
        <radialGradient id="outerFlame" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="30%" stopColor="#ea580c" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </radialGradient>

        <radialGradient id="middleFlame" cx="50%" cy="65%" r="45%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fef3c7" />
        </radialGradient>

        <radialGradient id="innerFlame" cx="50%" cy="60%" r="30%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#ffffff" />
        </radialGradient>

        <radialGradient id="flameGlow" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
        </radialGradient>

        {/* Filters */}
        <filter id="torchGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="handleTexture" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur"/>
          <feMerge> 
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Torch Handle */}
      <g>
        {/* Main Handle Body */}
        <motion.rect
          x="36"
          y="48"
          width="8"
          height="64"
          rx="4"
          ry="4"
          fill="url(#handleGradient)"
          filter="url(#handleTexture)"
          className="drop-shadow-lg"
        />

        {/* Handle Highlight */}
        <motion.rect
          x="37"
          y="48"
          width="2"
          height="60"
          rx="1"
          ry="1"
          fill="url(#handleHighlight)"
          opacity="0.6"
        />

        {/* Handle Grip Bands */}
        {[56, 68, 80, 92].map((y, i) => (
          <motion.rect
            key={`grip-${i}`}
            x="35"
            y={y}
            width="10"
            height="2"
            rx="1"
            fill="#92400e"
            opacity="0.8"
          />
        ))}

        {/* Handle Base Cap */}
        <motion.ellipse
          cx="40"
          cy="104"
          rx="6"
          ry="4"
          fill="#92400e"
          className="drop-shadow-md"
        />

        {/* Handle Top Ferrule */}
        <motion.rect
          x="35"
          y="46"
          width="10"
          height="6"
          rx="2"
          fill="#d97706"
          className="drop-shadow-md"
        />
      </g>

      {/* Flame Effects */}
      {isActive && (
        <g>
          {/* Flame Glow Base */}
          <motion.ellipse
            cx="40"
            cy="32"
            rx="24"
            ry="24"
            fill="url(#flameGlow)"
            filter="url(#torchGlow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Outer Flame Layer */}
          <motion.path
            d="M40 48 
               C32 45, 25 38, 28 28 
               C30 18, 35 12, 40 8 
               C45 12, 50 18, 52 28 
               C55 38, 48 45, 40 48 Z"
            fill="url(#outerFlame)"
            opacity="0.8"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 0.9, 0.7],
              x: [0, 2, -1, 0],
              y: [0, -1, 1, 0]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ filter: 'blur(1px)' }}
          />

          {/* Middle Flame Layer */}
          <motion.path
            d="M40 44 
               C34 42, 29 36, 31 28 
               C33 20, 37 16, 40 12 
               C43 16, 47 20, 49 28 
               C51 36, 46 42, 40 44 Z"
            fill="url(#middleFlame)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.9, 1, 0.9],
              x: [0, -1, 1, 0],
              y: [0, 1, -1, 0]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1
            }}
          />

          {/* Inner Flame Core */}
          <motion.path
            d="M40 40 
               C36 38, 33 34, 35 28 
               C36 24, 38 20, 40 18 
               C42 20, 44 24, 45 28 
               C47 34, 44 38, 40 40 Z"
            fill="url(#innerFlame)"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />

          {/* Flame Wisps */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`wisp-${i}`}
              cx={35 + Math.random() * 10}
              cy={20 + Math.random() * 15}
              r="1"
              fill="#fbbf24"
              opacity="0.7"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: [0, (Math.random() - 0.5) * 20],
                y: [0, -Math.random() * 25]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Sparks */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={`spark-${i}`}
              cx={38 + Math.random() * 4}
              cy={15 + Math.random() * 10}
              r="0.5"
              fill="#fef3c7"
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Flame Flicker Effect */}
          <motion.path
            d="M40 16 C38 14, 36 12, 38 8 C39 6, 40 4, 40 2 C40 4, 41 6, 42 8 C44 12, 42 14, 40 16 Z"
            fill="#ffffff"
            opacity="0.9"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5],
              x: [0, 1, -1, 0]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </g>
      )}

      {/* Brand Label */}
      <motion.text
        x="40"
        y="108"
        textAnchor="middle"
        className="fill-primary text-xs font-bold"
        style={{ fontSize: '10px' }}
        animate={{
          opacity: [0.8, 1, 0.8],
          y: [108, 106, 108]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        zunno
      </motion.text>
    </motion.svg>
  );
}