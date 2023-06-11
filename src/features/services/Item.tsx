import BlockTitle from "../../components/typography/BlockTitle";
import NumberText from "../../components/typography/NumberText";
import ParagraphText from "../../components/typography/ParagraphText";

type Props = {
  heading: string;
  body: string;
  number: string;
};

const Item = ({ heading, body, number }: Props) => {
  return (
    <>
      <div className="my-5 flex flex-col gap-4">
        <NumberText number={number} />
        <BlockTitle text={heading} color={"light"} />
        <ParagraphText text={body} color="light" />
      </div>
    </>
  );
};

export default Item;
