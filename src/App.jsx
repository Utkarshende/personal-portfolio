import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;