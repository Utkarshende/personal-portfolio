import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <main className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;