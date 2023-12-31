const FullImgPrev = ({ img, setFullimg }) => {
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
