import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Marquee = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Layer 1: Moves Left, Skews Positive
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const skewRight = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Layer 2: Moves Right, Skews Negative
  const xRight = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const skewLeft = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const items = ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Framer", "Redux", "JWT"];

  return (
    <section ref={targetRef} className="py-20 bg-white overflow-hidden flex flex-col gap-4">
      
      {/* Top Row: Aggressive Tilt Right */}
      <motion.div 
        style={{ x: xLeft, skewX: skewRight }}
        className="flex whitespace-nowrap gap-8 items-center border-y border-black py-4 bg-black text-white"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-6xl md:text-8xl font-black uppercase tracking-[ -0.05em] italic">
            {item} <span className="text-[#bef264]">★</span>
          </span>
        ))}
      </motion.div>

      {/* Bottom Row: Aggressive Tilt Left (Opposite Direction) */}
      <motion.div 
        style={{ x: xRight, skewX: skewLeft }}
        className="flex whitespace-nowrap gap-8 items-center border-y border-black py-4"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-6xl md:text-8xl font-black uppercase tracking-[-0.05em] outline-text transition-all duration-700 hover:italic"
            style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>
            {item} <span className="text-black">★</span>
          </span>
        ))}
      </motion.div>

    </section>
  );
};

export default Marquee;