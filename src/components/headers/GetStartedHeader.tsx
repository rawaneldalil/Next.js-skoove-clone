"use client";

import { useState } from "react";
import LanguegeMenu from "./LanguegeMenu";

const GetStartedHeader = () => {
  const [usedLanguege, setUsedLanguege] = useState("English");
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <img
        className="absolute top-5"
        src="/tlogo-green.svg"
        alt=""
        width={140}
        height={40}
      />
      <div className="relative flex justify-end items-center w-2/3 mt-5 mx-auto">
        <div className="flex flex-col">
          <div
            className={`${
              clicked && "bg-[#00524f] lang-footer-span"
            } flex justify-between items-center text-[#00524f] stroke-[#00524f]  hover:text-[#649492] hover:stroke-[#649492] cursor-pointer px-4 py-2 relative`}
            onClick={() => setClicked(!clicked)}
          >
            <span className={`${clicked && "text-[#95E5B4]"} text-sm`}>
              {usedLanguege}
            </span>
            <svg
              className={`${clicked && "stroke-[#95E5B4]"} ${
                clicked ? "-rotate-90" : "rotate-90"
              }`}
              width={25}
              height={25}
              viewBox="0 0 30 30"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g fill="none">
                <polyline
                  strokeWidth="2"
                  strokeLinecap="round"
                  points="12 9 18 15 12 21"
                ></polyline>
              </g>
            </svg>
          </div>
          {clicked && <LanguegeMenu onClick={setUsedLanguege} />}
        </div>
      </div>
    </>
  );
};

export default GetStartedHeader;
