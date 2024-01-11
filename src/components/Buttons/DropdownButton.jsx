import React, { useEffect, useState } from "react";
import Spiner from "../Spiner/Spiner";
import loadingimg from "../../assets/loding.gif";

const DropdownButton = ({ data, img, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallPx, setSmallPx] = useState({ width: 640, height: 640 });
  const [mediumPx, setMeduimPx] = useState({ width: 1920, height: 640 });
  const [largePx, setLargePx] = useState({ width: 2400, height: 640 });
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("click", e => {
      if (e.target.role !== "menuitem" && e.target.type !== "button") {
        setIsOpen(false);
      }
      if (e.target.id === "share") {
        setIsOpen(false);
      }
    });
  }, []);
  useEffect(() => {
    const getPx = size => {
      if (size === "s") {
        const small = Math.ceil(data.height / (data.width / 640));
        setSmallPx({ width: 640, height: small });
      }
      if (size === "m") {
        const medium = Math.ceil(data.height / (data.width / 1920));
        setMeduimPx({ width: 1920, height: medium });
      }
      if (size === "l") {
        const large = Math.ceil(data.height / (data.width / 2400));
        setLargePx({ width: 2400, height: large });
      }
    };
    getPx("s");
    getPx("m");
    getPx("l");
  }, [data]);

  const [resizedImageUrl, setResizedImageUrl] = useState(null);
  const [targetHeight, setTargetHeight] = useState(null);
  const [targetWidth, setTargetWidth] = useState(null);
  let imageUrl = img;
  let downloadFileName = `${"wqdw"}.png`;

  useEffect(() => {
    const resizeImage = async () => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        const image = new Image();
        image.src = URL.createObjectURL(blob);

        image.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = targetWidth;
          canvas.height = targetHeight;

          ctx.drawImage(image, 0, 0, targetWidth, targetHeight);

          canvas.toBlob(resizedBlob => {
            const resizedUrl = URL.createObjectURL(resizedBlob);
            setResizedImageUrl(resizedUrl);
          });
        };
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    };
    targetHeight !== null && targetWidth && resizeImage();
  }, [imageUrl, targetWidth, targetHeight]);
  useEffect(() => {
    const handleDownload = () => {
      console.log("download");
      const link = document.createElement("a");
      link.href = resizedImageUrl;
      link.download = downloadFileName || "resized_image";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    };
    targetHeight !== null && handleDownload();
  }, [resizedImageUrl]);

  return (
    <>
      <div className="">
        <div className="relative inline-block text-left h-[2.3rem] ">
          <button
            id="download"
            onClick={toggleDropdown}
            type="button"
            className="border-l border-stone-100 inline-flex justify-center w-full items-center min-w-10 text-sm font-medium text-white rounded-e-md h-[2.3rem] bg-black"
          >
            <img
              id="downImg"
              role="menuitem"
              className="w-4 h- invert-[100%]"
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt=""
            />
          </button>

          {loading ? (
            <div className="absolute overflow-hidden right-0 mt-2 w-[12rem] z-50 duration-300 origin-top-right bg-white h-[5rem] flex items-center justify-center  rounded-md shadow-2xl">
              <img src={loadingimg} className="w-6 h-6" />
            </div>
          ) : (
            <div
              className={`${
                isOpen
                  ? " max-h-[10.4rem] border border-gray-200"
                  : " max-h-[0rem]"
              } absolute overflow-hidden right-0 mt-2 w-[12rem] z-50 duration-300 origin-top-right bg-white  rounded-md shadow-2xl`}
            >
              <div
                className="py-1 "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  href="#"
                  className="block text-left px-4 py-[8px] w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setLoading(true);
                    setTargetWidth(smallPx.width);
                    setTargetHeight(smallPx.height);
                  }}
                >
                  <span className="font-semibold text-[13px]">Small</span>{" "}
                  <span className="text-stone-500 text-[13px]">{`(${smallPx.width} x ${smallPx.height})`}</span>
                </button>
                <button
                  href="#"
                  className="block text-left px-4 py-[8px] text-sm w-full text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setLoading(true);
                    setTargetWidth(mediumPx.width);
                    setTargetHeight(mediumPx.height);
                  }}
                >
                  <span className="font-semibold text-[13px]">Medium</span>{" "}
                  <span className="text-stone-500 text-[13px]">{`(${mediumPx.width} x ${mediumPx.height})`}</span>
                </button>
                <button
                  href="#"
                  className="block text-left px-4 py-[8px] text-sm w-full text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setLoading(true);
                    setTargetWidth(largePx.width);
                    setTargetHeight(largePx.height);
                  }}
                >
                  <span className="font-semibold text-[13px]">Large</span>{" "}
                  <span className="text-stone-500 text-[13px]">{`(${largePx.width} x ${largePx.height})`}</span>
                </button>
                <button
                  href="#"
                  className="block  text-left px-4 py-4 border-t-2 border-stone-400/50 text-sm w-full text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setLoading(true);
                    setTargetWidth(data.width);
                    setTargetHeight(data.height);
                  }}
                >
                  <span className="font-semibold text-[13px]">
                    Original Size
                  </span>{" "}
                  <span className="text-stone-500 text-[13px]">{`(${data.width} x ${data.height})`}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownButton;
