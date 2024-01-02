import { useEffect } from "react";

const FullImgPrev = ({ img, setFullimg }) => {
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      e.key === "Escape" && setFullimg(false);
    });
  }, []);
  return (
    <>
      <div className="w-full h-auto z-[300] absolute top-0 left-0">
        <img
          onDoubleClick={() => setFullimg(false)}
          className="w-full h-auto z-[100]"
          src={img}
        />
      </div>
    </>
  );
};
export default FullImgPrev;
