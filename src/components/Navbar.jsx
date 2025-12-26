import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-tighter">
          UTKARSH<span className="text-blue-500">.DEV</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="bg-blue-600/10 text-blue-400 border border-blue-600/20 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;