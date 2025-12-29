import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get('from_name'),
      reply_to: formData.get('reply_to'),
      message: formData.get('message'),
    };

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-black text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
        
      
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10"
          >
            Let's <br /> <span className="text-[#bef264]">Build</span>
          </motion.h2>
          
          <div className="font-mono text-gray-500 space-y-4">
            <p className="text-[#bef264] tracking-widest">// CONNECT_PROTOCOL</p>
            <p className="text-lg text-gray-300">utkarshpd1403@gmail.com</p>
            <p className="text-[10px] uppercase tracking-[0.4em]">Nagpur, India — MCA 2024</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0f0f0f] p-8 md:p-12 rounded-3xl border border-gray-800 relative shadow-2xl"
        >
          <div className="flex gap-2 mb-12 border-b border-gray-900 pb-6 font-mono text-[10px] text-gray-700 uppercase tracking-widest">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            <span className="ml-4">v2.0_stable_connection</span>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-10 font-mono">
            <div className="relative group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest opacity-60 group-focus-within:opacity-100 transition-opacity">01. Identity</label>
              <input 
                name="from_name" 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm"
                required 
              />
            </div>

            <div className="relative group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest opacity-60 group-focus-within:opacity-100 transition-opacity">02. Return_Path</label>
              <input 
                name="reply_to" 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm"
                required 
              />
            </div>

            <div className="relative group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest opacity-60 group-focus-within:opacity-100 transition-opacity">03. Payload</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Your Message..." 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm resize-none"
                required 
              />
            </div>

            <div className="flex flex-col gap-4">
              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full font-black py-5 rounded-xl uppercase tracking-[0.3em] text-xs transition-all duration-500 ${
                  status === 'success' ? 'bg-green-600 text-white' : 
                  status === 'error' ? 'bg-red-600 text-white' : 
                  'bg-[#bef264] text-black hover:shadow-[0_0_30px_rgba(190,242,100,0.3)] hover:-translate-y-1'
                }`}
              >
                {status === 'idle' && 'Execute Transmission'}
                {status === 'sending' && 'Transmitting...'}
                {status === 'success' && 'Success: Received'}
                {status === 'error' && 'Error: System Failure'}
              </button>

              <a 
                href="/Utkarsha_Shende_Resume.pdf" 
                download="Utkarsha_Shende_Resume.pdf"
                className="w-full block text-center font-mono py-4 rounded-xl uppercase tracking-[0.2em] text-[10px] border border-gray-800 text-gray-500 hover:border-[#bef264] hover:text-[#bef264] transition-all cursor-pointer"
              >
                [ Download_Static_Resume.pdf ]
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;