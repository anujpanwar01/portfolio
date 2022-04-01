import { ThemeContext } from "../../context/theme.context";
import { useContext } from "react";
import { themeHandler, btn, typo } from "../../theme-function/theme-handler";

import back from "../Img/back.jpg";

import Themes from "../themes/themes.component";
import "./hero.scss";

// import HeroImage from "../Img/hero.png";

const gradient = (color, url = back) => {
  return `linear-gradient(to right,${color}),url(${url})`;
};

function Hero() {
  const { currentTheme } = useContext(ThemeContext);

  const pinkTheme = `rgba(66,39,90,1), rgba(115,75,109,1)`;
  const blackTheme = `#201b1b 10%, #212121 51%,#303030 100% `;
  const defaultTheme = `rgba(2, 14, 33, 0.88), rgba(1, 29, 30, 0.88)`;

  return (
    <section
      id="home"
      className="hero-section"
      style={
        currentTheme === "pink"
          ? { backgroundImage: gradient(pinkTheme) }
          : currentTheme === "black"
          ? { backgroundImage: gradient(blackTheme) }
          : { backgroundImage: gradient(defaultTheme) }
      }
    >
      <Themes />
      <div style={{ position: "relative" }}>
        <p className={themeHandler(...typo)}>Hey there &nbsp; I'm</p>
        <h1>Anuj Panwar</h1>
        <h3 className={themeHandler(...typo)}>Frontend Developer</h3>
        <button className={`btn hero-btn ${themeHandler(...btn)}`}>
          Let you know me!
        </button>
        <span className="hero-h3"></span>
      </div>
    </section>
  );
}
export default Hero;
// #0a192f
