import { motion } from "framer-motion";
type Color = "light" | "dark";
type Props = {
  text: string;
  color: Color;
};

const BlockTitle = ({ text, color }: Props) => {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`${
        color === "light" ? "text-white" : "text-gray-900"
      } font-serif text-lg lg:text-xl leading-[1.8rem] xs:leading-[2rem] sm:leading-[2.5rem] md:leading-[2.8rem] font-semibold`}
    >
      {text}
    </motion.h4>
  );
};

export default BlockTitle;
