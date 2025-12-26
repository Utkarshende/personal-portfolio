import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#0f172a] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-blue-400 font-mono mb-2 tracking-widest uppercase text-sm">
          MCA Graduate 2024
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Utkarsh</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A Full-Stack Developer specializing in the MERN stack. I build clean, 
          scalable applications that solve real-world problems.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Contact Me
          </a>
          <a 
  href="/Utkarsh_Resume.pdf" 
  download="Utkarsh_Resume.pdf"
  className="px-8 py-4 border border-white/10 text-white rounded-full font-bold backdrop-blur-sm hover:bg-white/5 transition-all text-center"
>
  Download CV
</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;