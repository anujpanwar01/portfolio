import React, { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import { OverlayContext } from "./context/overlay.context";
import Header from "./components/header/Header.component";
import Hero from "./sections/hero/hero.section";
import Info from "./sections/about/about.section";
import Education from "./components/Education/Education";
import Skill from "./components/Skills/skill.component";
import ProjectPage from "./sections/projects/projects.sections";
import FooterSection from "./sections/footer/footer.section";
import SocialIcons from "./components/Social-icons/SocialIcons.component";
import { GlobalStyle } from "./global-styles/global.styles";
import { NavContext } from "./context/nav.context";
import useWindowDimensions from "./components/size-detecter/size-detecter";
import "./App.scss";

import ThankYou from "./components/thank-you/thank-you.component";

function App() {
  const { width } = useWindowDimensions();
  const { currentTheme } = useContext(ThemeContext);
  const { isOverlayOpen, setIsOverlayOpen } = useContext(OverlayContext);
  const { nav, setNav } = useContext(NavContext);

  console.log(width);
  const overlayHandler = (e) => {
    e.currentTarget.style.display = "none";
    setIsOverlayOpen(!isOverlayOpen);
    setNav(!nav);
  };
  return (
    <div className={`app ${currentTheme}`}>
      <GlobalStyle />
      <Header />
      {width > 700 && <SocialIcons />}
      <Hero />
      <Info />
      <Education />
      <Skill />
      <ThankYou />
      <ProjectPage />
      <FooterSection />
      {nav && isOverlayOpen && (
        <div className="overlay" onClick={overlayHandler}></div>
      )}
    </div>
  );
}
export default App;
