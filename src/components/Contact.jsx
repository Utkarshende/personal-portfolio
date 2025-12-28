import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // These IDs come from your EmailJS Dashboard
    // Replace the placeholders with your actual keys
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        e.target.reset(); // Clears the form after sending
        setTimeout(() => setStatus('idle'), 5000); // Reset button after 5s
    }, (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Side: Identity */}
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
            <p className="hover:text-white transition-colors cursor-pointer text-lg">
              utkarsha.shende.dev@email.com
            </p>
            <p>Nagpur, India — IST (UTC+5:30)</p>
            <p className="text-xs uppercase tracking-[0.3em] pt-4 italic">Available for Hire 2024</p>
          </div>
        </div>

        {/* Right Side: Interactive Terminal Form */}
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
              contact_protocol_v2.0
            </span>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-10 font-mono">
            {/* Name Input */}
            <div className="group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest">
                01. Identify_User
              </label>
              <input 
                name="from_name" // Match this to your EmailJS template
                type="text" 
                placeholder="Your Full Name" 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm placeholder:text-gray-700"
                required 
              />
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest">
                02. Return_Address
              </label>
              <input 
                name="reply_to" // Match this to your EmailJS template
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm placeholder:text-gray-700"
                required 
              />
            </div>

            {/* Message Input */}
            <div className="group">
              <label className="text-[#bef264] text-[10px] block mb-2 uppercase tracking-widest">
                03. Initialization_Data
              </label>
              <textarea 
                name="message" // Match this to your EmailJS template
                rows="4" 
                placeholder="Tell me about your project..." 
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-[#bef264] transition-all text-sm resize-none placeholder:text-gray-700"
                required 
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              className={`w-full font-black py-5 rounded-full uppercase tracking-widest text-xs transition-all ${
                status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : status === 'error' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-[#bef264] text-black hover:shadow-[0_0_20px_rgba(190,242,100,0.3)]'
              }`}
            >
              {status === 'idle' && 'Execute Transmission'}
              {status === 'sending' && 'Processing...'}
              {status === 'success' && '✔ Transmission Successful'}
              {status === 'error' && '✘ Error: Try Again'}
            </motion.button>
          </form>

          <div className="absolute -top-3 -right-3 bg-white text-black text-[9px] font-black px-4 py-1 rounded rotate-6 shadow-xl uppercase">
            MERN Stack Dev
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 border-t border-gray-900 pt-8 flex justify-between items-center opacity-30 text-[10px] font-mono uppercase tracking-[0.5em]">
        <span>© 2024 Utkarsha Shende</span>
        <span className="hidden md:block">Nagpur, India</span>
      </div>
    </section>
  );
};

export default Contact;