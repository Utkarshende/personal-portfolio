import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 bg-white pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        <div className="inline-block px-4 py-1 border border-black rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Available for freelance
        </div>
        
        <h1 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black uppercase tracking-tighter text-black">
          UTKARSH <br />
          <span className="text-gray-300">SHARMA</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="max-w-md text-lg text-gray-600 font-medium">
            MERN Stack Developer specializing in high-end digital experiences and scalable backends.
          </p>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center animate-bounce">
              <span className="text-xl">↓</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;