import React, { useState } from "react";
import classes from "./Gallery.module.css";
import { mainData } from "../../data";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import downlaod from "../../assets/arrowSmallDown.png";
import loading from "../../assets/loding2.webp";

const Gallery = () => {
  const [direct, setDirect] = useState(true);
  const downloadImg = (url) => {
    saveAs(url, "unknow.png");
  };
  return (
    <>
      <div className={`${classes.gallery}`}>
        {mainData.map((item, i) => {
          return (
            <div key={i} className={classes.pic}>
              <div
                className={`${classes.mainBox}`}
                onClick={(e) => {
                  if (e.target.className === "opacity-100") {
                    setDirect(false);
                  }
                }}
              >
                <Link key={i} to={direct ? `/photos/${item.id}` : "/"}>
                  <img className="w-full max-h-[35rem]" src={item.imgSrc} />

                  <div className={`${classes.overlay}`}>
                    <div className="flex items-center">
                      <img
                        className="w-9 h-9 rounded-3xl border-2 border-stone-100/30"
                        src={item.imgSrc || loading}
                        alt="creater"
                      />
                      <p className="text-stone-100 ml-2">Unknow</p>
                    </div>
                    <button
                      className="w-7 h-7 bg-stone-100/60 backdrop-blur-xl rounded-md z-30"
                      onClick={(e) => {
                        downloadImg(item.imgSrc);
                      }}
                    >
                      <img src={downlaod} className="opacity-100" />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
