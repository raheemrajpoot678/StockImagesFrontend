import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import { responsive, categoryData } from "../../data";

const Category = () => {
  return (
    <div className=" overflow-hidden  w-[96%] mx-auto z-20">
      <Carousel
        draggable={true}
        responsive={responsive}
        centerMode={true}
        focusOnSelect={true}
        className="min-h-[15rem] my-10 overflow-hidden mt-16 z-20"
      >
        {categoryData.map((category) => {
          return (
            <Card
              title={category.title}
              key={category.title}
              img={category.img}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Category;
