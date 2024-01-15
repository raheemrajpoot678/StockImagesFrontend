const Card = props => {
  const { title, img } = props;
  return (
    <>
      <div className="w-[14rem] h-[11rem] flex flex-col scale-[.9] overflow-hidden shadow-sm border border-gray-200 bg-white rounded-md">
        <div className="overflow-hidden basis-[85%] cursor-pointer">
          <img className="hover:scale-[1.2] duration-300" src={img} />
        </div>
        <div className="basis-[15%] py-1">
          <h1 className="text-center text-stone-900">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
