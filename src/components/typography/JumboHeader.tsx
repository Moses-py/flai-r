import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const JumboHeader = () => {
  const texts = ["Custom", "Creative", "Intuitive"];
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="tracking-wide text-2xl xs:text-3xl sm:text-4xl xl:text-5xl text-black opacity-[0.9] leading-[2.5rem] xs:leading-[3rem] sm:leading-[3.25rem] md:leading-[3.75rem] xl:leading-[4rem] font-sans font-semibold "
      >
        We provide{" "}
        <span className="text-primary">
          <Typewriter
            words={texts}
            loop={0}
            cursor
            cursorBlinking={true}
            typeSpeed={100}
            deleteSpeed={50}
          />
        </span>{" "}
        <br />
        web solutions, transforming your business ideas into captivating digital
        reality.
      </motion.h1>
    </>
  );
};

export default JumboHeader;
