import { motion } from 'framer-motion';

const StatusIndicator = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full select-none">
      {/* The Pulsing Dot */}
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </div>
      
      {/* The Text */}
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
        Available <span className="text-black">for work</span>
      </span>
    </div>
  );
};

export default StatusIndicator;