import React, { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import Header from "./components/header/Header.component";
import Hero from "./sections/hero/hero.section";
import Info from "./sections/about/about.section";
import Education from "./components/Education/Education";
import Skill from "./components/Skills/skill.component";
import ProjectPage from "./sections/projects/projects.sections";
// import Project from "./components/Projects/Project";
import FooterSection from "./sections/footer/footer.section";
// import Footer from "./components/Footer/Footer";
import SocialIcons from "./components/Social-icons/SocialIcons.component";
import { GlobalStyle } from "./global-styles/global.styles";
import { NavContext } from "./context/nav.context";
import { themeHandler } from "./global-styles/common.styles";

import "./App.scss";

import ThankYou from "./components/thank-you/thank-you.component";

function App() {
  const { nav } = useContext(NavContext);
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${currentTheme}`}>
      <GlobalStyle />
      <Header />
      <SocialIcons />
      <Hero />
      {/* <Best /> */}
      <Info />
      <Education />
      <Skill />
      <ThankYou />
      <ProjectPage />
      <FooterSection />
      {nav && (
        <div
          className="overlay"
          style={{
            backgroundColor: themeHandler(
              currentTheme,
              "#00e5ff05",
              "#d4ecdd0a",
              "#ffa60005"
            ),
          }}
        ></div>
      )}
    </div>
  );
}
export default App;
