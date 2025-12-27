import { motion } from 'framer-motion';

const Marquee = () => {
  const items = ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Framer"];

  return (
    <div className="py-20 bg-black overflow-hidden flex whitespace-nowrap border-y border-black">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-12 pr-12"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter">
            {item} <span className="text-[#bef264]">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;