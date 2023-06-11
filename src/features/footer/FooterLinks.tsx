import Title from "../../components/typography/Title";

const FooterLinks = () => {
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-gray-300 font-serif gap-[4rem] md:gap-[2rem] mt-[3rem]">
        {/* Address */}
        <div>
          <Title text={"where to find us"} />
          <p className="mt-6 leading-[2rem]">
            08 Okey eze street, Baruwa 100275 Lagos, Nigeria.
          </p>
        </div>
        {/* Socials */}
        <div>
          <Title text={"Follow us"} />
          <ul className="flex flex-col justify-center gap-5 mt-6">
            <li className="hover:text-primary">
              <a href="#contact">Facebook</a>
            </li>
            <li className="hover:text-primary">
              <a href="#contact">Twitter</a>
            </li>
            <li className="hover:text-primary">
              <a href="#contact">LinkedIn</a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <Title text={"contact us"} />
          <div className="flex flex-col justify-center gap-5 mt-6">
            <p>
              <a href="tel:09069885063">+234 906 988 5063</a>
            </p>
            <p>
              <a href="tel:09127012962">+234 912 701 2962</a>
            </p>
          </div>
        </div>
        {/* Links */}
        <div>
          <Title text={"useful links"} />
          <ul className="flex flex-col justify-center gap-5 mt-6">
            <li className="hover:text-primary">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-primary">
              <a href="#about">About us</a>
            </li>
            <li className="hover:text-primary">
              <a href="#services">Our services</a>
            </li>
            <li className="hover:text-primary">
              <a href="#works">Our works</a>
            </li>
            <li className="hover:text-primary">
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
