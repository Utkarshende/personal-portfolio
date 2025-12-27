import { motion, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useHoverSound } from '../hooks/useSound';

const Logo = () => {
  const playHover = useHoverSound();
  const ref = useRef(null);
  
  // Spring config for that "organic" bouncy movement
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of the logo
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // The "Magnetic" pull strength (0.35 means it moves 35% towards the cursor)
    const moveX = (clientX - centerX) * 0.4;
    const moveY = (clientY - centerY) * 0.4;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playHover}
      style={{ x, y }}
      className="flex items-center gap-1 cursor-none group font-mono p-4" // Added padding to increase magnetic hit area
    >
      {/* The Brackets */}
      <span className="text-gray-400 text-xl font-light group-hover:text-black transition-colors">{'<'}</span>
      
      <div className="relative overflow-hidden h-7">
        <motion.div
          whileHover={{ y: -28 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col"
        >
          <span className="font-black text-xl tracking-tighter uppercase text-black">
            Utkarsh
          </span>
          <span className="font-black text-xl tracking-tighter uppercase text-[#bef264]">
            Shende
          </span>
        </motion.div>
      </div>

      <span className="text-gray-400 text-xl font-light group-hover:text-black transition-colors">{' />'}</span>
      
      {/* Pulsing Status Dot */}
      <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] ml-1 mb-4 animate-pulse"></span>
    </motion.div>
  );
};

export default Logo;