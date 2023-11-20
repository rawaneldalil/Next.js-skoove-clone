import Image from "next/image";
const FifthSection = () => {
  const CheckRow = ({
    text,
    checkImgPath,
  }: {
    text: string;
    checkImgPath: string;
  }) => {
    return (
      <div className="flex justify-between items-center">
        <span>{text}</span>
        <img src={checkImgPath} width="30" height="30" alt="" />
      </div>
    );
  };

  const FirstRow = ({
    text,
    lessonsNumber,
  }: {
    text: string;
    lessonsNumber: string;
  }) => {
    return (
      <div className="flex justify-between">
        <span>{text}</span>
        <span className="text-2xl text-center font-semibold">
          {lessonsNumber}
        </span>
      </div>
    );
  };

  const RowsOneToThree = ({ check }: { check: string }) => {
    return (
      <>
        <CheckRow
          text="Monthly updated lessons and songs"
          checkImgPath={check}
        />
        <CheckRow
          text="One-on-one support from the Skoove music instructors"
          checkImgPath={check}
        />
        <CheckRow
          text="Structured, step-by-step courses"
          checkImgPath={check}
        />
      </>
    );
  };

  const Premium5thRowElement = ({
    monthsNumber,
    price,
  }: {
    monthsNumber: string;
    price: string;
  }) => {
    return (
      <div className="flex flex-col">
        <div className="">{monthsNumber}</div>
        <div className="text-xl font-semibold">US${price}</div>
        <div className="text-xs">/month</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mt-28 gap-10 text-[#103133] relative">
      
      <h1 className="text-4xl font-semibold text-center">
        Features and pricing
      </h1>

      <div className="tables flex gap-3 justify-center items-center">
        <div className=" [&>*:nth-child(odd)]:bg-[#E0E8E8] [&>*:nth-child(even)]:bg-[#C6D6D6] [&>*]:px-5 [&>*]:py-6 w-1/3">
          <div className="text-2xl text-center font-semibold">Free</div>
          <FirstRow text="Number of free piano lessons" lessonsNumber="3" />
          <RowsOneToThree check="/unchecked.svg" />

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">Free</span>
              <span>Unlimited time</span>
            </div>
            <img src="/checked.svg" width="30" height="30" alt="" />
          </div>
          <div className="text-center flex flex-col items-center">
            <button className="text-xl font-semibold border-2 border-[#103133] w-full py-3 hover:text-[#649492]">
              Signup for free
            </button>
            <div>No credit card required</div>
          </div>
        </div>

        <div className=" [&>*:nth-child(odd)]:bg-[#95E5B4] [&>*:nth-child(even)]:bg-[#88D5AB] [&>*]:px-5 [&>*]:py-6 w-1/3">
          <div className="text-2xl text-center font-semibold">Premium</div>
          <FirstRow text="Number of piano lessons" lessonsNumber="+500" />
          <RowsOneToThree check="/checked.svg" />
          <div className="flex justify-evenly">
            <Premium5thRowElement monthsNumber="1 month" price="29.99" />
            <Premium5thRowElement monthsNumber="3 months" price="19.99" />
            <Premium5thRowElement monthsNumber="12 months" price="12.99" />
          </div>
          <div className="flex justify-center">
            <button className="primary-button w-full">Start Now</button>
          </div>
        </div>
      </div>

      <div className="text-center -mt-7">
        Money back guarantee.​ Just let us know within 14 days to get a full
        refund.
      </div>
    </div>
  );
};

export default FifthSection;
