import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Title from "../../components/typography/Title";
import UnderlineText from "../../components/typography/UnderlineText";
import TestimonialCard from "./TestimonialCard";

const datas = [
  {
    name: "Teri Tomaselli",
    position: "Payment Adjustment Coordinator",
    company: "Twitterlist",
    heading: "Aleifend luctus ultricies",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Roderich Dhennin",
    position: "Engineer III",
    company: "Trunyx",
    heading: "Arcu libero rutrum",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Garry Trower",
    position: "Senior Cost Accountant",
    company: "Browsedrive",
    heading: "Risus praesent lectus",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Aleksandr Steger",
    position: "Analyst Programmer",
    company: "Edgewire",
    heading: "Libero non",
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="px-5">
        <div className="container max-w-[1200px] flex flex-col md:flex-row gap-[3rem]">
          <div className="w-full md:w-1/2">
            <div className="my-5">
              <Title text={"What our clients say"} number="04." />
            </div>

            <UnderlineText
              text={
                "Don't just take our word for it...Read some of the reviews we've got from our satisfied customers"
              }
              color={"dark"}
            />
          </div>
          <div className="w-full">
            <Carousel
              autoPlay
              infiniteLoop
              showIndicators={false}
              showStatus={false}
            >
              {datas.map((data, index) => {
                return (
                  <>
                    <TestimonialCard
                      key={index}
                      name={data.name}
                      content={data.content}
                      heading={data.heading}
                      position={data.position}
                      company={data.company}
                    />
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
