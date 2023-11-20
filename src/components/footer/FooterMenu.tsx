const FooterMenu = ({
  menuName,
  items,
}: {
  menuName: string;
  items: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-white text-[16px]">{menuName}</span>
      {items.map((item) => (
        <span className="text-[#2ec39f] text-[16px] hover:text-[#95E5B4] cursor-pointer">
          {item}
        </span>
      ))}
    </div>
  );
};

export default FooterMenu;
