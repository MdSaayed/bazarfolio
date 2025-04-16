import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const SkillBar = ({ label, percentage, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: false }); // <-- updated here
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${percentage}%` });
    } else {
      controls.start({ width: 0 }); // reset when out of view
    }
  }, [controls, inView, percentage]);

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex justify-between">
        <span className="font-semibold">{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1, delay }}
          className="bg-white h-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
