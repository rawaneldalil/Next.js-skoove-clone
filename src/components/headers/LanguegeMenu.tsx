import { Dispatch, SetStateAction } from "react";

const LanguegeMenu = ({
  onClick,
}: {
  onClick: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col items-center gap-5 bg-[#00524f] absolute top-10 !text-sm pl-4 pr-8 py-2">
      <span className="lang-footer-span" onChange={() => onClick("Deutsch")}>
        Deutsch
      </span>
      <span className="lang-footer-span" onChange={() => onClick("Español")}>
        Español
      </span>
      <span className="lang-footer-span" onChange={() => onClick("Français")}>
        Français
      </span>
      <span className="lang-footer-span" onChange={() => onClick("日本語")}>
        日本語
      </span>
      <span className="lang-footer-span" onChange={() => onClick("한국어")}>
        한국어
      </span>
      <span className="lang-footer-span" onChange={() => onClick("简体中文")}>
        简体中文
      </span>
      <span className="lang-footer-span" onChange={() => onClick("繁體中文")}>
        繁體中文
      </span>
    </div>
  );
};

export default LanguegeMenu;
