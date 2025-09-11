'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TorchSVG from '@/components/icons/TorchSVG';

export default function GlobalTorchCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Set initial visibility
    setIsVisible(true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div 
      className="fixed pointer-events-none z-[9999]"
      style={{ 
        left: mousePosition.x - 40, 
        top: mousePosition.y - 56,
      }}
      initial={{ scale: 0, rotate: -45 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        rotate: -10,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3, 
        ease: "backOut",
        opacity: { duration: 0.2 }
      }}
    >
      <TorchSVG isActive={true} width={80} height={112} />
    </motion.div>
  );
}