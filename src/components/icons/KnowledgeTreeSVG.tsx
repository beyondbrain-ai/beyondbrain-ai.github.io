'use client';

import { motion } from 'framer-motion';

interface KnowledgeTreeSVGProps {
  isLit?: boolean;
  className?: string;
  width?: number;
  height?: number;
  size?: 'small' | 'medium' | 'large';
}

export default function KnowledgeTreeSVG({ isLit = false, className = "", width = 300, height = 300, size = 'medium' }: KnowledgeTreeSVGProps) {
  // Size multiplier based on size prop
  const sizeMultiplier = size === 'small' ? 0.8 : size === 'large' ? 1.4 : 1;
  return (
    <motion.svg
      viewBox="0 0 300 350"
      className={className}
      width={width}
      height={height}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: isLit ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        {/* Gradients for tree */}
        <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#CD853F" />
        </linearGradient>

        <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#00FF7F" />
        </linearGradient>

        <radialGradient id="knowledgeNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={isLit ? "#fbbf24" : "#00d4ff"} stopOpacity="1" />
          <stop offset="100%" stopColor={isLit ? "#f59e0b" : "#4ecdc4"} stopOpacity="0.6" />
        </radialGradient>

        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={isLit ? "#fbbf24" : "#00d4ff"} stopOpacity="0.8" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="treeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Tree Trunk */}
      <motion.rect
        x={140 * sizeMultiplier}
        y={260 * sizeMultiplier}
        width={20 * sizeMultiplier}
        height={60 * sizeMultiplier}
        fill="url(#trunkGradient)"
        rx={10 * sizeMultiplier}
        filter="url(#treeGlow)"
        animate={{
          height: [60 * sizeMultiplier, 65 * sizeMultiplier, 60 * sizeMultiplier],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Branches */}
      {/* Central trunk */}
      <motion.path
        d={`M${150 * sizeMultiplier} ${260 * sizeMultiplier} L${150 * sizeMultiplier} ${180 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={6 * sizeMultiplier}
        fill="none"
        filter="url(#treeGlow)"
        animate={{
          strokeWidth: [6 * sizeMultiplier, 7 * sizeMultiplier, 6 * sizeMultiplier],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Left main branch */}
      <motion.path
        d={`M${150 * sizeMultiplier} ${220 * sizeMultiplier} Q${120 * sizeMultiplier} ${200 * sizeMultiplier}, ${90 * sizeMultiplier} ${180 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={4 * sizeMultiplier}
        fill="none"
        filter="url(#treeGlow)"
        animate={{
          strokeWidth: [4 * sizeMultiplier, 5 * sizeMultiplier, 4 * sizeMultiplier],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      />

      {/* Right main branch */}
      <motion.path
        d={`M${150 * sizeMultiplier} ${220 * sizeMultiplier} Q${180 * sizeMultiplier} ${200 * sizeMultiplier}, ${210 * sizeMultiplier} ${180 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={4 * sizeMultiplier}
        fill="none"
        filter="url(#treeGlow)"
        animate={{
          strokeWidth: [4 * sizeMultiplier, 5 * sizeMultiplier, 4 * sizeMultiplier],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4
        }}
      />

      {/* Secondary branches */}
      <motion.path
        d={`M${150 * sizeMultiplier} ${200 * sizeMultiplier} Q${130 * sizeMultiplier} ${190 * sizeMultiplier}, ${110 * sizeMultiplier} ${170 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={3 * sizeMultiplier}
        fill="none"
        opacity="0.8"
        animate={{
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      />

      <motion.path
        d={`M${150 * sizeMultiplier} ${200 * sizeMultiplier} Q${170 * sizeMultiplier} ${190 * sizeMultiplier}, ${190 * sizeMultiplier} ${170 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={3 * sizeMultiplier}
        fill="none"
        opacity="0.8"
        animate={{
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      />

      {/* Small twigs */}
      <motion.path
        d={`M${90 * sizeMultiplier} ${180 * sizeMultiplier} Q${85 * sizeMultiplier} ${175 * sizeMultiplier}, ${80 * sizeMultiplier} ${170 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={2 * sizeMultiplier}
        fill="none"
        opacity="0.7"
      />

      <motion.path
        d={`M${210 * sizeMultiplier} ${180 * sizeMultiplier} Q${215 * sizeMultiplier} ${175 * sizeMultiplier}, ${220 * sizeMultiplier} ${170 * sizeMultiplier}`}
        stroke="url(#branchGradient)"
        strokeWidth={2 * sizeMultiplier}
        fill="none"
        opacity="0.7"
      />

      {/* Knowledge Nodes (like fruits on the tree) */}
      {[
        { x: 150, y: 180, size: 8, subject: 'Core', color: '#ffffff' },
        { x: 90, y: 180, size: 6, subject: 'Math', color: '#00d4ff' },
        { x: 210, y: 180, size: 6, subject: 'Science', color: '#4ecdc4' },
        { x: 110, y: 170, size: 5, subject: 'Reading', color: '#a855f7' },
        { x: 190, y: 170, size: 5, subject: 'Writing', color: '#ff6b6b' },
        { x: 80, y: 170, size: 4, subject: 'Art', color: '#fbbf24' },
        { x: 220, y: 170, size: 4, subject: 'Music', color: '#f59e0b' },
        { x: 130, y: 160, size: 4, subject: 'History', color: '#10b981' },
        { x: 170, y: 160, size: 4, subject: 'Geography', color: '#8b5cf6' },
        { x: 150, y: 150, size: 5, subject: 'Critical', color: '#ec4899' }
      ].map((node, i) => (
        <g key={`knowledge-${i}`}>
          {/* Node Glow */}
          <motion.circle
            cx={node.x * sizeMultiplier}
            cy={node.y * sizeMultiplier}
            r={node.size * 2 * sizeMultiplier}
            fill="url(#nodeGlow)"
            initial={{ opacity: 0.2, scale: 0.3 }}
            animate={{
              opacity: isLit ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
              scale: isLit ? [0.5, 1.2, 0.5] : [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
          
          {/* Knowledge Node */}
          <motion.circle
            cx={node.x * sizeMultiplier}
            cy={node.y * sizeMultiplier}
            r={node.size * sizeMultiplier}
            fill={isLit ? node.color : "url(#knowledgeNode)"}
            filter="url(#treeGlow)"
            initial={{ opacity: 0.6, scale: 0.5 }}
            animate={{
              opacity: isLit ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6],
              scale: isLit ? [0.9, 1.3, 0.9] : [0.7, 1, 0.7]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />

          {/* Subject Label (appears on hover/lit) */}
          {isLit && (
            <motion.text
              x={node.x * sizeMultiplier}
              y={node.y * sizeMultiplier - node.size * sizeMultiplier - 12}
              textAnchor="middle"
              className="fill-white font-display text-xs font-bold tracking-wider drop-shadow-lg"
              style={{ 
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
                fontSize: `${12 * sizeMultiplier}px`
              }}
              initial={{ opacity: 0, y: node.y * sizeMultiplier - node.size * sizeMultiplier - 8 }}
              animate={{ opacity: 1, y: node.y * sizeMultiplier - node.size * sizeMultiplier - 12 }}
              transition={{ delay: 1.5 + i * 0.2, duration: 0.6 }}
            >
              {node.subject}
            </motion.text>
          )}
        </g>
      ))}

      {/* Growing Leaves/Particles */}
      {isLit && [...Array(15)].map((_, i) => {
        const leafColors = ['#32CD32', '#00FF7F', '#90EE90', '#98FB98', '#ADFF2F'];
        const leafColor = leafColors[i % leafColors.length];
        
        return (
          <motion.ellipse
            key={`leaf-${i}`}
            cx={80 + Math.random() * 140}
            cy={120 + Math.random() * 80}
            rx="3"
            ry="6"
            fill={leafColor}
            opacity="0.8"
            transform={`rotate(${Math.random() * 360})`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, -Math.random() * 30]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        );
      })}

      {/* Root System (subtle) */}
      <g opacity="0.4">
        <motion.path
          d="M140 320 Q120 330, 100 335"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M160 320 Q180 330, 200 335"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.path
          d="M150 325 L150 335"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
          animate={{
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </g>

      {/* Knowledge Flow Animation */}
      {isLit && (
        <motion.path
          d="M150 320 L150 240 L150 160 L90 160 M150 160 L210 160 M150 180 L110 150 M150 180 L190 150"
          stroke="#fbbf24"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          strokeDasharray="5,10"
          animate={{
            strokeDashoffset: [0, -30],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
    </motion.svg>
  );
}