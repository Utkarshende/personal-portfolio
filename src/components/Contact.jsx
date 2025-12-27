import { useState } from 'react';
import { motion } from 'framer-motion';
import { useHoverSound } from '../hooks/useSound';

const Contact = () => {
  const playHover = useHoverSound();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });
    
    const response = await fetch('https://personal-portfolio-backend-vzox.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus({ loading: false, success: true });
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-black text-white rounded-t-[4rem]">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-[10vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-10">
            Let's <br /> <span className="text-[#bef264]">Work</span> <br /> Together
          </h2>
          <p className="text-gray-400 text-xl max-w-sm">
            I'm currently available for freelance work and full-time opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="group border-b border-gray-800 focus-within:border-[#bef264] transition-colors pb-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">Your Name</label>
            <input 
              type="text" required
              className="w-full bg-transparent outline-none text-2xl py-2 cursor-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="group border-b border-gray-800 focus-within:border-[#bef264] transition-colors pb-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">Your Email</label>
            <input 
              type="email" required
              className="w-full bg-transparent outline-none text-2xl py-2 cursor-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="group border-b border-gray-800 focus-within:border-[#bef264] transition-colors pb-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">Message</label>
            <textarea 
              rows="2" required
              className="w-full bg-transparent outline-none text-2xl py-2 cursor-none resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <motion.button 
            onMouseEnter={playHover}
            whileHover={{ scale: 1.05 }}
            className="w-full py-6 bg-[#bef264] text-black font-black uppercase tracking-widest rounded-full cursor-none"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </motion.button>
          
          {status.success && <p className="text-[#bef264] font-bold text-center">✅ Message Sent!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;