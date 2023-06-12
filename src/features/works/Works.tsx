import SubHeading from "../../components/typography/SubHeading";
import Title from "../../components/typography/Title";
import Project from "./Project";
import { motion } from "framer-motion";

const data = [
  {
    name: "McMakler",
    link: "https://mcmakler.de/",
    image: "/mckmakler_shot.webp",
    category: "Real Estate",
  },
  {
    name: "Neutrix",
    link: "https://neutrix-app.vercel.app/",
    image: "/neutrix_shot.webp",
    category: "Tech Education",
  },
  {
    name: "Flai-r",
    link: "https://flai-r.vercel.app/",
    image: "/flair_shot.webp",
    category: "Web design agency",
  },
  {
    name: "Shoppy",
    link: "https://dashboard-3f516.web.app/",
    image: "/shoppy_shot.webp",
    category: "Ecommerce dashboard",
  },
  {
    name: "Ryva Groceries",
    link: "https://ryva.com.ng",
    image: "/ryva_shot.webp",
    category: "Grocery store",
  },
  {
    name: "iTalk",
    link: "https://italk-messenger.vercel.app",
    image: "/italk_shot.webp",
    category: "Realtime messaging app",
  },
  {
    name: "Moses",
    link: "https://moses-folio.web.app/",
    image: "/moses_shot.webp",
    category: "Developer portfolio",
  },
  {
    name: "Fotosearch",
    link: "https://moses-py.github.io/image-gallery/",
    image: "/gallery_shot.webp",
    category: "Image search platform",
  },
  {
    name: "Alisimbi",
    link: "https://moses-py.github.io/alisimbi/",
    image: "/alisimbi_shot.webp",
    category: "Agriculture",
  },
];

const Works = () => {
  return (
    <>
      <section id="works" className="relative w-full h-full pt-[10rem] px-5">
        <div className="container max-w-[1200px] relative z-2">
          <div className="container">
            <Title number={"03."} text={"Recent works"} />
            <div className="container h-full w-full my-8 lg:pl-[9.6rem] flex flex-col justify-center items-center gap-[2rem]">
              <SubHeading
                text={
                  "Here are some of our favorite projects we have done lately. Feel free to check them out."
                }
                color={"dark"}
              />
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 my-[8rem]">
          {data.map((work, index) => {
            return (
              <>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <Project
                    image={work.image}
                    link={work.link}
                    name={work.name}
                    category={work.category}
                  />
                </motion.div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Works;
