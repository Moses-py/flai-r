import SubHeading from "../../components/typography/SubHeading";
import Title from "../../components/typography/Title";
import UnderlineText from "../../components/typography/UnderlineText";
import Item from "./Item";

const Service = () => {
  return (
    <>
      <section
        id="services"
        className="relative bg-[url('/service-bg.webp')] w-full h-full py-[10rem] bg-cover bg-center bg-no-repeat bg-fixed px-5"
      >
        <div className="absolute inset-0 bg-black/70 -z-5" />
        <div className="container max-w-[1200px] relative z-2">
          <div className="container">
            <Title number={"02."} text={"What we do"} />
            <div className="container h-full w-full my-8 lg:pl-[9.6rem] flex flex-col justify-center items-center gap-[2rem]">
              <SubHeading
                text={
                  "Our services are tailored to your business needs to sponsor growth and exclusivity."
                }
                color={"light"}
              />
              <UnderlineText
                color="light"
                text={
                  "We offer a wide range of design and development services, most of which include the following: "
                }
              />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-[2rem]">
              <Item
                heading={"Custom Web Application Development"}
                body={
                  "Develop tailor-made web applications or web-based software solutions to meet specific business requirements."
                }
                number={"01."}
              />
              <Item
                heading={"Website Design and Development"}
                body={
                  "Create visually appealing and user-friendly websites from scratch or redesign existing websites to enhance their aesthetics and functionality."
                }
                number={"02."}
              />
              <Item
                heading={"Website Maintenance and Support"}
                body={
                  "We offer ongoing maintenance services, including regular updates, security checks, and backups to ensure websites are running smoothly and securely."
                }
                number={"03."}
              />
              <Item
                heading={"Search Engine Optimization (SEO)"}
                body={
                  "Optimize websites to improve their visibility in search engine results and increase organic traffic by incorporating relevant keywords, meta tags, and optimizing site structure."
                }
                number={"04."}
              />
              <Item
                heading={"Website Hosting and Domain Registration"}
                body={
                  "Assist clients in selecting reliable hosting providers and registering domain names for their websites."
                }
                number={"05."}
              />
              <Item
                heading={"Graphic Design"}
                body={
                  "Provide clients with custom graphic design services, including logo design, branding elements, icons, banners, and other visual assets for their websites."
                }
                number={"06."}
              />
              <Item
                heading={"Responsive Design"}
                body={
                  "Ensure that websites are optimized for different devices and screen sizes, allowing them to adapt and function well on desktops, laptops, tablets, and mobile phones."
                }
                number={"07."}
              />
              <Item
                heading={"Social Media Integration"}
                body={
                  "Integrate social media platforms into websites, allowing users to share content, follow social media accounts, and display social media feeds."
                }
                number={"08."}
              />
              <Item
                heading={"Website Analytics and Reporting"}
                body={
                  "Implement tracking tools like Google Analytics to provide clients with insights on website traffic, user behavior, and performance, allowing them to make data-driven decisions."
                }
                number={"09."}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
