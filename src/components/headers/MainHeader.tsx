import Image from "next/image";

import MainHeaderClickMenu from "./MainHeaderClickMenu";

const MainHeader = () => {
  return (
    <header className="main-header flex justify-around items-center mt-1 w-[68%] relative">
      <MainHeaderClickMenu/>
      <Image
        className="absolute mx-auto z-11"
        src="/tlogo.svg"
        alt="Logo"
        width={150}
        height={50}
      />

      <button className="px-4 py-2 ml-auto z-11 text-white font-medium border-[2.5px] border-white cursor-default ">
        Log in
      </button>
    </header>
  );
};

export default MainHeader;
