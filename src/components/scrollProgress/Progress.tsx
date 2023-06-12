import { motion, useScroll, useSpring } from "framer-motion";

export const Progress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-[5px] bg-gradient-to-r from-[#F26522] to-red-600 origin-[0%] z-10"
      style={{ scaleX }}
    />
  );
};
