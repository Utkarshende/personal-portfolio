import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';

const Terminal = () => {
  const playHover = useHoverSound();

  const codeLines = [
    { line: '1', content: <><span className="text-purple-400">const</span> developer = {"{"}</> },
    { line: '2', content: <>&nbsp;&nbsp;name: <span className="text-[#bef264]">'Utkarsh Shende'</span>,</> },
    { line: '3', content: <>&nbsp;&nbsp;degree: <span className="text-[#bef264]">'MCA Graduate 2024'</span>,</> },
    { line: '4', content: <>&nbsp;&nbsp;specialization: [<span className="text-[#bef264]">'MERN'</span>, <span className="text-[#bef264]">'UI/UX'</span>],</> },
    { line: '5', content: <>&nbsp;&nbsp;location: <span className="text-[#bef264]">'Nagpur'</span>,<span className="text-[#bef264]">'Maharshtra'</span>,</> },
    { line: '6', content: <>&nbsp;&nbsp;availability: <span className="text-orange-400">true</span></> },
    { line: '7', content: <><span className="text-purple-400">{"}"}</span>;</> },
    { line: '8', content: <><span className="text-purple-400">await</span> portfolio.<span className="text-blue-400">init</span>(developer);</> },
    { line: '9', content: <><span className="text-green-400 font-bold">✔ Build Successful: Ready to scale.</span></> },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-t-xl p-3 flex items-center justify-between border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">developer.config.js</span>
          <div className="w-10" />
        </div>

        <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-b-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col gap-2 font-mono text-sm md:text-base leading-relaxed">
            {codeLines.map((snippet, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-gray-700 select-none w-4 text-right">{snippet.line}</span>
                <div className="text-white">{snippet.content}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <motion.a
            href="/Utkarsh_Sharma_CV.pdf"
            download
            onMouseEnter={playHover}
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-[#bef264] hover:text-black transition-all cursor-none border border-black"
          >
            <span>Download CV</span>
            <span className="text-xl group-hover:translate-y-1 transition-transform">↓</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Terminal;