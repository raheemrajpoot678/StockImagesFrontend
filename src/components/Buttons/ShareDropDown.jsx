// DropdownButton.jsx
import React, { useState, useEffect } from "react";
import share from "../../assets/share.png";

const ShareDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.role !== "menuitem" && e.target.type !== "button") {
        setIsOpen(false);
      }
      if (e.target.id === "download") {
        setIsOpen(false);
      }
      if (e.target.id === "downImg") {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <div className="relative inline-block text-left w-full">
      <button
        id="share"
        onClick={toggleDropdown}
        type="button"
        className="text-stone-600 border w-[97%] border-stone-300 h-[2.2rem] leading-[33px] px-4 rounded-md flex justify-center items-center"
      >
        <img
          className="w-5 mr-1 block invert-[40%] mt-[5px]"
          src={share}
          alt=""
        />
        Share
      </button>
      <div
        className={`${
          isOpen ? " max-h-[10.4rem] border border-gray-200" : " max-h-[0rem]"
        } absolute overflow-hidden right-0 mt-2 w-[12rem] z-50 duration-300 origin-top-right bg-white  rounded-md shadow-2xl`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 1
          </button>
          <button
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 2
          </button>
          <button
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareDropDown;
