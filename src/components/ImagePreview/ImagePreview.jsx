import { useEffect, useState } from "react";
import heart from "../../assets/heart.png";
import date from "../../assets/calendar.png";
import location from "../../assets/location.png";
import { saveAs } from "file-saver";
import { useParams, useNavigate } from "react-router-dom";
import FullImgPrev from "../FullImagePrev/FullImgPrev";
import expandImg from "../../assets/expand.png";
import classes from "./img.module.css";
import loading from "../../assets/loader.gif";
import { Helmet } from "react-helmet";
import DropdownButton from "../Buttons/DropdownButton";
import ShareDropDown from "../Buttons/ShareDropDown";
import Spiner from "../Spiner/Spiner";

const ImagePreview = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("bcksdb");
  const [fullimg, setFullimg] = useState(false);
  const [currentImgData, setCurrentImgData] = useState({
    width: null,
    height: null,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const findImg = async () => {
    const res = await fetch(
      `https://jade-fierce-katydid.cyclic.app/api/v1//getimg/${id}`
    );
    const item = await res.json();
    console.log(item);
    setImg(item.img);
    setTitle(item.img.title);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    findImg();
    console.log(window.location.href);
  }, []);

  const downloadImg = url => {
    saveAs(url, "unknow.png");
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="h-full w-full">
        {fullimg && (
          <FullImgPrev img={img && img.imgUrl} setFullimg={setFullimg} />
        )}
      </div>
      <div
        className={`bg-[url('${
          img && img.imgUrl
        }')] bg-center w-[100%] min-h-[100vh] z-[40]`}
      >
        <div
          id="overlay"
          onClick={e => {
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
          <div className="bg-white w-[90%]  p-8 mx-auto min-h-[100vh] rounded-md pb-10 mb-10 shadow-xl">
            <div className="flex justify-between">
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
                  {img ? (
                    <img
                      onLoad={e => {
                        setCurrentImgData({
                          width: e.target.naturalWidth,
                          height: e.target.naturalHeight,
                        });
                      }}
                      onDoubleClick={() => setFullimg(true)}
                      className="max-h-[35rem] mx-auto"
                      src={img && img.imgUrl}
                    />
                  ) : (
                    <div className="h-[32rem] flex items-center justify-center">
                      <Spiner />
                    </div>
                  )}
                </div>
              </div>
              {/* End Image  */}
              {/* Details  */}
              <div className="basis-[22%] flex flex-col justify-between ">
                <div>
                  <div className="flex flex-row items-center">
                    <img
                      className="w-11 h-11 rounded-3xl border border-stone-500/30"
                      src={img && img.imgUrl}
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
                    <div className="mb-3">
                      {img &&
                        img.tags.map((cat, i) => {
                          return i <= 15 ? (
                            <button
                              key={cat}
                              className="border-stone-300 py-[1px] bg-[#eee] text-[12px] text-[#555] px-2 rounded-md mr-1 mb-1"
                            >
                              {cat}
                            </button>
                          ) : (
                            ""
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row">
                  <button className="border border-stone-300  mr-2 px-4 rounded-md flex items-center justify-center">
                    <img
                      src={heart}
                      className="w-[.9rem] h-[0.9rem] invert-[40%]"
                    />
                  </button>
                  <div className="flex items-center justify-center w-[12rem]">
                    <button
                      onClick={() => downloadImg(img.imgUrl)}
                      className=" bg-black text-stone-50 w-[100%] h-[2.3rem] leading-[33px] px-4 rounded-s-md"
                    >
                      Download Free
                    </button>
                    <DropdownButton
                      data={currentImgData}
                      img={img && img.imgUrl}
                      title={title}
                    />
                  </div>
                </div>
              </div>
              {/* End details  */}
            </div>
            <div className="mt-2 mx-auto w-full flex justify-between">
              <div className="basis-[76%] mt-2">
                <h1 className="text-xl font-semibold text-stone-700">
                  {title}
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum ducimus dignissimos distinctio assumenda maiores
                  voluptatibus asperiores. Reiciendis magnam, animi ex veritatis
                  nam facilis qui vero commodi architecto, quas sapiente quasi!
                </p>
              </div>
              <div className="basis-[22%] flex justify-between">
                <ShareDropDown />

                <button className=" text-stone-600 border border-stone-300 h-[2.2rem] leading-[30px] px-4 rounded-md flex justify-center items-center font-semibold text-2xl pb-[4px]">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
