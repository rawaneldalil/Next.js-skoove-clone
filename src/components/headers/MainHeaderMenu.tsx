import ChangeLanguege from "../ChangeLanguege"
import SocialMediaIcons from "../SocialMediaIcons"

const MainHeaderMenu = () => {
  return (
    <div className="flex flex-col z-10 gap-5 bg-[#00524f] absolute top-12 !text-lg px-8 pb-8 pt-2 w-[360px]">
        <span className="lang-footer-span mt-2">Log in</span>
        <span className="lang-footer-span">Sign up</span>
        <span className="lang-footer-span">Home</span>
        <span className="lang-footer-span">Magazine</span>
        <span className="lang-footer-span">FAQ</span>
        <span className="lang-footer-span">Career</span>
        <span className="text-white text-lg mb-2">Change languege</span>
        <ChangeLanguege main/>
        <span className="text-white text-lg mb-2">Share on social media</span>
        <SocialMediaIcons/>
    </div>
  )
}

export default MainHeaderMenu