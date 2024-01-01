import React from "react";
import loading from "../../assets/loding2.webp";

const Spiner = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <img className="w-[7rem] h-[7rem]" src={loading} alt="" />
      </div>
    </>
  );
};

export default Spiner;
