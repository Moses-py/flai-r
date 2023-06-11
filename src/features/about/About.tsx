import SubHeading from "../../components/typography/SubHeading";
import Title from "../../components/typography/Title";
import UnderlineText from "../../components/typography/UnderlineText";
import ServiceItem from "./ServiceItem";

const About = () => {
  return (
    <>
      <section id="about" className="container py-[4rem] px-5 max-w-[1200px]">
        <div className="container py-[4rem]">
          <Title text="who we are" number="01." />
          <div className="container h-full w-full my-8 lg:pl-[9.6rem] flex flex-col justify-center items-center gap-[2rem]">
            <SubHeading
              text={
                "flai-r is a web design/development agency based in Lagos, Nigeria. We design digital experiences and beautiful brand aesthetics."
              }
              color={"dark"}
            />
            <UnderlineText
              color="dark"
              text={
                "We handle the grunt work required in hand-crafting custom, beautiful user interfaces and state-of-the-art logic systems tailored specifically to your business needs."
              }
            />
          </div>
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10 py-[2rem]">
            <ServiceItem
              icon="consult"
              heading="Consultation"
              body="We take the time to understand your business objectives, target audience, and industry landscape, providing expert recommendations and strategies tailored to your needs. Whether you're looking to revamp your existing website, enhance user experience, or explore new digital opportunities, we can point you in the right direction."
            />
            <ServiceItem
              icon="planning"
              heading="Planning"
              body="We work closely with you to understand your business objectives, target audience, and competition. We develop a detailed roadmap that aligns with your goals and ensures optimal user experience. From wireframes to sitemaps, we plan every aspect of your website to deliver a seamless and engaging digital journey for your visitors."
            />
            <ServiceItem
              icon="code"
              heading="Design & Development"
              body="We offer top-notch design and development services that bring your online vision to life. We create stunning websites that not only look visually appealing but also deliver seamless user experiences. With our design and development services, we help you establish a strong online presence and connect with your target audience effectively."
            />
            <ServiceItem
              icon="documentation"
              heading="Documentation"
              body="We provide meticulous documentation to ensure transparency, accountability, and effective communication throughout your web project. From project requirements to design guidelines and technical specifications, we document every aspect of your website development process to ensure that your project progresses smoothly."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
