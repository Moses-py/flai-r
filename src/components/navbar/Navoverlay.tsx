import { useContext } from "react";
import { NavContext } from "../../context/NavOverlayContext";
import CloseIcon from "@mui/icons-material/Close";

const Navoverlay = () => {
  const { updateOpen } = useContext(NavContext);
  return (
    <>
      <div
        className="relative w-full h-full bg-[#050805] opacity-[0.98] text-white flex items-center justify-center gap-[3rem]"
        onClick={updateOpen}
      >
        <div className="absolute top-[2rem] right-[2rem] md:top-[3rem] md:right-[3rem]">
          <CloseIcon
            sx={{ fontSize: "3rem" }}
            onClick={updateOpen}
            className="cursor-pointer"
          />
        </div>
        {/* Background */}
        <div className="hidden md:block bg-[url('/navbg.webp')] h-full w-[40%] bg-no-repeat"></div>
        {/* Links */}
        <div className="w-full">
          <nav className="flex justify-center lg:justify-start">
            <ul className="flex flex-col gap-[2rem] justify-center">
              <li className="flex gap-3 items-center">
                <span className="font-number text-gray-700 text-xl">01</span>
                <a
                  href="#"
                  className="font-serif text-2xl md:text-3xl lg:text-4xl border-b-[0.5rem] hover:text-primary transition-all ease-in-out duration-500 border-primary"
                >
                  Home
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="font-number text-gray-700 text-xl">02</span>
                <a
                  href="#about"
                  className="font-serif text-2xl md:text-3xl lg:text-4xl border-b-[0.5rem] hover:text-primary transition-all ease-in-out duration-500 border-primary"
                >
                  About us
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="font-number text-gray-700 text-xl">03</span>
                <a
                  href="#services"
                  className="font-serif text-2xl md:text-3xl lg:text-4xl border-b-[0.5rem] hover:text-primary transition-all ease-in-out duration-500 border-primary"
                >
                  Services
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="font-number text-gray-700 text-xl">04</span>
                <a
                  href="#works"
                  className="font-serif text-2xl md:text-3xl lg:text-4xl border-b-[0.5rem] hover:text-primary transition-all ease-in-out duration-500 border-primary"
                >
                  Works
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="font-number text-gray-700 text-xl">05</span>
                <a
                  href="#blog"
                  className="font-serif text-2xl md:text-3xl lg:text-4xl border-b-[0.5rem] hover:text-primary transition-all ease-in-out duration-500 border-primary"
                >
                  Blog
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="font-number text-gray-700 text-xl">06</span>
                <a
                  href="#contact"
                  className="font-serif text-2xl md:text-3xl lg:text-4xl border-b-[0.5rem] hover:text-primary transition-all ease-in-out duration-500 border-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navoverlay;
