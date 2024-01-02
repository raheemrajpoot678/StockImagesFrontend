import React, { useState, useEffect } from "react";

const DownloadImages = ({ img, width, height, title }) => {
  const [resizedImageUrl, setResizedImageUrl] = useState("");
  let targetHeight = height;
  let targetWidth = width;
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
    resizeImage();
  }, [imageUrl, targetWidth, targetHeight]);
  useEffect(() => {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = resizedImageUrl;
      link.download = downloadFileName || "resized_image";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    handleDownload();
  }, []);

  return <div></div>;
};

export default DownloadImages;
