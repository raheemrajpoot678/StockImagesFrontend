import classes from "./hero.module.css";
import downlaod from "../../assets/arrowSmallDown.png";
import { saveAs } from "file-saver";
import ImagePreview from "../ImagePreview/ImagePreview";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spiner from "../Spiner/Spiner";
const Hero = () => {
  const [showimg, setShowimg] = useState(false);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img, setImg] = useState("");
  const downloadImg = url => {
    saveAs(url, "unknow.png");
  };

  useEffect(() => {
    const getrandomImg = async () => {
      const res = await fetch(
        "https://ill-erin-blackbuck-boot.cyclic.app/api/v1/getheroimg"
      );
      const data = await res.json();
      console.log(data.img1.imgUrl);
      setImg1(data.img1);
      setImg2(data.img2);
    };
    getrandomImg();
  }, []);
  return (
    <>
      {showimg && <ImagePreview img={img} />}
      <div
        className={` flex flex-row items-center mx-auto rounded-xl min-h-[70vh] justify-between border border-stone-200 mt-8 p-5 shadow-sm w-[98%] z-20`}
      >
        <div className="basis-[50%] h-full">
          <h1 className="text-5xl font-semibold">Unknow.</h1>
          <p className="text-[#797979] my-5 leading-7 text-[1.1rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Aliquid, assumenda! mollitia beatae non ad ea quos <br />
            odio, magni accusantium minus cum eligendi. <br />
            assumenda! mollitia beatae.
          </p>
          <p className="font-semibold mb-4  text-[#656565]">
            Doloribus unde possimus deleniti iusto quas voluptas!
          </p>
          <div className="">
            <form
              action=""
              className="flex shadow-sm border border-stone-500/20 rounded-xl min-h-14 overflow-hidden"
            >
              <input
                type="text"
                placeholder={`Type here to generate Images with AI`}
                className=" border-none text-[17px]  outline-none px-4 h-14 rounded-xl w-full"
              />
              <div className="flex items-center min-h-14">
                <button className="px-5 bg-gradient-to-r h-[45px] hover:shadow-md mr-[7px] rounded-xl shadow-sm from-cyan-500 to-blue-500 text-[white]">
                  Generate
                </button>
              </div>
            </form>
          </div>

          <p className="mt-1 text-center text-stone-400 text-[9px]">
            <span className="italic">powered by</span>{" "}
            <span className="font-semibold">DALL·E 3</span>
          </p>
        </div>
        <div className="flex items-center justify-between basis-[48%] ">
          <Link to={`/images/${img1._id}`}>
            <div
              className={`${classes.mainBox} flex items-center justify-center w-[17rem] h-[17rem]`}
              onClick={e => {
                if (e.target.className !== "opacity-100") {
                  setShowimg(true);
                  setImg(img1.imgUrl);
                }
              }}
            >
              {img1.imgUrl ? (
                <img
                  className="w-[17rem] h-[17rem] rounded-md shadow-md"
                  src={img1.imgUrl}
                />
              ) : (
                <div className="scale-[.6]">
                  <Spiner />
                </div>
              )}

              <div className={`${classes.overlay}`}>
                <div className="flex items-center"></div>
                <button
                  className="w-10 h-8 flex items-center justify-center shadow-xl bg-stone-900/90 backdrop-blur-xl rounded-md z-30"
                  onClick={() => downloadImg(img1.imgUrl)}
                >
                  <img
                    src={downlaod}
                    className="opacity-100  w-6 h-6 invert-[100%]"
                  />
                </button>
              </div>
            </div>
          </Link>
          <Link to={`/images/${img2._id}`}>
            <div
              className={`${classes.mainBox} flex items-center justify-center w-[17rem] h-[17rem]`}
              onClick={e => {
                if (e.target.className !== "opacity-100") {
                  setShowimg(true);
                  setImg(img2.imgUrl);
                }
              }}
            >
              {img2.imgUrl ? (
                <img
                  className="w-[17rem] h-[17rem] rounded-md shadow-md"
                  src={img2.imgUrl}
                />
              ) : (
                <div className="scale-[.6]">
                  <Spiner />
                </div>
              )}

              <div className={`${classes.overlay}`}>
                <div className="flex items-center"></div>
                <button
                  className="w-10 h-8 flex items-center justify-center shadow-xl bg-stone-900/90 backdrop-blur-xl rounded-md z-30"
                  onClick={() => downloadImg(img2.imgUrl)}
                >
                  <img
                    src={downlaod}
                    className="opacity-100  w-6 h-6 invert-[100%]"
                  />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
