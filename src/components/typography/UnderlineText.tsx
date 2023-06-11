import { motion } from "framer-motion";
type Color = "light" | "dark";
type Props = {
  text: string;
  color?: Color;
};

const UnderlineText = ({ text, color }: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className={`font-sans text-md xs:text-lg sm:text-xl md:text-2xl xl:text-[1.7rem] leading-[1.8rem] xs:leading-[2rem] sm:leading-[2.5rem] md:leading-[2.8rem] lg:leading-[3rem] xl:leading-[3.3rem]  ${
        color === "light" ? "text-gray-400" : "text-black opacity-[0.75]"
      }  font-extralight`}
    >
      {text}
    </motion.p>
  );
};

export default UnderlineText;
