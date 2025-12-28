import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form or handle success logic here
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Side: Professional Branding */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10"
          >
            Let's <br /> <span className="text-[#bef264]">Build</span>
          </motion.h2>
          
          <div className="font-mono text-gray-500 space-y-4">
            <p className="text-[#bef264] tracking-widest">// CONNECT_CHANNEL</p>
            <p className="hover:text-white transition-colors cursor-pointer">utkarsh.dev@email.com</p>
            <p>Nagpur, India — Onsite/Remote </p>
            <p className="text-xs uppercase tracking-[0.3em] pt-4 italic">Available for Hire 2024</p>
          </div>
        </div>

        {/* Right Side: Terminal-Style Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0f0f0f] p-8 md:p-12 rounded-2xl border border-gray-800 relative shadow-2xl"
        >
          {/* Decorative Terminal Header */}
          <div className="flex gap-2 mb-10 border-b border-gray-900 pb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <span className="text-[10px] font-mono text-gray-700 ml-4 uppercase tracking-widest">
              system_input_v2.0
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 font-mono">
            {/* Input: Name */}
            <div className="group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest opacity-70 group-focus-within:opacity-100">
                01. Identify_User
              </label>
              <input 
                type="text" 
                placeholder="What is your name?" 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm placeholder:text-gray-700"
                required 
              />
            </div>

            {/* Input: Email */}
            <div className="group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest opacity-70 group-focus-within:opacity-100">
                02. Return_Address
              </label>
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm placeholder:text-gray-700"
                required 
              />
            </div>

            {/* Input: Project Details */}
            <div className="group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest opacity-70 group-focus-within:opacity-100">
                03. Initialization_Data
              </label>
              <textarea 
                rows="4" 
                placeholder="Briefly describe your project..." 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm resize-none placeholder:text-gray-700"
                required 
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#bef264] text-black font-black py-5 rounded-full uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(190,242,100,0.3)] transition-all"
            >
              {status === 'idle' && 'Execute Transmission'}
              {status === 'sending' && 'Processing...'}
              {status === 'success' && '✔ Data Received'}
            </motion.button>
          </form>

          {/* Decorative Corner Badge */}
          <div className="absolute -top-3 -right-3 bg-white text-black text-[9px] font-black px-4 py-1 rounded rotate-6 shadow-xl uppercase">
            MERN Protocol
          </div>
        </motion.div>
      </div>
      
      {/* Subtle Footer Info */}
      <div className="mt-20 border-t border-gray-900 pt-8 flex justify-between items-center opacity-30 text-[10px] font-mono uppercase tracking-[0.5em]">
        <span>© 2024 Utkarsh Sharma</span>
        <span className="hidden md:block">Built with MERN & Framer Motion</span>
      </div>
    </section>
  );
};

export default Contact;