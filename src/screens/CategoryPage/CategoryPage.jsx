import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryHero from "../../components/CategoryHero";
import classes from "./index.module.css";
import CategoryGallery from "../../components/CategoryGallery";

const CategoryPage = () => {
  const { category } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  return (
    <>
      <div className={`${classes.mainBox}`}>
        <div className="h-[6rem] z-50">
          <div className="w-full fixed bg-white">
            <Navbar />
          </div>
        </div>
        <div className="">
          <CategoryHero category={category} />
        </div>
        <div className="min-h-screen bg-white z-40">
          <CategoryGallery />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
