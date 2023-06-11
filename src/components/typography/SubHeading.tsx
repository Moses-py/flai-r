import { motion } from "framer-motion";
type Color = "light" | "dark";
type Props = {
  text: string;
  color: Color;
};

const SubHeading = ({ text, color }: Props) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={` ${
        color === "light" ? "text-white" : "text-gray-900"
      } text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] leading-[1.8rem] xs:leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.75rem] font-serif font-semibold`}
    >
      {text}
    </motion.h3>
  );
};

export default SubHeading;
