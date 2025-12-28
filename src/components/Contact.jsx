import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

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
      // REPLACE with your actual backend URL (e.g., https://your-api.render.com/api/contact)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
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
        throw new Error('Failed to save message');
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
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10"
          >
            Direct <br /> <span className="text-[#bef264]">Connect</span>
          </motion.h2>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-xs">
            // Storing data to MongoDB Cluster_01
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0f0f0f] p-8 md:p-12 rounded-3xl border border-gray-800"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-10 font-mono">
            <div className="space-y-2">
              <label className="text-[#bef264] text-[10px] uppercase tracking-widest">Name</label>
              <input name="from_name" type="text" className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all" required />
            </div>

            <div className="space-y-2">
              <label className="text-[#bef264] text-[10px] uppercase tracking-widest">Email</label>
              <input name="reply_to" type="email" className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all" required />
            </div>

            <div className="space-y-2">
              <label className="text-[#bef264] text-[10px] uppercase tracking-widest">Message</label>
              <textarea name="message" rows="4" className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all resize-none" required />
            </div>

            <button 
              type="submit"
              disabled={status === 'sending'}
              className={`w-full font-black py-5 rounded-full uppercase tracking-widest text-xs transition-all ${
                status === 'success' ? 'bg-green-600 text-white' : 
                status === 'error' ? 'bg-red-600 text-white' : 
                'bg-[#bef264] text-black hover:invert'
              }`}
            >
              {status === 'idle' && 'Send to Database'}
              {status === 'sending' && 'Processing...'}
              {status === 'success' && 'Message Saved!'}
              {status === 'error' && 'Database Error'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;