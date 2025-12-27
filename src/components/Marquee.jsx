import { motion } from 'framer-motion';

const Terminal = () => {
  const snippets = [
    { type: 'comment', content: '// Initializing MERN Environment...' },
    { type: 'code', line: '1', content: <><span className="text-purple-400">import</span> express <span className="text-purple-400">from</span> <span className="text-[#bef264]">'express'</span>;</> },
    { type: 'code', line: '2', content: <><span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();</> },
    { type: 'code', line: '3', content: <><span className="text-purple-400">await</span> mongoose.<span className="text-blue-400">connect</span>(process.env.DB_URI);</> },
    { type: 'success', line: '4', content: '✔ MongoDB Connection Established' },
    { type: 'code', line: '5', content: <><span className="text-purple-400">const</span> [user, setUser] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">null</span>);</> },
    { type: 'code', line: '6', content: <><span className="text-purple-400">export default</span> <span className="text-blue-400">UtkarshPortfolio</span>;</> },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Window Frame */}
        <div className="bg-[#1e1e1e] rounded-t-xl p-3 flex items-center justify-between border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">bash — utkarsh@mern-stack</span>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Terminal Content */}
        <div className="bg-[#0d0d0d] p-6 md:p-10 rounded-b-xl font-mono text-sm md:text-base shadow-2xl overflow-hidden">
          <div className="flex flex-col gap-2">
            {snippets.map((snippet, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="flex gap-4 items-start"
              >
                {/* Line Numbers */}
                <span className="text-gray-700 select-none w-4 text-right">{snippet.line || '>'}</span>
                
                {/* Content Logic */}
                <div className={`
                  ${snippet.type === 'comment' ? 'text-gray-500 italic' : ''}
                  ${snippet.type === 'success' ? 'text-green-400 font-bold' : 'text-white'}
                `}>
                  {snippet.content}
                </div>
              </motion.div>
            ))}

            {/* Simulated Live Processing Line */}
            <motion.div 
              className="flex gap-4 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-gray-700 w-4 text-right">7</span>
              <div className="flex items-center gap-2 text-[#bef264]">
                <span>$ npm start</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-5 bg-[#bef264]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-6 flex justify-between items-center px-4">
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
            Ready to scale
          </p>
          <div className="h-[1px] flex-grow mx-8 bg-gray-100" />
          <p className="text-[10px] text-gray-400 font-mono">
            UTF-8 / Node v20.11.0
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terminal;