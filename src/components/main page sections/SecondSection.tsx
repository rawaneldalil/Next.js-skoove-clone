import React from "react";
import Image from "next/image";
import { Item } from "../Item";

const SecondSection = () => {
  return (
    <div className="learn-piano flex justify-between items-center mt-20 max-md:flex-col">
      <div className="learn-piano-visual-info basis-1/2 flex flex-col gap-5">
        <div>
          <Image
            className="absolute -z-10"
            src="/orange-pebble.svg"
            alt=""
            height={500}
            width={500}
          />
          <Image
            src="/second_section_image.webp"
            alt=""
            height={500}
            width={500}
          />
        </div>

        <div className="flex justify-around items-center">
          <div className="download-app flex flex-col gap-3">
            <Image
              src="/GooglePlayStore_EN.svg"
              alt=""
              height={100}
              width={200}
            />
            <Image src="/AppStore_EN.svg" alt="" height={100} width={200} />
          </div>
          <Image
            src="/landing_page_qr_code.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="learn-piano-textual-info basis-1/2 flex flex-col gap-10 text-[#103133]">
        <h1 className="text-4xl font-semibold text-[#103133]">
          Learn piano with step-by-step, online lessons
        </h1>
        <div className="flex flex-col text-[18px] list-none">
          <Item
            textBold="Follow a trusted method - "
            textNormal="Our learning approach is crafted by expert teachers and is already used by over 2 million learners."
          />
          <Item
            textBold="Enjoy bite-sized learning -"
            textNormal="Play lessons that are broken into digestible chunks, meaning rewarding, regular improvements."
          />
          <Item
            textBold="Get real-time feedback -"
            textNormal="Skoove listens to your playing and gives you feedback on what’s going well and what can be improved."
          />
          <Item
            textBold="Build your skills - "
            textNormal="music theory to note reading, the music fundamentals are seamlessly integrated into your learning."
          />
        </div>
        <button className="primary-button w-1/2">Start Now</button>
      </div>
    </div>
  );
};

export default SecondSection;
