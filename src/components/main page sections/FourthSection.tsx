import { Item } from "../Item";
import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="flex flex-col mt-28 relative">
      <Image
        className="absolute -z-10 -top-60 -right-[35rem] max-md:hidden max-md:invisible page-pebble"
        src="/simon-pebble-pg.svg"
        width={900}
        height={900}
        alt=""
      />
      <div className="flex justify-around items-center">
        <div className="basis-[50%]">
          <h1 className="text-4xl font-semibold text-[#103133] mb-10">
            Let Skoove guide you as you learn, play and progress
          </h1>
          <Item textNormal="Video tutorials to help you develop great technique and posture." />
          <Item textNormal="Skoove recognises the notes you play and gives real-time feedback." />
        </div>

        <div className="relative basis-[40%] flex justify-end">
          <img
            className="absolute left-3 scale-105"
            src="/purple-pebble.svg"
            width={400}
            height={400}
            alt=""
          />
          <img
            className="pebble-mask notes-mask-img"
            src="/trainer-piano.jpg"
            width={450}
            height={450}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="relative basis-[40%] flex justify-start">
          <img
            className="absolute top-0"
            src="/pink-pebble.svg"
            width={470}
            height={450}
            alt=""
          />
          <img
            className="pebble-mask feedback-mask-img"
            src="/trainer-feedback.jpg"
            width={450}
            height={430}
            alt=""
          />
        </div>
        <div className="basis-[50%]">
          <Item textNormal="A moving score shows you which notes to play and when." />
          <Item textNormal="Backing tracks let you play your favorite music with a full band." />
          <Item textNormal="Works on iOS and Android devices, plus all pianos and keyboards." />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
