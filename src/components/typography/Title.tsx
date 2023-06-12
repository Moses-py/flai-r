import { motion } from "framer-motion";
type Props = {
  number?: string;
  text: string;
};

const Title = ({ number, text }: Props) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-primary uppercase text-sm font-serif flex items-center gap-2 font-semibold tracking-[0.2em]"
    >
      {number && <span>{number}</span>}
      <span>
        <hr className="w-[30px] bg-primary h-[2px]" />
      </span>
      <span>{text}</span>
    </motion.h3>
  );
};

export default Title;
