import { motion } from "framer-motion";
type Props = {
  number: string;
};

const NumberText = ({ number }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-primary font-number text-3xl xl:text-4xl leading-[1.8rem] xs:leading-[2rem] sm:leading-[2.5rem] md:leading-[2.8rem] lg:leading-[3rem] xl:leading-[3.3rem] font-normal"
    >
      {number}
    </motion.h1>
  );
};

export default NumberText;
