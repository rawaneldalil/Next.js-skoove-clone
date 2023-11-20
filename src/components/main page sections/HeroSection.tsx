const HeroSection = () => {
  return (
    <div className="w-full flex flex-col mt-[100px] max-md:items-center max-md:mt-0">
      <div className="start-now flex flex-col w-[48%] max-md:w-full max-md:items-center max-md:mt-14">
        <h1 className="text-4xl font-semibold text-[#103133] mb-6 max-md:text-center max-md:w-2/3">
          Piano lessons that work
        </h1>
        <span className="text-[#103133] mb-10 max-md:w-3/5 max-md:text-center max-md:order-last max-md:mt-5">
          Unlock the magic of piano with the most complete online piano learning
          method. Join the millions of piano lovers making daily progress with
          Skoove.
        </span>
        <button className="primary-button w-[45%] max-md:w-[35%]">
          Start Now
        </button>
      </div>
      <div className="partners mt-40 flex justify-between flex-wrap max-md:w-2/3 max-md:justify-center max-md:gap-6 max-md:mt-6">
        <img
          className=" max-md:w-[100px]"
          src="/Forbes.svg"
          alt="Forbes Logo"
          width={170}
          height={100}
        />
        <img
          className=" max-md:w-[100px]"
          src="/wired.svg"
          alt="Wired Logo"
          width={200}
          height={50}
        />
        <img
          className=" max-md:w-[100px]"
          src="/keyboards.svg"
          alt="Keyboards Logo"
          width={170}
          height={100}
        />
        <img
          className=" max-md:w-[100px]"
          src="/engadget.svg"
          alt="Engadget Logo"
          width={170}
          height={100}
        />
        <img
          className=" max-md:w-[100px]"
          src="/TheGuardian.svg"
          alt="The Guardian Logo"
          width={170}
          height={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
