import { motion } from "framer-motion";
type Color = "light" | "dark";
type Props = {
  text: string;
  color: Color;
};

const ParagraphText = ({ text, color }: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className={`${
        color === "light" ? "text-gray-300" : "text-black"
      } opacity-[0.9] font-serif text-left text-[1rem] leading-[2rem]`}
    >
      {text}
    </motion.p>
  );
};

export default ParagraphText;
