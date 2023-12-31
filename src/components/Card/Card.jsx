import React from "react";

const Card = (props) => {
  const { title, img } = props;
  return (
    <div className="w-[90%] mr-4 cursor-pointer">
      <div className="w-[18rem] h-[15rem] border rounded-xl overflow-hidden border-stone-500/30 shadow-md">
        <img className="w-full h-full" src={img} />
      </div>
      <h2 className="text-center">{title}</h2>
    </div>
  );
};

export default Card;
