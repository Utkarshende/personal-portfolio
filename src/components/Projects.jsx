import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f172a] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Recent Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20 uppercase font-bold tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} className="flex items-center gap-1 text-sm text-blue-400 hover:underline">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-1 text-sm text-gray-400 hover:text-white">
  <Github size={16} /> GitHub
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;