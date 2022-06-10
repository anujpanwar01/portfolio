import React, { Suspense, useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import { OverlayContext } from "./context/overlay.context";
import Header from "./components/header/Header.component";
// import Hero from "./sections/hero/hero.section";

import Info from "./sections/about/about.section";
import EducationSection from "./sections/education/education.section";
import Skill from "./components/Skills/skill.component";
import ProjectPage from "./sections/projects/projects.sections";
import FooterSection from "./sections/footer/footer.section";
import SocialIcons from "./components/Social-icons/SocialIcons.component";
import { GlobalStyle } from "./global-styles/global.styles";
import { NavContext } from "./context/nav.context";
import useWindowDimensions from "./components/size-detecter/size-detecter";
import "./App.scss";
import { fileStore } from "./utils/firebase.utils";
import ThankYou from "./components/thank-you/thank-you.component";
import { createPortal } from "react-dom";
import { ref } from "firebase/storage";
import useFetch from "./hooks/use-fetch";
import LoadingSpinner from "./components/loading-spinner/loading-spinner";

const Hero = React.lazy(() => import("./sections/hero/hero.section"));

function App() {
  const { width } = useWindowDimensions();
  const { currentTheme } = useContext(ThemeContext);
  const { isOverlayOpen, setIsOverlayOpen } = useContext(OverlayContext);
  const { nav, setNav } = useContext(NavContext);

  const overlayHandler = (e) => {
    e.currentTarget.style.display = "none";
    setIsOverlayOpen(!isOverlayOpen);
    setNav(!nav);
  };

  const resumeDownloadPath = ref(
    fileStore,
    "gs://portfolio-f4722.appspot.com/cv/my-resume.pdf"
  );

  const { isLoading: resumeLoad, url: resumeUrl } =
    useFetch(resumeDownloadPath);

  return (
    <Suspense
      fallback={createPortal(
        <div className="centered">
          <LoadingSpinner />
        </div>,
        document.getElementById("spinner")
      )}
    >
      {resumeLoad && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!resumeLoad && (
        <div className={`app ${currentTheme}`}>
          <GlobalStyle />
          <Header />
          {width > 700 && <SocialIcons />}
          <Hero />
          <Info url={resumeUrl} />
          <EducationSection />
          <Skill />

          <ThankYou />
          <ProjectPage />
          <FooterSection />
          {nav &&
            isOverlayOpen &&
            createPortal(
              <div className="overlay" onClick={overlayHandler}></div>,
              document.getElementById("overlay")
            )}
        </div>
      )}
    </Suspense>
  );
}
export default App;
