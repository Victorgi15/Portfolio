import { motion, useReducedMotion } from 'framer-motion';

const MotionReveal = ({ children, className, delay = 0 }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.6,
        ease: 'easeOut',
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionReveal;
