import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { title: "E-Commerce", desc: "MERN Stack Platform", tech: ["React", "Node", "Stripe"] },
    { title: "Dashboard", desc: "Data Visualization UI", tech: ["Recharts", "Tailwind"] }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-20">
      <div className="flex items-baseline justify-between mb-20 border-b border-gray-100 pb-10">
        <h2 className="text-6xl font-black uppercase tracking-tighter italic">Projects</h2>
        <span className="text-gray-400 font-mono italic">0{projects.length} — VIEW ALL</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className="group bg-[#f7f7f7] rounded-[3rem] p-12 h-[500px] flex flex-col justify-between cursor-none transition-colors hover:bg-black hover:text-white"
          >
            <div>
              <h3 className="text-4xl font-bold uppercase mb-4 tracking-tighter">{p.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400">{p.desc}</p>
            </div>
            <div className="flex gap-2">
              {p.tech.map(t => <span key={t} className="px-4 py-1 border border-current rounded-full text-[10px] font-bold uppercase">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;