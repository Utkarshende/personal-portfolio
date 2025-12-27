import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-10 py-6 flex justify-between items-center"
    >
      <div className="font-black text-xl tracking-tighter uppercase">
        Utkarsh<span className="text-[#bef264]">.</span>
      </div>
      
      <div className="flex gap-8 items-center">
        <a href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Works</a>
        <a href="#contact" className="text-xs font-bold uppercase tracking-widest bg-black text-white px-5 py-2 rounded-full hover:bg-[#bef264] hover:text-black transition-all">
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;