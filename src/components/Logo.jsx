import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';

const Logo = () => {
  const playHover = useHoverSound();

  return (
    <motion.div 
      onMouseEnter={playHover}
      className="flex items-center gap-1 cursor-none group font-mono"
    >
      {/* The Opening Bracket */}
      <span className="text-gray-400 text-xl font-light">{'<'}</span>
      
      <div className="relative overflow-hidden h-7">
        <motion.div
          whileHover={{ y: -28 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col"
        >
          {/* Default State */}
          <span className="font-black text-xl tracking-tighter uppercase text-black">
            Utkarsh
          </span>
          {/* Hover State - Changes to Accent Color */}
          <span className="font-black text-xl tracking-tighter uppercase text-[#bef264]">
            Shende
          </span>
        </motion.div>
      </div>

      {/* The Closing Bracket */}
      <span className="text-gray-400 text-xl font-light">{' />'}</span>
      
      {/* Small pulsing "Active" indicator next to name */}
      <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] ml-1 mb-4 animate-pulse"></span>
    </motion.div>
  );
};

export default Logo;