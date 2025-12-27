import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-[#bef264] selection:text-black">
      <Cursor />
      <Navbar />
      
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Marquee />
          <Projects />
          <Contact />
        </motion.main>
      </AnimatePresence>

      <footer className="py-10 text-center bg-white border-t border-gray-100">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          © 2025 Utkarsh Sharma — Built with MERN Stack
        </p>
      </footer>
    </div>
  );
}

export default App;