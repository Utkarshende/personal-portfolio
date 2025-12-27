import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-white">
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Marquee />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;