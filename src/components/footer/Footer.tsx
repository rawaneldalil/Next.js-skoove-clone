import Image from "next/image";
import FooterMenu from "./FooterMenu";
import SocialMediaIcons from "../SocialMediaIcons";
import ChangeLanguege from "../ChangeLanguege";

const Footer = () => {
  const copyrightSymbol = String.fromCodePoint(0x00a9);

  return (
    <footer className="flex flex-col bg-[#00524f] px-[16.2%] pb-20 pt-12 gap-10">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <Image src="/tlogo.svg" alt="" width={180} height={100} />
          <span className="text-white font-semibold text-3xl ml-2">
            Play your way
          </span>
        </div>
        <div className="flex justify-around basis-3/4">
          <FooterMenu
            menuName="Navigation"
            items={[
              "Home",
              "Magazine",
              "FAQ",
              "Piano Teachers",
              "Join our community",
            ]}
          />
          <FooterMenu
            menuName="Company"
            items={[
              "About",
              "Career",
              "Contact",
              "Media Kit",
              "Affiliate Program",
            ]}
          />
          <FooterMenu
            menuName="Legal"
            items={["Terms & Conditions", "Privacy", "Imprint"]}
          />
          <FooterMenu
            menuName="Magazine"
            items={[
              "How to play the piano",
              "Best Piano App",
              "Bass clef notes",
              "Piano scales",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-3">
          <SocialMediaIcons />
          <div className="flex text-white text-sm font-medium">
            {copyrightSymbol} 2023 Learnfield GmbH
          </div>
          <div className="flex gap-2">
            <img src="/EUflag.png" alt="" width={41} height={26.5} />
            <div className="flex flex-col text-[11px] text-white">
              <strong>European Union</strong>
              <span>European Regional Development Fund</span>
            </div>
          </div>
        </div>
        <ChangeLanguege />
      </div>
    </footer>
  );
};

export default Footer;
