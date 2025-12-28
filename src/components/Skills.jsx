import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Rest API", "Socket.io", "JWT"]
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "PostgreSQL", "Git/GitHub", "Docker", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-white">
      <div className="flex items-baseline gap-4 mb-16 border-b border-gray-100 pb-10">
        <h2 className="text-6xl font-black uppercase tracking-tighter italic">Technical Stack</h2>
        <span className="text-[#bef264] font-mono font-bold text-xl">//</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 border border-gray-100 bg-[#f9f9f9] hover:bg-black transition-colors duration-500 rounded-2xl"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#bef264] mb-8 transition-colors">
              {cat.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="text-lg md:text-xl font-bold tracking-tight text-black group-hover:text-white transition-colors"
                >
                  {skill}{idx !== cat.skills.length - 1 && <span className="text-[#bef264] ml-2">/</span>}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;