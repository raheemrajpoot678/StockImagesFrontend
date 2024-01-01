import React, { useEffect, useState } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.role !== "menuitem" && e.target.type !== "button") {
        // setIsOpen(false);
        setIsOpen(false);
        console.log(e.target);
      }
    });
  }, []);
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

          {isOpen && (
            <div className="absolute right-0 mt-2 w-[10rem] origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  href="#"
                  className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 1
                </button>
                <button
                  href="#"
                  className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 2
                </button>
                <button
                  href="#"
                  className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 3
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownButton;
