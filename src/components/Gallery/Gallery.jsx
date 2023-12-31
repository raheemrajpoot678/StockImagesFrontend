import React, { useState } from "react";
import classes from "./Gallery.module.css";
import { mainData } from "../../data";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import downlaod from "../../assets/arrowSmallDown.png";
import loading from "../../assets/loding2.webp";

const Gallery = () => {
  const [showimg, setShowimg] = useState(false);
  const [img, setImg] = useState("");
  const downloadImg = (url) => {
    saveAs(url, "unknow.png");
  };
  return (
    <>
      <div className={`${classes.gallery}`}>
        {mainData.map((item, i) => {
          return (
            <Link key={i} to={`/photos/${item.id}`}>
              <div className={classes.pic}>
                <div
                  className={`${classes.mainBox}`}
                  onClick={(e) => {
                    if (e.target.className !== "opacity-100") {
                      setShowimg(true);
                      setImg(item.imgSrc);
                    }
                  }}
                >
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
                      className="w-7 h-7 bg-stone-100 backdrop-blur-xl rounded-md opacity-65 z-30"
                      onClick={() => downloadImg(item.imgSrc)}
                    >
                      <img src={downlaod} className="opacity-100" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
