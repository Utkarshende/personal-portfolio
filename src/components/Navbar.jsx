import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from './Logo'; // Import the new logo
import { useHoverSound } from '../hooks/useSound';

const Navbar = () => {
  const playHover = useHoverSound();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  return (
   <nav className="fixed top-0 w-full z-[100] px-6 md:px-20 py-8 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <a href="/">
           <Logo />
        </a>
      </div>
      
      <motion.a
        href="#contact"
        onMouseMove={handleMouse}
        onMouseLeave={() => setPosition({ x: 0, y: 0 })}
        onMouseEnter={playHover}
        animate={{ x: position.x, y: position.y }}
        className="bg-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#bef264] hover:text-black transition-colors pointer-events-auto cursor-none shadow-xl"
      >
        Let's Talk
      </motion.a>
    </nav>
  );
};

export default Navbar;