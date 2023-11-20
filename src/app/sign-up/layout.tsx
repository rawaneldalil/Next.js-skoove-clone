import GetStartedHeader from "@/components/headers/GetStartedHeader";

const StartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col items-center relative text-[#00524f]">
      <img
        className=" absolute -z-10 -top-14 -left-14"
        src="/sign-up-yellow-pebble.svg"
        width={1213}
        alt=""
      />
      <img
        className=" absolute -z-10 bottom-0 -right-14 w-3/5"
        src="/sign-up-green-pebble.svg"
        alt=""
      />
      <img
        className=" absolute -z-10 bottom-0 -right-14 w-1/2"
        src="/authPebble.png"
        alt=""
      />
      <GetStartedHeader />

      <div className="flex flex-col items-center bg-white shadow-gray-600 shadow-lg w-[400px] h-auto mt-20 p-8">
        {children}
      </div>
    </div>
  );
};

export default StartLayout;
