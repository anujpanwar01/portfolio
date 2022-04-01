import React, { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import Header from "./components/header/Header.component";
import Hero from "./components/Hero/Hero";
import Best from "./components/ILove/Best";
import Info from "./components/Info/Info";
import Education from "./components/Education/Education";
import Skill from "./components/Skills/skill";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import SocialIcons from "./components/Social-icons/SocialIcons.component";
import "./App.scss";

function App() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className={currentTheme}>
      <Header />
      <SocialIcons />
      <Hero />
      {/* <Best /> */}
      <Info />
      <Education />
      <Skill />

      <Project />
      <Footer />
    </div>
  );
}
export default App;
