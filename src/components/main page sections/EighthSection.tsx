import Image from "next/image";

type UserTestimonyProps = {
  userImagePath: string;
  userImagePebbleClass: string;
  bgPebblePath: string;
  bgPebbleClassName: string;
  testimony: string;
  nameAndCity: string;
};

const EighthSection = () => {
  const FiveStars = () => {
    return (
      <div className="flex justify-center mb-5 mt-3">
        <Image src="/star.svg" alt="Star" width={28} height={28} />
        <Image src="/star.svg" alt="Star" width={28} height={28} />
        <Image src="/star.svg" alt="Star" width={28} height={28} />
        <Image src="/star.svg" alt="Star" width={28} height={28} />
        <Image src="/star.svg" alt="Star" width={28} height={28} />
      </div>
    );
  };
  const UserTestimony = ({
    userImagePath,
    userImagePebbleClass,
    bgPebblePath,
    bgPebbleClassName,
    testimony,
    nameAndCity,
  }: UserTestimonyProps) => {
    return (
      <div className="flex flex-col items-center text-[#103133] basis-1/4 relative">
        <Image
          className={`absolute -z-10 mx-auto right-0 ${bgPebbleClassName}`}
          src={bgPebblePath}
          alt=""
          width={250}
          height={230}
        />
        <Image
          className={`pebble-mask ${userImagePebbleClass}`}
          src={userImagePath}
          alt=""
          width={250}
          height={250}
        />
        <span className="text-center text-xl font-semibold mt-5">
          {nameAndCity}
        </span>
        <FiveStars />
        <div>
          <img
            className="float-left mr-5"
            src="/d-quotes.svg"
            width={43}
            height={43}
            alt=""
          />
          <p className="mt-3 leading-8 text-[16px] italic">{testimony}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-20 left flex flex-col  text-[#103133]">
      <h1 className="text-center text-4xl font-semibold mb-10">
        Our users love Skoove
      </h1>
      <span className="text-center mb-5">
        Hear directly from our users how Skoove is helping them fall in love
        with the piano.
      </span>

      <div className="flex justify-around gap-10">
        <UserTestimony
          userImagePath="/Giulia.jpeg"
          userImagePebbleClass="notes-mask-img"
          bgPebblePath="/yellow-pebble-ft.svg"
          bgPebbleClassName="left-10 top-5"
          testimony="I recently discovered Skoove and am really happy with my progress, learning a few bars to playing 'Lean on Me' in just a couple of days. I didn’t realise how musical I could be ;-)."
          nameAndCity="Giulia - Pisa"
        />

        <UserTestimony
          userImagePath="/Thorsten.jpeg"
          userImagePebbleClass="thorsten-mask-img"
          bgPebblePath="/thorsten-bg-pebble.svg"
          bgPebbleClassName="left-10  top-7"
          testimony="I liked the fact that music theory is taught in an understandable way. It’s very intuitive and I can see myself learning to read music in the near future - something I’d never imagined being able to do."
          nameAndCity="Thorsten - Cologne"
        />

        <UserTestimony
          userImagePath="/eugene-e.jpeg"
          userImagePebbleClass="Bethoven-mask-img"
          bgPebblePath="/1.svg"
          bgPebbleClassName="left-10"
          testimony="Amazing service, seriously! I was about to hire a home tutor to teach me piano, but this feels quicker, easier and more flexible."
          nameAndCity="Eugene - Tokyo"
        />
      </div>
    </div>
  );
};

export default EighthSection;
