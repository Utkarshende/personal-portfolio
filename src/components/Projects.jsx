import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white px-6 md:px-20">
      <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-8">
        <h2 className="text-5xl font-black uppercase tracking-tighter">Selected <br/> Works</h2>
        <span className="text-gray-400 font-mono text-sm">({projects.length})</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="group relative bg-[#f9f9f9] border border-gray-100 p-8 rounded-[2rem] overflow-hidden"
          >
            <div className="flex justify-between items-start mb-20">
              <h3 className="text-3xl font-bold uppercase tracking-tight">{project.title}</h3>
              <div className="bg-white p-3 rounded-full border border-gray-100 group-hover:bg-[#bef264] transition-colors">
                ↗
              </div>
            </div>
            
            <p className="text-gray-500 mb-6 max-w-xs">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] px-3 py-1 bg-white border border-gray-200 rounded-full font-bold">
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