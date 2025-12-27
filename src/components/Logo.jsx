import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';

const Logo = () => {
  const playHover = useHoverSound();

  return (
    <motion.div 
      onMouseEnter={playHover}
      className="relative overflow-hidden cursor-none group"
    >
      <motion.div
        whileHover={{ y: -30 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col"
      >
        <span className="font-black text-2xl tracking-tighter uppercase leading-none">
          UTKARSH<span className="text-[#bef264]">.</span>
        </span>
        <span className="font-black text-2xl tracking-tighter uppercase leading-none text-[#bef264] absolute top-full">
          UTKARSH<span className="text-black">.</span>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;