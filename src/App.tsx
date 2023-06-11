import { useContext } from "react";
import Navoverlay from "./components/navbar/Navoverlay";
import Hero from "./features/hero/Hero";
import { NavContext } from "./context/NavOverlayContext";
import About from "./features/about/About";
import Service from "./features/services/Service";
import Works from "./features/works/Works";
import Testimonial from "./features/testimonials/Testimonial";
import Blog from "./features/blog/Blog";
import Footer from "./features/footer/Footer";

function App() {
  const { open } = useContext(NavContext);
  return (
    <main className="relative">
      <div
        className={`fixed z-20 ${
          open ? "w-[100vw] h-[100vh] scale-[100%]" : "w-0 h-0 scale-[0%]"
        } transition-all ease-in-out duration-500`}
        style={{ transformOrigin: "50%" }}
      >
        <Navoverlay />
      </div>

      <Hero />
      <About />
      <Service />
      <Works />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
