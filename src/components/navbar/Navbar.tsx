import { useContext } from "react";
import { NavContext } from "../../context/NavOverlayContext";
import { motion } from "framer-motion";
const Navbar = () => {
  const { updateOpen } = useContext(NavContext);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src="/logo.svg" alt="logo" className="w-[100px]" />
          {/* Hamburger */}
          <div
            className="flex flex-col gap-1 hover:gap-2 transition-all ease-linear duration-200 cursor-pointer"
            onClick={updateOpen}
          >
            <span className="w-[40px] h-[2px] bg-gray-800 items-center" />
            <span className="w-[40px] h-[2px] bg-gray-800 items-center" />
            <span className="w-[40px] h-[2px] bg-gray-800 items-center" />
          </div>
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;
