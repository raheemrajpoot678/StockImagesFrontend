import React, { useEffect, useState } from "react";
import heart from "../../assets/heart.png";
import date from "../../assets/calendar.png";
import location from "../../assets/location.png";
import { saveAs } from "file-saver";
import { useParams, useNavigate } from "react-router-dom";
import { imgCategories } from "../../data";
import FullImgPrev from "../FullImagePrev/FullImgPrev";
import expandImg from "../../assets/expand.png";
import classes from "./img.module.css";
import loading from "../../assets/loding2.webp";
import { Helmet } from "react-helmet";
import DropdownButton from "../Buttons/DropdownButton";

const ImagePreview = ({ data }) => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [fullimg, setFullimg] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const findImg = () => {
    const item = data.find((item) => item.id == id);
    setImg(item.imgSrc);
    setTitle(item.title);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    findImg();
    console.log(window.location.href);
  }, []);
  const tags = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "Perferendis",
    "excepturi",
    "officia ",
  ];

  const downloadImg = (url) => {
    saveAs(url, "unknow.png");
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="h-full w-full">
        {fullimg && <FullImgPrev img={img} setFullimg={setFullimg} />}
      </div>
      <div className={`bg-[url('${img}')] w-[100%] h-[105vh] z-[40]`}>
        <div
          id="overlay"
          onClick={(e) => {
            if (e.target.id === "overlay") {
              navigate(-1);
            }
          }}
          className="min-w-[100%] bg-gradient-to-r from-stone-600/30 to-stone-600/30 backdrop-blur-xl min-h-[100%] absolute top-0 right-0 z-40"
        >
          <button
            className="text-[1.2rem] font-bold ml-5 mt-1 text-stone-100"
            onClick={() => navigate(-1)}
          >
            ✕
          </button>
          <div className="bg-white w-[90%] flex justify-between p-8 mx-auto min-h-[100vh] rounded-md pb-20 shadow-xl">
            {/* Image  */}
            <div className="basis-[76%]">
              <div
                className={`${classes.mainimg} relative w-fit mx-auto duration-300`}
              >
                <div
                  onClick={() => setFullimg(true)}
                  className={`${classes.smimg} cursor-pointer`}
                >
                  <img
                    className="w-[2rem] h-[2rem] bg-slate-50/50 backdrop-blur-md p-2 rounded-lg absolute top-5 right-5 duration-300"
                    src={expandImg}
                  />
                </div>

                <img
                  onDoubleClick={() => setFullimg(true)}
                  className="max-h-[32rem] mx-auto"
                  src={img || loading}
                />
              </div>
            </div>
            {/* End Image  */}
            {/* Details  */}
            <div className="basis-[22%] flex flex-col justify-between ">
              <div>
                <div className="flex flex-row items-center">
                  <img
                    className="w-11 h-11 rounded-3xl border border-stone-500/30"
                    src={img}
                    alt="creater"
                  />
                  <div className="leading-[1.2]">
                    <h4 className="text-stone-600 ml-2 font-semibold">
                      Unknow
                    </h4>
                    <p className="text-stone-500 ml-2 text-[.8rem]">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-stone-500 text-[.7rem]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa animi a accusamus autem saepe praesentium molestiae
                    aut libero sint ipsum.
                  </p>
                </div>
                <div>
                  <div className="text-stone-500 flex items-center mt-6">
                    <img
                      src={location}
                      className="w-[9px] h-[9px] mr-2 opacity-[50%]"
                    />
                    <p className="text-[.7rem]">Seattle, WA, USA</p>
                  </div>
                  <div className="text-stone-500 items-center flex mt-1">
                    <img
                      src={date}
                      className="w-[9px] h-[9px] mr-2 opacity-[50%]"
                    />
                    <p className="text-[.7rem]">Published 5 days ago</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="font-semibold text-stone-600 mb-2 text-[14px]">
                    Categories
                  </h4>
                  <div>
                    {imgCategories.map((cat) => {
                      return (
                        <button
                          key={cat}
                          className="border-stone-300 py-[1px] bg-[#eee] text-[12px] text-[#555] px-2 rounded-md mr-1 mb-1"
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <button className="border border-stone-300  mr-2 px-4 rounded-md flex items-center justify-center">
                  <img src={heart} className="w-[.9rem] h-[0.9rem]" />
                </button>
                <div className="flex items-center justify-center w-[12rem]">
                  <button
                    onClick={() => downloadImg(img)}
                    className="bg-stone-900 text-white w-[100%] h-[2.3rem] px-4 rounded-s-md"
                  >
                    Download Free
                  </button>
                  <DropdownButton />
                </div>
              </div>
            </div>
            {/* End details  */}
          </div>
          <h1 className="text-xl text-stone-800">image 1</h1>
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
