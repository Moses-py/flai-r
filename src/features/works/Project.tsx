import BlockTitle from "../../components/typography/BlockTitle";

type Props = {
  image: string;
  link: string;
  name: string;
  category: string;
};

const Project = ({ image, link, name, category }: Props) => {
  return (
    <>
      <div className="h-auto w-full relative group ">
        <img src={image} alt={name} className="w-full h-full object-fill" />
        <div className="absolute inset-0 bg-transparent w-full h-full group-hover:bg-black group-hover:opacity-90 transition-all ease-in-out duration-500 p-5 grid place-items-center">
          <div className="relative transition-all ease-linear duration-300 flex-col items-center justify-center gap-5 hidden group-hover:flex ">
            <div className=" flex flex-col items-center justify-center gap-5">
              <BlockTitle text={name} color={"light"} />
              <span className="text-sm text-gray-400 text-center font-serif">
                {category}
              </span>
            </div>
            <div className="">
              <button className="bg-white text-black px-4 py-2 rounded-md">
                <a href={link} target="" className="font-serif">
                  view project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
