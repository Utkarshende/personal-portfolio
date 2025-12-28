import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-black text-white flex flex-col justify-end p-10"
    >
      <div className="flex justify-between items-end">
        <h1 className="text-9xl font-black italic">{count}%</h1>
        <p className="text-xl font-bold uppercase tracking-widest">Utkarsh Shende © 2025</p>
      </div>
    </motion.div>
  );
};

export default Preloader;