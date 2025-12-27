import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';
import { projects } from '../data/projects';

const Projects = () => {
  const playHover = useHoverSound();

  return (
    <section id="projects" className="py-32 px-6 md:px-20 bg-white">
      <div className="flex items-baseline justify-between mb-20 border-b border-gray-100 pb-10">
        <h2 className="text-6xl font-black uppercase tracking-tighter italic">Selected Work</h2>
        <span className="text-gray-400 font-mono italic">({projects.length}) — 2024/25</span>
      </div>

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            onMouseEnter={playHover}
            className="group border-b border-gray-100 py-12 flex flex-col md:flex-row justify-between items-center transition-all hover:bg-[#bef264] px-8 cursor-none relative"
          >
            {/* Project Info */}
            <div className="flex flex-col z-10">
              <span className="text-xs font-mono text-gray-400 mb-2">0{i + 1}</span>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter group-hover:italic transition-all duration-500">
                {p.title}
              </h3>
              <p className="mt-4 text-gray-500 group-hover:text-black max-w-sm text-sm uppercase font-bold tracking-widest">
                {p.description}
              </p>
            </div>
            
            {/* Tech & Links */}
            <div className="flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0 z-10">
              <div className="flex flex-wrap justify-center gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-4 py-1 border border-black rounded-full text-[10px] font-bold uppercase bg-white">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-8 items-center">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-black uppercase tracking-widest border-b-2 border-transparent hover:border-black transition-all cursor-none"
                >
                  GitHub
                </a>
                
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-6xl group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 ease-out cursor-none"
                >
                  ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;