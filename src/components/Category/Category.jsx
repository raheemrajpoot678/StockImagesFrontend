import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import { responsive, categoryData } from "../../data";

const Category = () => {
  return (
    <div className="mt-6 overflow-hidden  w-[97%] mx-auto z-20">
      <h2 className="text-stone-900/60 font-semibold">Categories</h2>
      <Carousel
        draggable={true}
        responsive={responsive}
        centerMode={true}
        focusOnSelect={true}
        className="mt-2 overflow-hidden z-20"
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
