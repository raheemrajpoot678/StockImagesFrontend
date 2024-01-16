import { useState } from "react";
import search from "../../assets/search.png";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = ({ sticky }) => {
  const [searchHistory, setSearchHistory] = useState(false);
  const categoriesData = [
    "travel",
    "wallpapers",
    "nature",
    "animals",
    "experimental",
    "Film",
    "architecter&interiors",
    "street-photography",
    "birds",
    "premium+",
    "premium+",
    "premium+",
    "premium+",
    "premium+",
    "premium+",
  ];
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //     slidesToSlide: 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //     slidesToSlide: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };
  const getFormatedCategory = category => {
    const arr = category.split("-").join(" ").split("&").join(" ");
    const str = arr[0].toUpperCase() + arr.slice(1);
    return str;
  };
  return (
    <>
      <nav
        className={`${classes.mainNav} ${
          sticky && "fixed bg-stone-50/80 text-black backdrop-blur-md shadow-xl"
        } shadow-sm border border-stone-600/5 w-full px-[4%] z-50 h-[6rem]  pb-[.5rem] duration-300`}
      >
        <div className="w-full flex  items-center">
          <div className={`${classes.logo} basis-[12%]`}>
            <h1 className="text-[1.8rem] text-stone-900 font-bold">LOGO</h1>
          </div>
          <div className="basis-[88%] overflow-hidden">
            <ul
              className={`${classes.navLinks} ${
                sticky ? "text-black" : "text-[#767676]"
              } flex items-center justify-between w-[90%] mx-auto text-[#767676] text-[0.8rem]`}
            >
              {categoriesData.map(category => {
                return (
                  <li className="cursor-pointer ">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "  duration-300 text-stone-900 font-semibold border-b-2 border-stone-300"
                          : "bg-red-500 font-thin"
                      }
                      to={`/${category}`}
                    >
                      {getFormatedCategory(category)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className={`${classes.searchSec} flex items-center justify-between mt-[.1rem]`}
        >
          <div className={`${classes.mainnavLinks} basis-[10%]`}>
            <ul className="flex items-center justify-between text-[#5f5f5f] text-[.8rem]">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "  duration-300 text-stone-900 font-semibold border-b-2 border-stone-300"
                      : "bg-red-500 font-thin"
                  }
                  to="/"
                >
                  Editorial
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "  duration-300 text-stone-900 font-semibold border-b-2 border-stone-300"
                      : "bg-red-500 font-thin"
                  }
                  to="/premium"
                >
                  Unknow+
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`${classes.searchBar} basis-[62%] w-full max-[600px]:basis-[95%]`}
          >
            <form
              action=""
              className={` ${
                sticky && "border border-stone-300"
              } flex relative bg-gray-100 rounded-xl min-h-9`}
            >
              <input
                onFocus={() => {
                  setSearchHistory(true);
                }}
                onBlur={() => {
                  setSearchHistory(false);
                }}
                type="text"
                placeholder="Search heigh-resulation Images"
                className="bg-gray-100 border-none text-[.9rem] outline-none px-4 h-9 rounded-xl w-full"
              />
              <button className="px-5">
                <img src={search} className={`w-4 invert-[40%]`} alt="" />
              </button>
              {searchHistory && (
                <div className="w-full min-h-[10rem] z-50 absolute top-11 left-0 bg-gray-50 backdrop-blur-md shadow-md border border-stone-300 py-2 px-3 rounded-md text-stone-500">
                  Pending...
                </div>
              )}
            </form>
          </div>
          <div className={`${classes.hamburger} hidden max-[600px]:block`}>
            <button>
              <RiMenu3Fill />
            </button>
          </div>
          <div className={`${classes.btns} basis-[20%]`}>
            <div className={`flex justify-end`}>
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
