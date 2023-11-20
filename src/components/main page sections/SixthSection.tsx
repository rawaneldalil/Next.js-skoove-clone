const SixthSection = () => {
  return (
    <div className="relative flex justify-start gap-3 mt-20 text-[#103133]">
      <div className="flex flex-col basis-2/4">
        <h1 className="text-4xl font-semibold text-[#103133] mt-20 mb-10">
          Buy a new piano and save 50% on Skoove Premium
        </h1>
        <span className="mb-5">
          Need help choosing a new piano? Take a look at our top recommended
          keyboards, and save 50% on a year of Skoove Premium when you buy one.
        </span>
        <button className="primary-button w-1/2">Find out more</button>
      </div>

      <img
        className="absolute -z-10 -top-32 scale-y-[75%] -right-[310px]"
        src="/darkturqoise-pebble.svg"
        width={890}
        height={380}
        alt=""
      />
      <img
        className="absolute top-20 -right-14"
        src="/keyboard_bundle.png"
        width={650}
        height={300}
        alt=""
      />
    </div>
  );
};

export default SixthSection;
