type FeatureProps = {
  textLarge: string;
  textSmall: string;
  maskImage: string;
  maskImageSrc: string;
  bgPebbleSrc: string;
  bgPebbleWidth: string;
  bgPebbleHeight: string;
  top: string;
};

const ThirdSection = () => {
  const Feature = ({
    textLarge,
    textSmall,
    maskImage,
    maskImageSrc,
    bgPebbleSrc,
    bgPebbleWidth,
    bgPebbleHeight,
    top,
  }: FeatureProps) => {
    return (
      <div className="flex flex-col gap-1 basis-[22.1%]">
        <div className="flex justify-center mb-5 relative mx-auto w-2/3">
          <img
            className={`${top} absolute left-6`}
            src={bgPebbleSrc}
            width={bgPebbleWidth}
            height={bgPebbleHeight}
            alt=""
          />
          <img
            className={`pebble-mask ${maskImage}`}
            width={181.33}
            height={181.33}
            src={maskImageSrc}
            alt=""
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#103133] text-center">
          {textLarge}
        </h2>
        <h4 className="text-[#103133] text-center text-[18px]">{textSmall}</h4>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-7 items-center mt-28">
        <h1 className="text-4xl font-semibold text-[#103133] text-center">
          The most complete piano learning app
        </h1>
        <h4 className="text-[#103133] text-center w-3/4">
          Explore over 500 online piano lessons and courses covering the
          essential skills of piano playing. Whether you’re a beginner or
          advanced player, there’s magic to be unlocked.
        </h4>
      </div>
      <div className="skoove-app-features flex justify-between gap-2 items-center basis-1/4 w-full mt-10">
        <Feature
          textLarge="Play chart hits"
          textSmall="Play the songs you love, from John Legend to The Beatles, Adele, and more."
          maskImage="Ed-mask-img"
          maskImageSrc="/1-hits.jpg"
          bgPebbleSrc="/yellow-pebble-ft.svg"
          bgPebbleWidth="181.33"
          bgPebbleHeight="181.33"
          top="top-3"
        />
        <Feature
          textLarge="Learn the classics"
          textSmall="Play the piano greats including Beethoven, Mozart and Chopin."
          maskImage="Bethoven-mask-img"
          maskImageSrc="/beethoven.jpeg"
          bgPebbleSrc="/lightblue-pebble-ft.svg"
          bgPebbleWidth="181.33"
          bgPebbleHeight="181.33"
          top="top-5"
        />
        <Feature
          textLarge="Read notes"
          textSmall="Learn to read notation so that you can play new songs faster and with more freedom."
          maskImage="notes-mask-img"
          maskImageSrc="/notes.jpeg"
          bgPebbleSrc="/simon-pebble-ft.svg"
          bgPebbleWidth="181.33"
          bgPebbleHeight="181.33"
          top="top-0"
        />
        <Feature
          textLarge="Develop technique"
          textSmall="Improve your speed, endurance, expression, and help prevent injuries."
          maskImage="person-mask-img"
          maskImageSrc="/develop_technique.jpeg"
          bgPebbleSrc="/lighterblue-pebble-ft.svg"
          bgPebbleWidth="181.33"
          bgPebbleHeight="181.33"
          top="top-7"
        />
      </div>
    </>
  );
};

export default ThirdSection;
