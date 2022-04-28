import { ThemeContext } from "../../context/theme.context";
import { useContext } from "react";
import { themeHandler, btn, typo } from "../../theme-function/theme-handler";
import Themes from "../../components/themes/themes.component";
import { HeroSection, HeroH3, HeroP } from "./hero.styles";
import CustomBtn from "../../components/custom-btn/custom-btn.component";

import Toggler from "../../components/toggler/toggler.component";

function Hero() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <HeroSection currenttheme={currentTheme} id="home">
      <Themes />
      <div>
        <HeroP className={themeHandler(...typo)} currenttheme={currentTheme}>
          Hey there &nbsp; I'm
        </HeroP>
        <h1>Anuj Panwar</h1>
        <HeroH3 currenttheme={currentTheme}>Frontend Developer</HeroH3>
        <CustomBtn button currenttheme={currentTheme} className={`btn`}>
          Let you know me!
        </CustomBtn>
      </div>
      <Toggler />
    </HeroSection>
  );
}
export default Hero;
