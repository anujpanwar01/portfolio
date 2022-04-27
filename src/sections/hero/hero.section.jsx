import { ThemeContext } from "../../context/theme.context";
import { useContext } from "react";
import { themeHandler, btn, typo } from "../../theme-function/theme-handler";
import Themes from "../../components/themes/themes.component";
import { HeroSection, HeroText } from "./hero.styles";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import "./hero.scss";
import Toggler from "../../components/toggler/toggler.component";

const gradient = (color) => {
  return `linear-gradient(to right,${color})`;
};

function Hero() {
  const { currentTheme } = useContext(ThemeContext);

  const pinkTheme = `rgba(66,39,90,1), rgba(115,75,109,1)`;
  const blackTheme = `#201b1b 10%, #212121 51%,#303030 100% `;
  const defaultTheme = `rgba(2, 14, 33, 0.88), rgba(1, 29, 30, 0.88)`;

  return (
    <HeroSection
      id="home"
      style={
        currentTheme === "pink"
          ? { backgroundImage: gradient(pinkTheme) }
          : currentTheme === "black"
          ? { backgroundImage: gradient(blackTheme) }
          : { backgroundImage: gradient(defaultTheme) }
      }
    >
      <Themes />
      <HeroText>
        <p className={themeHandler(...typo)}>Hey there &nbsp; I'm</p>
        <h1>Anuj Panwar</h1>
        <h3 currentTheme={currentTheme} className={themeHandler(...typo)}>
          Frontend Developer
        </h3>
        <CustomBtn button currentTheme={currentTheme} className={`btn`}>
          Let you know me!
        </CustomBtn>
        <span className="hero-h3"></span>
      </HeroText>
      <Toggler />
    </HeroSection>
  );
}
export default Hero;
// #0a192f
