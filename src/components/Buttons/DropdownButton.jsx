import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const DropdownButton = ({ data, img, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallPx, setSmallPx] = useState({ width: 640, height: 640 });
  const [mediumPx, setMeduimPx] = useState({ width: 1920, height: 640 });
  const [largePx, setLargePx] = useState({ width: 2400, height: 640 });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.role !== "menuitem" && e.target.type !== "button") {
        setIsOpen(false);
      }
    });
  }, []);
  useEffect(() => {
    const getPx = (size) => {
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

  //  reasize and Download
  // const [resizedImageUrl, setResizedImageUrl] = useState("");
  // const [imageUrl, setImageUrl] = useState(img);
  // const [downloadFileName, setDownloadFileName] = useState("raheem.png");

  const [resizedImageUrl, setResizedImageUrl] = useState("");
  const [targetHeight, setTargetHeight] = useState(null);
  const [targetWidth, setTargetWidth] = useState(null);
  let imageUrl = img;
  let downloadFileName = `${title}.png`;

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

          canvas.toBlob((resizedBlob) => {
            const resizedUrl = URL.createObjectURL(resizedBlob);
            setResizedImageUrl(resizedUrl);
          });
        };
      } catch (error) {
        console.error("Error resizing image:", error);
      }
    };
    targetHeight && targetWidth && resizeImage();
  }, [imageUrl, targetWidth, targetHeight]);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resizedImageUrl;
    link.download = downloadFileName || "resized_image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="">
        <div className="relative inline-block text-left h-[2.3rem]">
          <button
            onClick={toggleDropdown}
            type="button"
            className="border border-stone-400 inline-flex justify-center h-[2.3rem] w-full items-center min-w-10 text-sm font-medium text-white rounded-e-md "
          >
            <img
              role="menuitem"
              className="w-4 h-4"
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt=""
            />
          </button>

          <div
            className={`${
              isOpen
                ? " max-h-[10.4rem] border border-gray-200"
                : " max-h-[0rem]"
            } absolute overflow-hidden right-0 mt-2 w-[12rem]  duration-300 origin-top-right bg-white  rounded-md shadow-2xl`}
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
                  setTargetWidth(smallPx.width);
                  setTargetHeight(smallPx.height);
                  targetHeight && targetWidth == 640 && handleDownload();
                }}
                onMouseOver={() => {
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
                  setTargetWidth(mediumPx.width);
                  setTargetHeight(mediumPx.height);
                  targetHeight && targetWidth == 1920 && handleDownload();
                }}
                onMouseOver={() => {
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
                  setTargetWidth(largePx.width);
                  setTargetHeight(largePx.height);
                  targetHeight && targetWidth == 2400 && handleDownload();
                }}
                onMouseOver={() => {
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
                  setTargetWidth(data.width);
                  setTargetHeight(data.height);
                  targetHeight && targetWidth == data.width && handleDownload();
                }}
                onMouseOver={() => {
                  setTargetWidth(data.width);
                  setTargetHeight(data.height);
                }}
              >
                <span className="font-semibold text-[13px]">Original Size</span>{" "}
                <span className="text-stone-500 text-[13px]">{`(${data.width} x ${data.height})`}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownButton;
