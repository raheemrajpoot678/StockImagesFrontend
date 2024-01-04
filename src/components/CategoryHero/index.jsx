import React from "react";

const CategoryHero = ({ category }) => {
  const img =
    "https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const getEditTitle = (title) => {
    return title
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <div
      className={`w-full bg-[url('${img}')] fixed bg-cover bg-center h-[70vh]`}
    >
      <div className=" w-full h-full bg-gradient-to-r from-stone-900/30 to-stone-900/30 text-stone-50 flex items-center p-8">
        <div>
          <h1 className="text-[3.5rem] font-bold">{getEditTitle(category)}</h1>
          <p className="text-[1.1rem]">
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
