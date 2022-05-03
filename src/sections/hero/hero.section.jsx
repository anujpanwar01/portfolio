import { ThemeContext } from "../../context/theme.context";
import { useContext } from "react";
import Themes from "../../components/themes/themes.component";
import { HeroSection, HeroH3, HeroP } from "./hero.styles";

import Toggler from "../../components/toggler/toggler.component";
import { NavLinks } from "../../components/navigation-links/navigation.styles";
function Hero() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <HeroSection currenttheme={currentTheme} id="home">
      <Themes />
      <div>
        <HeroP currenttheme={currentTheme}>Hey there &nbsp; I'm</HeroP>
        <h1>Anuj Panwar</h1>
        <HeroH3 currenttheme={currentTheme}>Frontend Developer</HeroH3>
        <NavLinks
          className={`btn`}
          currenttheme={currentTheme}
          link="button"
          to={"about"}
          smooth="true"
        >
          Let you know me!
        </NavLinks>
      </div>
      <Toggler />
    </HeroSection>
  );
}
export default Hero;
