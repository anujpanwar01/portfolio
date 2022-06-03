import { ThemeContext } from "../../context/theme.context";
import { memo, useContext } from "react";
import Themes from "../../components/themes/themes.component";
import { HeroSection, HeroH3, HeroH1 } from "./hero.styles";

import Toggler from "../../components/toggler/toggler.component";
import { NavLinks } from "../../components/navigation-links/navigation.styles";
function Hero() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <HeroSection currenttheme={currentTheme} id="home">
      <Themes />
      <div>
        <HeroH1 currenttheme={currentTheme}>Hey there&nbsp;I'm</HeroH1>
        <h2>Anuj Panwar</h2>
        <HeroH3 currenttheme={currentTheme}>Frontend Developer</HeroH3>
        <NavLinks
          className={`btn`}
          currenttheme={currentTheme}
          link="button"
          href="#"
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
export default memo(Hero);
