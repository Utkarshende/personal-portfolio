import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-10">
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:your.email@example.com" 
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all w-full md:w-auto"
          >
            <Mail size={20} /> Say Hello
          </a>
          
          <div className="flex gap-4">
            <a href="#" className="p-4 bg-slate-800 text-gray-400 hover:text-white rounded-2xl border border-slate-700 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-4 bg-slate-800 text-gray-400 hover:text-white rounded-2xl border border-slate-700 transition-all">
              <Github size={24} />
            </a>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Utkarsh. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and Passion.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;