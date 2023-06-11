import BlockTitle from "../../components/typography/BlockTitle";
import ParagraphText from "../../components/typography/ParagraphText";

type Props = {
  heading: string;
  body: string;
  icon: string;
};

const ServiceItem = ({ heading, body, icon }: Props) => {
  return (
    <>
      <div>
        <div className="my-5 flex gap-4 items-center">
          <img src={`/icons/${icon}.png`} />
          <BlockTitle text={heading} color={"dark"} />
        </div>
        <div className="my-5">
          <ParagraphText text={body} color="dark" />
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
