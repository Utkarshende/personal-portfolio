import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://personal-portfolio-backend-vzox.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000); // Reset success msg
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Let's Connect</h2>
        <p className="text-gray-400 mb-12 text-center">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold">Email</p>
                <p>your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-slate-800 text-gray-400 hover:text-white rounded-2xl border border-slate-700 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 bg-slate-800 text-gray-400 hover:text-white rounded-2xl border border-slate-700 transition-all">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              required
              rows="4"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            
            <button 
              type="submit"
              disabled={status.loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {status.loading ? 'Sending...' : <><Send size={18} /> Send Message</>}
            </button>

            {status.success && (
              <p className="text-emerald-400 text-sm text-center font-medium mt-2">
                ✅ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status.error && (
              <p className="text-red-400 text-sm text-center font-medium mt-2">
                ❌ {status.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;