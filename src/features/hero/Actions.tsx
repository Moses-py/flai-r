import Social from "../../components/navbar/Social";
import { motion } from "framer-motion";
const Actions = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute right-[2rem] lg:right-[5rem] top-[5rem]"
      >
        <div className="relative">
          <Social />
        </div>
      </motion.div>
      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute right-[2rem]  lg:right-[5rem] bottom-[5rem]"
      >
        {/* line */}
        <hr className="w-[1px] bg-gray-800 h-[150px] ml-2" />
        {/* text */}
        <p
          className="text-xs uppercase text-gray-800 my-[2rem] font-serif font-medium animate-bounce"
          style={{ writingMode: "vertical-lr" }}
        >
          scroll
        </p>
      </motion.div>
    </>
  );
};
export default Actions;
