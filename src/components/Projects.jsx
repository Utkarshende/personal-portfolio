import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';

const Projects = () => {
  const playHover = useHoverSound();
  const projects = [
    { title: "E-Commerce", desc: "MERN Stack Application", tech: ["React", "Node", "Stripe"] },
    { title: "Portfolio 2025", desc: "Creative Developer UI", tech: ["Framer Motion", "Tailwind"] }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-20 bg-white">
      <div className="flex items-baseline justify-between mb-20 border-b border-gray-100 pb-10">
        <h2 className="text-6xl font-black uppercase tracking-tighter italic">Projects</h2>
        <span className="text-gray-400 font-mono italic">0{projects.length} — WORKS</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            onMouseEnter={playHover}
            whileHover={{ y: -10 }}
            className="group bg-[#f7f7f7] rounded-[3rem] p-10 h-[450px] flex flex-col justify-between cursor-none transition-all hover:bg-black hover:text-white"
          >
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">{p.title}</h3>
                <span className="text-2xl group-hover:rotate-45 transition-transform">↗</span>
              </div>
              <p className="mt-4 text-gray-500 group-hover:text-gray-400">{p.desc}</p>
            </div>
            
            <div className="flex gap-2">
              {p.tech.map(t => (
                <span key={t} className="px-4 py-1 border border-current rounded-full text-[10px] font-bold uppercase">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;