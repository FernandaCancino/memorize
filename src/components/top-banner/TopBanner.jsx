import Banner from "../../assets/Banner_LARGO.png"
import "./TopBanner.scss"

export const TopBanner = () => {
  return (
    <header className="top_banner"> 
      <img className="top_banner__img" src={Banner} alt="Banner" />
      <div className="top_banner__title">Zootopia Memorize</div>
    </header>
  )
}
