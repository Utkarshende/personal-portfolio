import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;