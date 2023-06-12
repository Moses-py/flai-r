import { useEffect, useState } from "react";
import Title from "../../components/typography/Title";
import UnderlineText from "../../components/typography/UnderlineText";
import { motion } from "framer-motion";

const Blog = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[monthIndex];

    const formattedDate = `${day} ${month} ${year}`;
    setDate(formattedDate);
  }, []);
  return (
    <>
      <div id="blog" className="flex justify-center items-center font-serif">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <div className="container max-w-[1200px] relative z-2">
              <div className="container">
                <Title number={"05."} text={"Our blog"} />
                <div className="container h-full w-full my-8 lg:pl-[9.6rem] flex flex-col justify-center items-center gap-[2rem]">
                  <UnderlineText
                    text={
                      "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough"
                    }
                    color={"dark"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="sm:w-1/2 relative"
                >
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src="/1.jpg" className="w-full" alt="chair" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="sm:w-1/2 sm:mt-0 mt-4 relative"
                >
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src="/2.jpg" className="w-full" alt="wall design" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {date}
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="/3.webp"
                  alt="sitting place"
                  className="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  className="w-full mt-4 sm:hidden"
                  src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  alt="sitting place"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {date}
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      The Decorated Ways
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Dive into minimalism
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="/4.webp"
                  alt="sitting place"
                  className="w-full sm:block hidden"
                />
                <img
                  className="w-full sm:hidden"
                  src="/rect-29.webp"
                  alt="sitting place"
                />
              </motion.div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  viewport={{ once: true }}
                  className="relative w-full"
                >
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src="/5.webp" className="w-full" alt="chair" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  viewport={{ once: true }}
                  className="relative w-full sm:mt-0 mt-4"
                >
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img src="/6.webp" className="w-full" alt="wall design" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
