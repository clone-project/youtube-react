import { ReactComponent as LogoYoutube } from "../../assets/icons/gnb/logo-youtube.svg"
import { ReactComponent as LogoPremium } from "../../assets/icons/gnb/logo-premium.svg"
import "./GnbLogo.scss";

function GnbLogo({isPremium}) {
  console.log(isPremium);
  return (
    <h1 className="logo">
      <a href="/" className="link">
        <span className="blind">YouTube</span>
        {isPremium ? (
          <LogoPremium />
        ) : (
          <LogoYoutube />
        )}
      </a>
      <span className="unit_nation">KR</span>
    </h1>
  )
}

export default GnbLogo;