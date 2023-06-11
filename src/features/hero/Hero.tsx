import Navbar from "../../components/navbar/Navbar";
import JumboHeader from "../../components/typography/JumboHeader";
import Actions from "./Actions";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative h-[calc(100vh)] w-full bg-[url('/flairbg_mobile.svg')] md:bg-[url('/flairbg_screen.svg')] bg-cover bg-center bg-fixed bg-no-repeat p-[2rem]"
      >
        <div className="container mx-auto p-5">
          {/* Navbar */}
          <Navbar />
        </div>
        {/* Header text */}
        <div className="container w-full mx-auto py-5 h-[calc(100vh - 1rem)]">
          <div className="w-full lg:w-[55%] text-center md:text-left translate-y-[40%]">
            <JumboHeader />

            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <button className="border-[0.2rem] text-primary border-primary px-[1rem] py-[0.5rem] xs:px-[1.5rem] xs:py-[1rem] sm:px-[2rem] sm:py-[1.25rem] md:px-[3rem] md:py-[1.5rem] my-[3rem] bg-white hover:bg-primary hover:text-white hover:border-white transition-all ease-in-out duration-300">
                <p className="flex justify-between items-center gap-[1rem]">
                  <p className="uppercase text-xs font-serif flex items-center gap-2 font-semibold tracking-[0.2em]">
                    More about us
                  </p>
                  <ArrowForwardIosIcon className="text-primary" />
                </p>
              </button>
            </motion.a>
          </div>
        </div>

        <Actions />
      </section>
    </>
  );
};

export default Hero;
