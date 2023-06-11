import Title from "../../components/typography/Title";
import FooterLinks from "./FooterLinks";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-[#151515] relative w-full h-full py-[10rem] px-5"
      >
        <div className="container max-w-[1200px] relative z-2">
          <div className="container">
            <Title number={"06."} text={"Get in touch with us"} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="container h-full w-full my-8 lg:pl-[9.6rem] flex flex-col gap-[2rem]"
            >
              <h1 className="text-gray-300 text-left text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] leading-[1.8rem] xs:leading-[2rem] md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.75rem] font-serif font-semibold">
                Have an idea or an epic project in mind? Talk to us. Let’s work
                together and make something great. Drop us a line at{" "}
                <a
                  href="mailto:dantereus1@gmail.com"
                  className="text-gray-400 underline"
                >
                  dantereus1@gmail.com
                </a>
              </h1>

              {/* <FooterForm /> */}
              <FooterLinks />
              <p className="text-primary font-sans">
                All rights reserved. 2023
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
