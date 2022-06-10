import { useContext, memo, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme.context";
import CustomLink from "../../components/custom-link/custom-link.component";

import {
  AboutSection,
  ImageContainer,
  TextContainer,
  AboutText,
} from "./about.styles";
import { SectionHeading } from "../../global-styles/common.styles";
import SocialIcons from "../../components/Social-icons/SocialIcons.component";
import useWindowDimensions from "../../components/size-detecter/size-detecter";
import useOnScreen from "../../hooks/use-onScreen";
import useGet from "../../hooks/use-get";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

function Info(props) {
  const infoRef = useRef();
  const [state, setState] = useState({});
  const isAboutOnScreen = useOnScreen(infoRef);
  const [infoRefValue, setInfoRefValue] = useState(false);
  const { currentTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const imgRef = useRef();
  const { data, isLoading, error } = useGet("about", infoRefValue, {});

  useEffect(() => {
    setState(data);
  }, [data]);

  useEffect(() => {
    if (!infoRefValue) {
      setInfoRefValue(isAboutOnScreen);
    }
  }, [isAboutOnScreen, infoRefValue]);

  useEffect(() => {
    const refs = props.imgError;
    if (refs) {
      const img = imgRef.current;
      img.style.alignSelf = "stretch";
      img.style.background = "#e3e3e3ad";
      img.style.zIndex = "1000";
    }
  }, [props]);

  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (error && !isLoading) {
    content = <p>{error}</p>;
  } else {
    content = (
      <AboutSection
        id="about"
        ref={infoRef}
        className={infoRefValue ? "" : "scroll-Top"}
      >
        {infoRefValue && (
          <>
            <ImageContainer ref={imgRef} currenttheme={currentTheme}>
              {props.imgError && <p>Img Not loaded. Something went wrong </p>}
              <img
                style={{ borderRadius: "0.5rem" }}
                width={"100%"}
                src={state.imgUrl}
                alt="Anuj Panwar"
              />
            </ImageContainer>
            <TextContainer>
              <SectionHeading currenttheme={currentTheme}>
                Who I am
              </SectionHeading>
              <h4>{data.title}</h4>
              <AboutText>
                {state.description}
                <p style={{ marginTop: "1rem" }}>{data.subDescription}</p>
                <p>
                  <strong style={{ color: " #00ff14", fontWeight: "400" }}>
                    {" "}
                    “You define your own life. Don’t let other people write your
                    script.”
                    <br />— Oprah Winfrey
                  </strong>
                </p>
              </AboutText>
              {width <= 700 && <SocialIcons isAboutSection={"about"} />}
              <CustomLink
                currenttheme={currentTheme}
                $navLink="button"
                target="_blank"
                rel="noreferrer"
                to={props.url}
                // to="https://my.indeed.com/p/anujp-hskl1dp"
                download
                style={{ fontWeight: "500", fontSize: "1.8rem" }}
              >
                Download CV
              </CustomLink>
            </TextContainer>
          </>
        )}
      </AboutSection>
    );
  }

  return (
<<<<<<< HEAD
    <AboutSection
      id="about"
      ref={infoRef}
      className={infoRefValue ? "" : "scroll-Top"}
    >
      {" "}
      {content}
=======
    <AboutSection id="about">
      <ImageContainer ref={imgRef} currenttheme={currentTheme}>
        {props.imgError && <p>Img Not loaded. Something went wrong </p>}
        <img
          style={{ borderRadius: "0.5rem" }}
          width={"100%"}
          src={props.imgUrl}
          alt="Anuj Panwar"
        />
      </ImageContainer>
      <TextContainer>
        <SectionHeading currenttheme={currentTheme}>Who I am</SectionHeading>
        <h4>About Me</h4>
        <AboutText>
          Hello, my name is <strong>Anuj Panwar</strong>, Passionate about
          Front-end Development. I'm from Dehradun Uttarakhand, India. I Love to
          learn new skills and think creatively I'm a Fresher looking for a job.
          I build some projects to enhance my skills.
          <p>
            I build projects using HTML5, CSS3, SCSS, JAVASCRIPT, and REACT JS
            and keep always looking for better SEO. I love to create the best
            visual effects and features that attract users.
          </p>
          <p>
            <strong style={{ color: " #00ff14", fontWeight: "400" }}>
              {" "}
              “You define your own life. Don’t let other people write your
              script.”
              <br />— Oprah Winfrey
            </strong>
          </p>
        </AboutText>
        {width <= 700 && <SocialIcons isAboutSection={"about"} />}
        <CustomLink
          currenttheme={currentTheme}
          $navLink="button"
          target="_blank"
          rel="noreferrer"
 master
          to={props.url}
          // to="https://my.indeed.com/p/anujp-hskl1dp"

          download
          style={{ fontWeight: "500", fontSize: "1.8rem" }}
        >
          Download CV
        </CustomLink>
      </TextContainer>
>>>>>>> 888e8572e6e652fd98ed714ce4e035f435827964
    </AboutSection>
  );
}
export default memo(Info);
