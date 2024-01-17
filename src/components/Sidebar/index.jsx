import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SidebarBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsCatOpen(false);
  };
  const toggleCatDropdown = () => {
    setIsCatOpen(!isCatOpen);
  };

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
  ];
  const mainLinks = [
    "Premium+",
    "About Us",
    "Contect Us",
    "Login",
    "Upload a Photo",
  ];
  const getFormatedCategory = category => {
    const arr = category.split("-").join(" ").split("&").join(" ");
    const str = arr[0].toUpperCase() + arr.slice(1);
    return str;
  };

  useEffect(() => {
    // window.onclick = e => {
    //   if (e.target.getAttribute("fill") !== "currentColor") {
    //     setIsOpen(false);
    //     setIsCatOpen(false);
    //   }
    // };
    window.onscroll = e => {
      setIsOpen(false);
      setIsCatOpen(false);
    };
  }, []);
  return (
    <div className="relative inline-block text-left w-full">
      <button
        id="share"
        onClick={toggleDropdown}
        type="button"
        className=" w-[97%] h-[2.2rem] leading-[33px] px-4 rounded-md flex justify-center items-center"
      >
        {isOpen ? <IoClose /> : <RiMenu3Fill />}
      </button>
      <div
        className={`${
          isOpen
            ? " max-h-[100rem] border-b-[3px] border border-gray-300/60"
            : " max-h-[0rem]"
        } absolute overflow-hidden right-0 mt-2 w-[10rem] z-50 duration-500 origin-top-right bg-white  rounded-md shadow-xl`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            href="#"
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            onClick={toggleCatDropdown}
          >
            <div className="flex border-green-400 items-center justify-center">
              <div className=" border-gray-600">All Categories</div>
              <div className=" border-green-900 flex items-end h-full pt-1 ml-2 text-[1rem] justify-center">
                {isCatOpen ? (
                  <div className="text-[.8rem]">
                    <FaChevronDown />
                  </div>
                ) : (
                  <GrFormNext />
                )}
              </div>
            </div>
          </button>
          <div className="border-b border-gray-200/70 w-[85%] mx-auto "></div>

          <div
            className={`${
              isCatOpen ? "max-h-[18.4rem] " : "max-h-[0]"
            }  overflow-auto duration-300`}
          >
            {categoriesData.map(cat => {
              return (
                <div key={cat}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "  duration-300 text-stone-900 font-semibold border-b-2 border-stone-300"
                        : "bg-red-500 font-thin"
                    }
                    to={`/${cat}`}
                  >
                    <button
                      href="#"
                      className="block w-full px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => {
                        setIsOpen(false);
                        setIsCatOpen(false);
                      }}
                    >
                      {getFormatedCategory(cat)}
                    </button>
                  </NavLink>
                  <div className="border-b border-gray-200/70 w-[75%] mx-auto "></div>
                </div>
              );
            })}
          </div>
          <div
            className={`${isCatOpen ? "max-h-0" : "max-h-full"} duration-300`}
          >
            {mainLinks.map(link => {
              return (
                <div key={link}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "  duration-300 text-stone-900 font-semibold border-b-2 border-stone-300"
                        : "bg-red-500 font-thin"
                    }
                    to={`/${link}`}
                  >
                    <button
                      href="#"
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {link}
                    </button>
                  </NavLink>
                  <div className="border-b border-gray-200/70 w-[75%] mx-auto "></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarBtn;
