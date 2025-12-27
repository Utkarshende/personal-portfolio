import { motion, useScroll, useTransform, useSkewValues } from 'framer-motion';
import { useRef } from 'react';

const Marquee = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // This makes the text speed up or tilt based on your scroll speed
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const skew = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const items = ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Framer", "Redux", "JWT"];

  return (
    <section ref={targetRef} className="py-10 bg-white overflow-hidden border-y border-black/5">
      <motion.div 
        style={{ x, skewX: skew }}
        className="flex whitespace-nowrap gap-10 items-center transition-all duration-300 ease-out"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black/20 hover:text-black transition-colors duration-500">
              {item}
            </span>
            <div className="w-3 h-3 rounded-full bg-[#bef264]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Marquee;