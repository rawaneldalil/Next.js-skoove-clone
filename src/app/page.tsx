import Image from "next/image";
import FifthSection from "@/components/main page sections/FifthSection";
import FourthSection from "@/components/main page sections/FourthSection";
import MainHeader from "@/components/headers/MainHeader";
import SecondSection from "@/components/main page sections/SecondSection";
import SixthSection from "@/components/main page sections/SixthSection";
import ThirdSection from "@/components/main page sections/ThirdSection";
import SeventhSection from "@/components/main page sections/SeventhSection";
import EighthSection from "@/components/main page sections/EighthSection";
import FinalSection from "@/components/main page sections/FinalSection";
import HeroSection from "@/components/main page sections/HeroSection";

export default function Home() {
  return (
    <>
      <main className="main-page flex flex-col items-center w-full relative">
        <div className="absolute -z-10 pebble-mask-video -top-5 right-10 max-md:top-0 max-md:right-0">
          <video muted loop autoPlay playsInline>
            <source src="/website-homepage-main.mp4" type="video/mp4" />
          </video>
        </div>
        <Image
          className="absolute -z-20 top-[52%] -left-[7rem] page-pebble"
          src="/green-pebble-pg.svg"
          width={651}
          height={500}
          alt=""
        />

        <Image
          className="absolute -z-20 -top-[350px] right-[900px] rotate-[25deg] max-md:top-[150px] max-md:right-[550px]"
          src="/yellow-pebble-pg.svg"
          alt=""
          height={1030}
          width={1300}
        />

        <MainHeader />
        <div className="content-container flex flex-col mx-[16.5%] mt-16">
          <div className="w-[170px] h-[170px] bg-[#DC4756] flex justify-center items-center rounded-full -rotate-[20deg] max-md:w-[110px] max-md:h-[110px]">
            <p className="text-center text-[20px] text-white font-semibold max-md:text-[14px]">
              New chords course on iOS
            </p>
          </div>
          <HeroSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EighthSection />
          <FinalSection />
        </div>
      </main>
    </>
  );
}
