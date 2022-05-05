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
import { SectionHeading } from "../../global-styles/common.styles";
import SocialIcons from "../../components/Social-icons/SocialIcons.component";
import useWindowDimensions from "../../components/size-detecter/size-detecter";

function Info() {
  const { currentTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <AboutSection id="about">
      <ImageContainer currenttheme={currentTheme}>
        <img
          style={{ borderRadius: "0.5rem" }}
          width={"100%"}
          src={MyImage}
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
          to="https://my.indeed.com/p/anujp-hskl1dp"
          download
          style={{ fontWeight: "500", fontSize: "1.8rem" }}
        >
          Download CV
        </CustomLink>
      </TextContainer>
    </AboutSection>
  );
}
export default Info;
