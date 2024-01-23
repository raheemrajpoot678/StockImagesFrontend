import React, { useEffect, useState } from "react";

const Searchbar = ({ keywords }) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showKey, setShowKey] = useState([]);
  console.log(keywords);

  const getKeys = val => {
    setIsOpen(true);
    setShowKey([]);
    const d = [...keywords];
    console.log(d);
    const data = d.filter(key => {
      if (
        key.toLowerCase().startsWith(val.toLowerCase()) ||
        key.toLowerCase().includes(val.toLowerCase())
      ) {
        return key;
      }
    });
    setShowKey(data);
  };
  return (
    <>
      <div className="w-full relative">
        <div className="w-full flex items-center">
          <input
            className="bg-transparent h-8 w-full outline-none border-none px-3"
            placeholder="Type to search..."
            type="text"
            onChange={e => {
              setInput(e.target.value);
              getKeys(e.target.value);
            }}
            value={input}
          />
        </div>
        {showKey.length > 0 && input.length > 0 && isOpen && (
          <ul className="absolute top-10 left-0 w-full bg-gray-100 rounded-md  z-50">
            {showKey.map((key, i) => {
              if (key.toLowerCase().startsWith(input.toLowerCase()) && i < 10) {
                return (
                  <li
                    onClick={() => {
                      setInput(key);
                      setIsOpen(false);
                    }}
                    className=" py-2 hover:bg-stone-200 cursor-pointer px-3 text-stone-700"
                    key={key}
                  >
                    {key}
                  </li>
                );
              }
            })}
            <div>
              <h3
                className={`font-semibold px-3 my-1 text-[12px] border-stone-300`}
              >
                Related
              </h3>
              {showKey.map((key, i) => {
                if (
                  !key.toLowerCase().startsWith(input.toLowerCase()) &&
                  i < 10
                ) {
                  return (
                    <li
                      className=" py-2 hover:bg-stone-200 cursor-pointer px-3 text-stone-500"
                      key={key}
                      onClick={() => {
                        setInput(key);
                        setIsOpen(false);
                      }}
                    >
                      {key}
                    </li>
                  );
                }
              })}
            </div>
          </ul>
        )}
      </div>
    </>
  );
};

export default Searchbar;
