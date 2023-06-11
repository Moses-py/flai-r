import StarRateIcon from "@mui/icons-material/StarRate";
import ParagraphText from "../../components/typography/ParagraphText";

type Props = {
  name: string;
  content: string;
  heading: string;
  position: string;
  company: string;
};

const TestimonialCard = ({
  name,
  content,
  heading,
  position,
  company,
}: Props) => {
  return (
    <>
      <div className="p-10 rounded-md bg-gray-100 w-full">
        <div className="grid md:grid-cols-1 gap-8 w-full">
          <div className="flex gap-2">
            <StarRateIcon className="text-primary" />
            <StarRateIcon className="text-primary" />
            <StarRateIcon className="text-primary" />
            <StarRateIcon className="text-primary" />
            <StarRateIcon className="text-primary" />
          </div>
          <div className="w-full md:w-3/4">
            <p className="text-primary my-4 font-serif text-lg text-left lg:text-xl leading-[1.8rem] xs:leading-[2rem] sm:leading-[2.5rem] md:leading-[2.8rem] font-semibold">
              {heading}
            </p>

            <ParagraphText text={content} color={"dark"} />
            <p className="flex flex-col gap-3 text-left mt-4">
              <span className="font-serif font-medium">{name}</span>
              <span className="font-serif text-gray-500 text-xs">
                {position} at {company}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
