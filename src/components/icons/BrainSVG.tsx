'use client';

import { motion } from 'framer-motion';

interface BrainSVGProps {
  isLit?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function BrainSVG({ isLit = false, className = "", width = 500, height = 500 }: BrainSVGProps) {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      className={className}
      width={width}
      height={height}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: isLit ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="brainGradientNormal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="25%" stopColor="#4ecdc4" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="75%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        
        <linearGradient id="brainGradientLit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="25%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="75%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        <radialGradient id="neuronCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={isLit ? "#fbbf24" : "#00d4ff"} stopOpacity="1" />
          <stop offset="100%" stopColor={isLit ? "#f59e0b" : "#4ecdc4"} stopOpacity="0.6" />
        </radialGradient>

        <radialGradient id="synapseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={isLit ? "#fbbf24" : "#00d4ff"} stopOpacity="0.8" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="neuronGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main Brain Outline - Detailed anatomical shape */}
      <motion.path
        d="M250 60 
           C310 55, 370 75, 410 120 
           C440 150, 445 185, 440 220 
           C435 250, 425 275, 410 295 
           C395 315, 375 330, 350 340 
           C325 350, 300 355, 275 357 
           C250 359, 225 357, 200 350 
           C175 343, 152 330, 135 315 
           C118 300, 105 280, 98 255 
           C90 230, 88 200, 95 175 
           C102 150, 115 125, 135 105 
           C155 85, 180 70, 210 62 
           C230 58, 240 59, 250 60 Z"
        fill="none"
        stroke={isLit ? "url(#brainGradientLit)" : "url(#brainGradientNormal)"}
        strokeWidth="4"
        filter="url(#glow)"
        className="transition-all duration-500"
      />

      {/* Left Hemisphere Detail */}
      <motion.path
        d="M155 150 
           C175 130, 215 120, 250 130 
           C250 165, 248 200, 245 235 
           C242 270, 235 300, 225 325 
           C205 330, 180 325, 160 315 
           C140 305, 125 285, 118 260 
           C110 235, 115 210, 125 185 
           C135 165, 145 155, 155 150 Z"
        fill="none"
        stroke={isLit ? "#fbbf24" : "#00d4ff"}
        strokeWidth="2"
        opacity={isLit ? 0.8 : 0.6}
        className="transition-all duration-500"
      />

      {/* Right Hemisphere Detail */}
      <motion.path
        d="M250 130 
           C285 120, 325 130, 345 150 
           C355 155, 365 165, 375 185 
           C385 210, 390 235, 382 260 
           C375 285, 360 305, 340 315 
           C320 325, 295 330, 275 325 
           C265 300, 258 270, 255 235 
           C252 200, 250 165, 250 130 Z"
        fill="none"
        stroke={isLit ? "#f59e0b" : "#4ecdc4"}
        strokeWidth="2"
        opacity={isLit ? 0.8 : 0.6}
        className="transition-all duration-500"
      />

      {/* Corpus Callosum - Bridge between hemispheres */}
      <motion.path
        d="M240 200 C245 205, 255 205, 260 200 C255 215, 245 215, 240 200"
        fill="none"
        stroke={isLit ? "#ea580c" : "#a855f7"}
        strokeWidth="3"
        opacity={0.7}
        className="transition-all duration-500"
      />

      {/* Cerebellum */}
      <motion.ellipse
        cx="250"
        cy="340"
        rx="35"
        ry="20"
        fill="none"
        stroke={isLit ? "#dc2626" : "#ff6b6b"}
        strokeWidth="2"
        opacity={0.6}
        className="transition-all duration-500"
      />

      {/* Brain Stem */}
      <motion.path
        d="M240 350 L240 380 C240 385, 245 390, 250 390 C255 390, 260 385, 260 380 L260 350"
        fill="none"
        stroke={isLit ? "#dc2626" : "#ff6b6b"}
        strokeWidth="3"
        opacity={0.7}
        className="transition-all duration-500"
      />

      {/* Neural Network - Major Nodes with enhanced detail */}
      {[
        { x: 170, y: 180, size: 8, type: 'major' },
        { x: 210, y: 160, size: 10, type: 'major' },
        { x: 250, y: 200, size: 12, type: 'central' },
        { x: 290, y: 165, size: 9, type: 'major' },
        { x: 330, y: 185, size: 8, type: 'major' },
        { x: 190, y: 220, size: 7, type: 'minor' },
        { x: 230, y: 240, size: 6, type: 'minor' },
        { x: 270, y: 235, size: 7, type: 'minor' },
        { x: 310, y: 215, size: 6, type: 'minor' },
        { x: 180, y: 260, size: 5, type: 'minor' },
        { x: 220, y: 280, size: 8, type: 'major' },
        { x: 280, y: 275, size: 7, type: 'minor' },
        { x: 320, y: 255, size: 5, type: 'minor' },
        { x: 160, y: 300, size: 4, type: 'micro' },
        { x: 200, y: 320, size: 6, type: 'minor' },
        { x: 250, y: 310, size: 9, type: 'major' },
        { x: 300, y: 315, size: 6, type: 'minor' },
        { x: 340, y: 295, size: 4, type: 'micro' }
      ].map((node, i) => (
        <g key={`neuron-${i}`}>
          {/* Neuron Glow */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size * 1.8}
            fill="url(#synapseGlow)"
            initial={{ opacity: 0.2, scale: 0.3 }}
            animate={{
              opacity: isLit ? [0.3, 0.7, 0.3] : [0.1, 0.4, 0.1],
              scale: isLit ? [0.5, 1.2, 0.5] : [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut"
            }}
          />
          
          {/* Neuron Core */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="url(#neuronCore)"
            filter="url(#neuronGlow)"
            initial={{ opacity: 0.4, scale: 0.5 }}
            animate={{
              opacity: isLit ? [0.7, 1, 0.7] : [0.4, 0.8, 0.4],
              scale: isLit ? [0.8, 1.3, 0.8] : [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />

          {/* Central Neuron Special Effect */}
          {node.type === 'central' && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 0.4}
              fill={isLit ? "#ffffff" : "#ffffff"}
              opacity={0.9}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </g>
      ))}

      {/* Enhanced Neural Connections */}
      {[
        { x1: 170, y1: 180, x2: 210, y2: 160, strength: 'strong' },
        { x1: 210, y1: 160, x2: 250, y2: 200, strength: 'strong' },
        { x1: 250, y1: 200, x2: 290, y2: 165, strength: 'strong' },
        { x1: 290, y1: 165, x2: 330, y2: 185, strength: 'strong' },
        { x1: 190, y1: 220, x2: 230, y2: 240, strength: 'medium' },
        { x1: 230, y1: 240, x2: 270, y2: 235, strength: 'medium' },
        { x1: 270, y1: 235, x2: 310, y2: 215, strength: 'medium' },
        { x1: 180, y1: 260, x2: 220, y2: 280, strength: 'medium' },
        { x1: 220, y1: 280, x2: 250, y2: 310, strength: 'strong' },
        { x1: 250, y1: 310, x2: 280, y2: 275, strength: 'medium' },
        { x1: 280, y1: 275, x2: 320, y2: 255, strength: 'medium' },
        { x1: 170, y1: 180, x2: 190, y2: 220, strength: 'weak' },
        { x1: 210, y1: 160, x2: 230, y2: 240, strength: 'weak' },
        { x1: 250, y1: 200, x2: 250, y2: 310, strength: 'strong' },
        { x1: 290, y1: 165, x2: 270, y2: 235, strength: 'weak' },
        { x1: 330, y1: 185, x2: 310, y2: 215, strength: 'weak' },
        { x1: 200, y1: 320, x2: 250, y2: 310, strength: 'medium' },
        { x1: 250, y1: 310, x2: 300, y2: 315, strength: 'medium' }
      ].map((connection, i) => (
        <motion.line
          key={`synapse-${i}`}
          x1={connection.x1}
          y1={connection.y1}
          x2={connection.x2}
          y2={connection.y2}
          stroke={isLit ? "#f59e0b" : "#4ecdc4"}
          strokeWidth={
            connection.strength === 'strong' ? (isLit ? "3" : "2") :
            connection.strength === 'medium' ? (isLit ? "2" : "1.5") : 
            (isLit ? "1.5" : "1")
          }
          opacity={
            connection.strength === 'strong' ? 0.8 :
            connection.strength === 'medium' ? 0.6 : 0.4
          }
          strokeDasharray={connection.strength === 'weak' ? "5,5" : "none"}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: isLit ? 
              [0.4, connection.strength === 'strong' ? 1 : 0.8, 0.4] : 
              [0.2, connection.strength === 'strong' ? 0.6 : 0.4, 0.2],
            strokeWidth: isLit ? 
              [connection.strength === 'strong' ? "2" : "1", connection.strength === 'strong' ? "4" : "2.5", connection.strength === 'strong' ? "2" : "1"] :
              [connection.strength === 'strong' ? "1" : "0.5", connection.strength === 'strong' ? "2.5" : "1.5", connection.strength === 'strong' ? "1" : "0.5"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Particle Effects for Lit State */}
      {isLit && [...Array(20)].map((_, i) => (
        <motion.circle
          key={`thought-particle-${i}`}
          cx={150 + Math.random() * 200}
          cy={150 + Math.random() * 200}
          r="2"
          fill="#fbbf24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Brainwave Pattern */}
      <motion.path
        d="M100 250 Q150 240, 200 250 T300 250 T400 250"
        fill="none"
        stroke={isLit ? "#fbbf24" : "#00d4ff"}
        strokeWidth="1"
        opacity={0.3}
        strokeDasharray="10,10"
        animate={{
          strokeDashoffset: [0, -20],
          opacity: isLit ? [0.3, 0.7, 0.3] : [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.svg>
  );
}