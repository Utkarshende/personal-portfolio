import { Code2, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="text-blue-400" />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-400" />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.io"]
    },
    {
      title: "Tools & Deployment",
      icon: <Wrench className="text-purple-400" />,
      skills: ["Git/GitHub", "Postman", "Vercel", "Render", "JWT"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f172a] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Toolbox</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-slate-800/30 border border-white/5 p-8 rounded-2xl hover:bg-slate-800/50 transition-all">
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map(skill => (
                  <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;