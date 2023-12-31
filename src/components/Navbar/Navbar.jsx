import { useState, useEffect } from "react";
import search from "../../assets/search.png";

const Navbar = ({ sticky }) => {
  // const [sticky, setSticky] = useState(false);

  return (
    <>
      <nav
        className={` ${
          sticky && "fixed bg-stone-50/80 text-black backdrop-blur-md shadow-xl"
        } shadow-sm border border-stone-600/5 w-full px-[4%] z-50  pb-[.5rem] duration-300`}
      >
        <div className="w-full flex  items-center">
          <div className="basis-[12%]">
            <h1 className="text-[1.8rem] font-bold">LOGO</h1>
          </div>
          <div className="basis-[88%]">
            <ul
              className={`${
                sticky ? "text-black" : "text-[#767676]"
              } flex items-center justify-between w-[90%] mx-auto text-[#767676] text-[0.8rem]`}
            >
              <li className="cursor-pointer">
                <a href="/">The Holidays</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Wallpapers</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Nature</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Achitecter & Interiors</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Experimental</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Film</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Animal</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Street Photography</a>
              </li>
              <li className="cursor-pointer">
                <a href="/">Birds</a>
              </li>
              <li className="cursor-pointer font-semibold">
                <a href="/">Premium +</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[.1rem]">
          <div className="basis-[10%]">
            <ul className="flex items-center justify-between text-[#767676] text-[.8rem]">
              {/* <li>
                <a href="">Premium+</a>
              </li>
              <li>
                <a href="">Stock</a>
              </li> */}
            </ul>
          </div>
          <div className="basis-[62%]">
            <form
              action=""
              className={` ${
                sticky && "border border-stone-300"
              } flex bg-gray-100 rounded-xl min-h-9`}
            >
              <input
                type="text"
                placeholder="Search heigh-resulation Images"
                className="bg-gray-100 border-none text-[.9rem] outline-none px-4 h-9 rounded-xl w-full"
              />
              <button className="px-5">
                <img src={search} className={`w-4 invert-[40%]`} alt="" />
              </button>
            </form>
          </div>

          <div className="basis-[20%]">
            <div className="flex justify-end">
              <button
                className={`${
                  sticky
                    ? "text-black border-stone-500"
                    : "text-[#767676] border-stone-300"
                } border py-1 px-5 text-[.8rem]  rounded-md`}
              >
                Upload a Photo
              </button>
              <button className="border border-stone-300 ml-2 pt-[.20rem] text-[.8rem] pb-[.25rem] px-5 text-[white] rounded-md bg-slate-900">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
