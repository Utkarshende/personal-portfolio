import { motion } from 'framer-motion';

const Marquee = () => {
  const words = ["REACT", "NODE.JS", "MONGODB", "EXPRESS", "TAILWIND", "REDUX"];

  return (
    <div className="py-12 bg-black overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex gap-10 pr-10"
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="text-6xl md:text-8xl font-black text-white uppercase italic">
            {word} <span className="text-[#bef264]">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;