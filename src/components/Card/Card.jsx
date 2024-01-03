import React from "react";

const Card = (props) => {
  const { title, img } = props;
  return (
    <>
      <div
        className={`w-[14rem] relative flex-col h-[9rem] rounded-md overflow-hidden shadow-lg cursor-pointer`}
      >
        <img
          className="w-full h-full hover:scale-[1.2] duration-300"
          src={img}
        />
        <div className="bg-stone-900/30 backdrop-blur-md flex items-center justify-center h-[1.5rem] absolute bottom-3 leading-[25px] right-0 w-full">
          <h1 className="text-center text-stone-50">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
