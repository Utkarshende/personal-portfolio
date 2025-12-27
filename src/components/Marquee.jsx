import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Marquee = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Moves the text horizontally based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  
  // Creates the dramatic tilt (skew) based on scroll position
  const skew = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const items = ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Framer", "Redux", "JWT"];

  return (
    <section ref={targetRef} className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <motion.div 
        style={{ x, skewX: skew }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {/* We repeat the items 3-4 times to ensure the line never breaks */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black/10 hover:text-black transition-colors duration-500 italic">
              {item}
            </span>
            {/* The Aziz-style separator dot */}
            <div className="w-4 h-4 rounded-full bg-[#bef264] border border-black/10" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Marquee;