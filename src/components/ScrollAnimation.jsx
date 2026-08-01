import { motion } from "framer-motion";

function ScrollAnimation({ children, delay = 0 }) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.6,
        delay: delay
      }}

      viewport={{
        once: true
      }}
    >
      {children}
    </motion.div>
  );

}

export default ScrollAnimation;