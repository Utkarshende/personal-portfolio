import { motion, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useHoverSound } from '../hooks/useSound';

const Logo = () => {
  const playHover = useHoverSound();
  const ref = useRef(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  // Animation variants for the "Drawing" effect
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onMouseEnter={playHover}
      style={{ x, y }}
      className="flex items-center gap-2 cursor-none group font-mono p-4"
    >
      {/* SVG for Brackets to allow Drawing Animation */}
      <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="group-hover:stroke-black transition-colors">
        <motion.path
          d="M15 5L5 15L15 25"
          stroke="#9ca3af" // Gray-400
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          animate="visible"
        />
      </svg>
      
      <div className="relative overflow-hidden h-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ y: -28 }}
          className="flex flex-col"
        >
          <span className="font-black text-xl tracking-tighter uppercase text-black">Utkarsh</span>
          <span className="font-black text-xl tracking-tighter uppercase text-[#bef264]">Sharma</span>
        </motion.div>
      </div>

      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="group-hover:stroke-black transition-colors">
        <motion.path
          d="M10 5L20 15L10 25"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M22 5L15 25"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
};

export default Logo;