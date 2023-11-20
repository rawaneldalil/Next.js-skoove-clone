const InfoEntry = ({
    type,
    placeholder,
    imgPath,
  }: {
    type: string;
    placeholder: string;
    imgPath: string;
  }) => {
    return (
      <div className="flex justify-between relative border-b-2 border-[#00524f] w-full">
        <input
          type={type}
          className="outline-none w-full  p-4 bg-slate-100"
          placeholder={placeholder}
        />
        <img
          className="absolute top-0 right-0"
          src={imgPath}
          alt=""
          width={48}
          height={48}
        />
      </div>
    );
  };

export default InfoEntry;  