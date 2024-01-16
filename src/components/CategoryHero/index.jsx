import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryHero = ({ category }) => {
  const [img, setImg] = useState("");
  const name = useParams().category;
  useEffect(() => {
    const getimg = async () => {
      const res = await fetch(
        `https://jade-fierce-katydid.cyclic.app/api/v1//getimgbycat/${name}`
      );
      const data = await res.json();
      setImg(data.img.imgUrl);
    };
    getimg();
  }, [category]);

  const getEditTitle = title => {
    return title
      .split("-")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div
      className={`w-full bg-[url('${img}')] bg-cover bg-center h-[70vh] max-[750px]:h-[40vh]`}
    >
      <div className=" w-full h-full bg-gradient-to-r from-stone-900/30 to-stone-900/30 text-stone-50 flex items-center p-8">
        <div>
          <h1 className="text-[3.5rem] font-bold max-[750px]:text-[2rem]">
            {getEditTitle(category)}
          </h1>
          <p className="text-[1.1rem] max-[750px]:text-[.9rem] max-[750px]:leading-2">
            When the streets around you become your canvas, what can you <br />
            discover? From quiet passages in charming towns to the hustle and{" "}
            <br />
            bustle of larger cities — this category examines street photography{" "}
            <br />
            in every form.
          </p>
          <button className="border border-gray-200 mt-4 bg-white/90 px-5 py-2 rounded-md backdrop-blur-lg text-black">
            Upload to{" "}
            <span className="font-semibold">{getEditTitle(category)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
