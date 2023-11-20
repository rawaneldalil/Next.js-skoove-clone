"use client";

import { useState } from "react";
import MainHeaderMenu from "./MainHeaderMenu";

const MainHeaderClickMenu = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div
        className={`${clicked &&'bg-[#00524f] w-[360px] pt-[9.5px] pl-2' } stroke-[#00524f] flex items-center text-[#00524f] hover:text-[#649492] hover:stroke-[#649492]`}
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? (
          <img src="/exit-icon.svg" width={49} height={49} alt="" />
        ) : (
          <svg
            enableBackground="new 0 0 60 60"
            width="60px"
            height="60px"
            version="1.1"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <line
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="3"
                strokeWidth="1.5"
                x1="25"
                x2="45"
                y1="22.5"
                y2="22.5"
              />
              <line
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="3"
                strokeWidth="1.5"
                x1="25"
                x2="45"
                y1="30.5"
                y2="30.5"
              />
              <line
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="3"
                strokeWidth="1.5"
                x1="25"
                x2="45"
                y1="38.5"
                y2="38.5"
              />
            </g>
          </svg>
        )}

        <span className={`font-medium text-[14px] ${clicked &&'text-white' }`}>Menu</span>
      </div>

      {clicked && <MainHeaderMenu />}
    </div>
  );
};

export default MainHeaderClickMenu;
