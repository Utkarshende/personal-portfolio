import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';
import { projects } from '../data/projects'; // IMPORTING YOUR DATA HERE

const Projects = () => {
  const playHover = useHoverSound();

  return (
    <section id="projects" className="py-32 px-6 md:px-20 bg-white">
      <div className="flex items-baseline justify-between mb-20 border-b border-gray-100 pb-10">
        <h2 className="text-6xl font-black uppercase tracking-tighter italic">Selected Work</h2>
        <span className="text-gray-400 font-mono italic">({projects.length})</span>
      </div>

      <div className="grid gap-2">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            onMouseEnter={playHover}
            className="group border-b border-gray-100 py-16 flex flex-col md:flex-row justify-between items-center transition-all hover:bg-[#bef264] px-8 cursor-none"
          >
            <div className="flex flex-col">
              <span className="text-xs font-mono text-gray-400 mb-2">0{i + 1}</span>
              <h3 className="text-6xl font-black uppercase tracking-tighter group-hover:italic transition-all">
                {p.title}
              </h3>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
              <div className="flex gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-3 py-1 border border-black rounded-full text-[10px] font-bold uppercase">
                    {t}
                  </span>
                ))}
              </div>
              <p className="uppercase font-bold text-[10px] tracking-[0.3em] text-gray-500">{p.description}</p>
            </div>
            
            <div className="text-5xl group-hover:translate-x-4 transition-transform hidden md:block">↗</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;