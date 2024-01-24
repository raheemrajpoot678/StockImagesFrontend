import classes from "./hero.module.css";
import downlaod from "../../assets/arrowSmallDown.png";
import { saveAs } from "file-saver";
import ImagePreview from "../ImagePreview/ImagePreview";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spiner from "../Spiner/Spiner";
import { API_URL } from "../env";

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
      const res = await fetch(`${API_URL}getheroimg`);
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
        className={`flex flex-row flex-wrap items-center mx-auto rounded-xl min-h-[70vh] max-[600px]:min-h-[50vh] justify-between border border-stone-200 mt-8 p-5 shadow-sm w-[98%] z-20`}
      >
        <div className="basis-[50%] h-full max-[600px]:basis-[100%]">
          <h1 className="text-5xl font-semibold max-[600px]:text-[1.2rem]">
            Unknow.
          </h1>
          <p className="text-[#797979] my-5 leading-7 text-[1.1rem] max-[600px]:text-[.8rem] max-[600px]:leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Aliquid, assumenda! mollitia beatae non ad ea quos <br />
            odio, magni accusantium minus cum eligendi. <br />
            assumenda! mollitia beatae.
          </p>
          <p className="font-semibold mb-4  text-[#656565] max-[600px]:text-[.8rem]">
            Doloribus unde possimus deleniti iusto quas voluptas!
          </p>
          <div className="">
            <form
              action=""
              className="flex shadow-sm border border-stone-500/20 rounded-xl h-14 max-[600px]:h-10 overflow-hidden"
            >
              <input
                type="text"
                placeholder={`Type here to generate Images with AI`}
                className=" border-none text-[17px] max-[600px]:text-[12px]  outline-none px-4 h-14 max-[600px]:h-10 rounded-xl w-full"
              />
              <div className="flex items-center h-14 max-[600px]:h-10">
                <button className="px-5 bg-gradient-to-r h-[45px] hover:shadow-md mr-[7px] rounded-xl shadow-sm from-cyan-500 to-blue-500 text-[white] max-[600px]:text-[.85rem] max-[600px]:h-[30px] max-[600px]:px-3">
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
        <div className="flex items-center max-[750px]:mt-6 justify-between basis-[48%] max-[600px]:basis-[100%]">
          <Link to={`/images/${img1._id}`}>
            <div
              className={`${classes.mainBox} flex items-center justify-center w-[17rem] h-[17rem] max-[600px]:w-[10rem] max-[600px]:h-[10rem]`}
              onClick={e => {
                if (e.target.className !== "opacity-100") {
                  setShowimg(true);
                  setImg(img1.imgUrl);
                }
              }}
            >
              {img1.imgUrl ? (
                <img
                  className="w-[17rem] h-[17rem] rounded-md shadow-md max-[600px]:w-[10rem] max-[600px]:h-[10rem]"
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
              className={`${classes.mainBox} flex items-center justify-center w-[17rem] h-[17rem] max-[600px]:w-[10rem] max-[600px]:h-[10rem]`}
              onClick={e => {
                if (e.target.className !== "opacity-100") {
                  setShowimg(true);
                  setImg(img2.imgUrl);
                }
              }}
            >
              {img2.imgUrl ? (
                <img
                  className="w-[17rem] h-[17rem] rounded-md shadow-md max-[600px]:w-[10rem] max-[600px]:h-[10rem] "
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
