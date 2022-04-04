import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import CustomLink from "../../components/custom-link/custom-link.component";
import MyImage from "../../assister/myimage.jpg";
import {
  AboutSection,
  ImageContainer,
  TextContainer,
  AboutText,
} from "./about.styles";
import { themeHandler } from "../../theme-function/theme-handler";
import { SectionHeading } from "../../global-styles/common.styles";

function Info() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <AboutSection>
      <ImageContainer currentTheme={currentTheme}>
        <img
          style={{ borderRadius: "0.5rem" }}
          width={"100%"}
          src={MyImage}
          alt="Anuj Panwar"
        />
      </ImageContainer>
      <TextContainer>
        <SectionHeading currentTheme={currentTheme}>Who I am</SectionHeading>
        <h4>About Me</h4>
        <AboutText>
          Hello my name is <strong>Anuj Panwar</strong>, Passionate about
          Front-end Development. I'm from Dehradun Uttarakhand, India. I Love to
          learn new skills and think creative i'm a Fresher looking for the job.
          I build some projects to enhance my skills.
          <p>
            I build projects using HTML5, CSS3, SCSS, JAVASCRIPT, REACT JS and
            keep always looking for better SEO. I love create best visual effect
            and features which one attract the users.
          </p>
          <p>
            <strong style={{ color: " #00ff14" }}>
              {" "}
              “You define your own life. Don’t let other people write your
              script.”
              <br />— Oprah Winfrey
            </strong>
          </p>
        </AboutText>

        <CustomLink
          className={`btn info-btn ${themeHandler(
            "btn-pink",
            "btn-black",
            "btn-default"
          )}`}
          target="_blank"
          rel="noreferrer"
          to="https://my.indeed.com/p/anujp-hskl1dp"
          download
        >
          Download CV
        </CustomLink>
      </TextContainer>
    </AboutSection>
  );
}
export default Info;
