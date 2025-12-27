import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 block">
          Based in India / MERN Developer
        </span>
        
        <h1 className="text-[14vw] md:text-[11vw] leading-[0.8] font-black uppercase tracking-tighter">
          UTKARSH <br />
          <span className="text-gray-200">SHARMA</span>
        </h1>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-end">
          <p className="max-w-md text-xl text-gray-600 font-medium leading-relaxed">
            Architecting high-performance web applications with a focus on clean code and immersive user experiences.
          </p>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl mt-10 md:mt-0"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;