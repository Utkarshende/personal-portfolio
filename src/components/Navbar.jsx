import { motion } from 'framer-motion';
import { useState } from 'react';
import { useHoverSound } from '../hooks/useSound';

const Navbar = () => {
  const playHover = useHoverSound();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // This creates the "Magnetic" pull effect on the button
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] px-6 md:px-20 py-8 flex justify-between items-center mix-blend-difference"
    >
      {/* Logo with Sound */}
      <div 
        onMouseEnter={playHover}
        className="font-black text-2xl tracking-tighter text-white cursor-none"
      >
        UTKARSH<span className="text-[#bef264]">.</span>
      </div>
      
      {/* Magnetic Button with Sound */}
      <motion.a
        href="#contact"
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onMouseEnter={playHover}
        animate={{ x: position.x, y: position.y }}
        className="bg-[#bef264] text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform cursor-none"
      >
        Let's Talk
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;