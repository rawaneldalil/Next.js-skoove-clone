import Image from "next/image";
const SeventhSection = () => {
  const PressEntity = ({
    pressImagePath,
    testimony,
    height,
  }: {
    pressImagePath: string;
    testimony: string;
    height: string;
  }) => {
    return (
      <div className="flex flex-col items-center basis-[33%]">
        <img
          className="mb-9"
          src={pressImagePath}
          width={170}
          height={100}
          alt=""
        />
        <div className={`mt-${height}`}>
          <img
            className="float-left mr-5"
            src="/d-quotes.svg"
            width={43}
            height={43}
            alt=""
          />
          <p className="mt-3 leading-8 text-[16px]">{testimony}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10 mt-28 relative">
      <Image
        className="absolute -z-20 -top-40 -right-[55rem] max-md:hidden max-md:invisible page-pebble"
        src="/yellow-pebble-ft.svg"
        width={1000}
        height={500}
        alt=""
      />

      <h1 className="text-center text-[#103133] text-4xl font-semibold">
        In the press
      </h1>
      <div className="flex justify-start ml-28 gap-40">
        <PressEntity
          pressImagePath="/Forbes.svg"
          height="3"
          testimony="Unlike various other music-learning apps, Skoove’s virtual guide takes the learner through each lesson, and provides real-time feedback that listens to the player as they practice."
        />
        <PressEntity
          pressImagePath="/TheGuardian.svg"
          height="0"
          testimony="Eventually, notes, keys and names fall into place – I even play four suspiciously simple bars of Bach by sight! With both hands! Success!"
        />
      </div>
    </div>
  );
};

export default SeventhSection;
