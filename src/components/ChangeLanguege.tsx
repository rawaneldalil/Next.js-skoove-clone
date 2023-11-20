const ChangeLanguege = ({main}:{main?:boolean}) => {
  return (
    <div className={`flex ${main?'justify-start flex-wrap gap-2':'justify-end gap-10'}`}>
      <span className="lang-footer-span">English</span>
      <span className="lang-footer-span">Deutsch</span>
      <span className="lang-footer-span">Español</span>
      <span className="lang-footer-span"> Français</span>
      <span className="lang-footer-span">日本語</span>
      <span className="lang-footer-span">한국어</span>
      <span className="lang-footer-span">简体中文</span>
      <span className="lang-footer-span">繁體中文</span>
    </div>
  );
};

export default ChangeLanguege;
