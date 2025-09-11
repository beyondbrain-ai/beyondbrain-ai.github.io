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

      {/* Main Brain Outline - Professional Symmetrical Shape */}
      <motion.path
        d="M250 70 
           C195 70, 140 95, 110 140 
           C85 180, 85 225, 95 270 
           C105 315, 130 355, 170 375 
           C210 395, 250 400, 250 400 
           C250 400, 290 395, 330 375 
           C370 355, 395 315, 405 270 
           C415 225, 415 180, 390 140 
           C360 95, 305 70, 250 70 Z"
        fill="none"
        stroke={isLit ? "url(#brainGradientLit)" : "url(#brainGradientNormal)"}
        strokeWidth="3"
        filter="url(#glow)"
        className="transition-all duration-500"
      />

      {/* Left Hemisphere - Symmetric Design */}
      <motion.path
        d="M145 160 
           C130 140, 125 180, 135 220 
           C145 260, 165 295, 195 320 
           C225 340, 250 345, 250 345 
           C250 300, 248 250, 245 200 
           C242 150, 200 130, 165 140 
           C155 145, 150 150, 145 160 Z"
        fill={isLit ? "rgba(251, 191, 36, 0.1)" : "rgba(0, 212, 255, 0.1)"}
        stroke={isLit ? "#fbbf24" : "#00d4ff"}
        strokeWidth="2"
        opacity={isLit ? 0.9 : 0.7}
        className="transition-all duration-500"
      />

      {/* Right Hemisphere - Mirror of Left */}
      <motion.path
        d="M355 160 
           C370 140, 375 180, 365 220 
           C355 260, 335 295, 305 320 
           C275 340, 250 345, 250 345 
           C250 300, 252 250, 255 200 
           C258 150, 300 130, 335 140 
           C345 145, 350 150, 355 160 Z"
        fill={isLit ? "rgba(245, 158, 11, 0.1)" : "rgba(78, 205, 196, 0.1)"}
        stroke={isLit ? "#f59e0b" : "#4ecdc4"}
        strokeWidth="2"
        opacity={isLit ? 0.9 : 0.7}
        className="transition-all duration-500"
      />

      {/* Central Sulcus - Professional Brain Division */}
      <motion.path
        d="M250 100 C250 120, 250 140, 250 160 C250 180, 250 200, 250 220 C250 240, 250 260, 250 280 C250 300, 250 320, 250 340"
        fill="none"
        stroke={isLit ? "#ea580c" : "#a855f7"}
        strokeWidth="2"
        opacity={0.6}
        strokeDasharray="5,5"
        className="transition-all duration-500"
        animate={{
          strokeDashoffset: [0, -10],
          opacity: isLit ? [0.6, 1, 0.6] : [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Cerebellum - More Realistic */}
      <motion.ellipse
        cx="250"
        cy="360"
        rx="45"
        ry="25"
        fill={isLit ? "rgba(220, 38, 38, 0.2)" : "rgba(255, 107, 107, 0.2)"}
        stroke={isLit ? "#dc2626" : "#ff6b6b"}
        strokeWidth="2"
        opacity={0.8}
        className="transition-all duration-500"
      />

      {/* Brain Stem - More Anatomical */}
      <motion.path
        d="M245 380 C245 385, 245 390, 247 395 C248 400, 250 405, 250 410 C250 405, 252 400, 253 395 C255 390, 255 385, 255 380"
        fill="none"
        stroke={isLit ? "#dc2626" : "#ff6b6b"}
        strokeWidth="4"
        opacity={0.8}
        className="transition-all duration-500"
      />

      {/* Neural Network - Symmetrical Professional Layout */}
      {[
        // Central Processing Hub
        { x: 250, y: 200, size: 12, type: 'central', color: '#ffffff' },
        
        // Left Hemisphere Nodes (Symmetrical)
        { x: 180, y: 160, size: 9, type: 'major', color: '#00d4ff' },
        { x: 200, y: 190, size: 7, type: 'minor', color: '#4ecdc4' },
        { x: 170, y: 220, size: 8, type: 'major', color: '#00d4ff' },
        { x: 190, y: 250, size: 6, type: 'minor', color: '#4ecdc4' },
        { x: 160, y: 280, size: 7, type: 'minor', color: '#a855f7' },
        { x: 200, y: 310, size: 8, type: 'major', color: '#ff6b6b' },
        
        // Right Hemisphere Nodes (Mirrored)
        { x: 320, y: 160, size: 9, type: 'major', color: '#00d4ff' },
        { x: 300, y: 190, size: 7, type: 'minor', color: '#4ecdc4' },
        { x: 330, y: 220, size: 8, type: 'major', color: '#00d4ff' },
        { x: 310, y: 250, size: 6, type: 'minor', color: '#4ecdc4' },
        { x: 340, y: 280, size: 7, type: 'minor', color: '#a855f7' },
        { x: 300, y: 310, size: 8, type: 'major', color: '#ff6b6b' },
        
        // Frontal Lobe Network
        { x: 220, y: 140, size: 6, type: 'frontal', color: '#fbbf24' },
        { x: 280, y: 140, size: 6, type: 'frontal', color: '#fbbf24' },
        
        // Occipital Lobe Network  
        { x: 230, y: 330, size: 5, type: 'visual', color: '#dc2626' },
        { x: 270, y: 330, size: 5, type: 'visual', color: '#dc2626' }
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
            fill={isLit ? node.color : "url(#neuronCore)"}
            filter="url(#neuronGlow)"
            initial={{ opacity: 0.4, scale: 0.5 }}
            animate={{
              opacity: isLit ? [0.8, 1, 0.8] : [0.5, 0.8, 0.5],
              scale: isLit ? [0.9, 1.3, 0.9] : [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.12,
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

      {/* Enhanced Colorful Particle Effects */}
      {isLit && [...Array(30)].map((_, i) => {
        const colors = ['#00d4ff', '#4ecdc4', '#fbbf24', '#f59e0b', '#ff6b6b', '#a855f7', '#dc2626', '#10b981', '#f97316', '#8b5cf6'];
        const particleColor = colors[i % colors.length];
        const startX = 150 + Math.random() * 200;
        const startY = 150 + Math.random() * 200;
        
        return (
          <motion.g key={`thought-particle-${i}`}>
            {/* Main Particle */}
            <motion.circle
              cx={startX}
              cy={startY}
              r="3"
              fill={particleColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.5, 2, 0],
                x: [0, (Math.random() - 0.5) * 120],
                y: [0, (Math.random() - 0.5) * 120]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
              filter="url(#neuronGlow)"
            />
            
            {/* Particle Trail */}
            <motion.circle
              cx={startX}
              cy={startY}
              r="1.5"
              fill={particleColor}
              opacity="0.6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0.4, 0],
                scale: [0, 1, 1.5, 0],
                x: [0, (Math.random() - 0.5) * 80],
                y: [0, (Math.random() - 0.5) * 80]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2 + 0.3,
                ease: "easeOut"
              }}
            />
            
            {/* Sparkle Effect */}
            <motion.polygon
              points={`${startX},${startY-4} ${startX+1},${startY-1} ${startX+4},${startY} ${startX+1},${startY+1} ${startX},${startY+4} ${startX-1},${startY+1} ${startX-4},${startY} ${startX-1},${startY-1}`}
              fill={particleColor}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
                x: [0, (Math.random() - 0.5) * 60],
                y: [0, (Math.random() - 0.5) * 60]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.15 + 0.5,
                ease: "easeOut"
              }}
            />
          </motion.g>
        );
      })}

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