import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  return (
    <main className="bg-white">
      <Cursor /> 
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;