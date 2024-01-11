const Card = props => {
  const { title, img } = props;
  return (
    <>
      <div
        className={`w-[14rem] flex-col h-[8rem] rounded-md overflow-hidden shadow-lg cursor-pointer`}
      >
        <img
          className="w-full h-full hover:scale-[1.2] duration-300"
          src={img}
        />
      </div>
      <h1 className="text-center text-stone-900">{title}</h1>
    </>
  );
};

export default Card;
