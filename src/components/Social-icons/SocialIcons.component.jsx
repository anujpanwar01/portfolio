import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import CustomLink from "../custom-link/custom-link.component";

import { SocialIconsContainer } from "./social-icons.styles";
const SocialIcons = function ({ isAboutSection }) {
  const { currentTheme } = useContext(ThemeContext);

  const iconsData = [
    {
      content: <FaLinkedin size={28} />,

      to: "https://www.linkedin.com/in/anuj-panwar-a1390a229/",
      label: "Linkedin",
    },
    {
      content: <FaGithub size={28} />,

      to: "https://github.com/anujpanwar01",
      label: "Github",
    },
    {
      content: <FaTwitter size={28} />,

      to: "https://twitter.com/anujpanwar7911",
      label: "Twitter",
    },
    {
      content: <FaInstagram size={28} />,

      to: "https://www.instagram.com/anujpanwar01/",
      label: "Instagram",
    },
  ];

  return (
    <SocialIconsContainer currenttheme={currentTheme} about={isAboutSection}>
      {iconsData.map(({ content, to, label }) => (
        <CustomLink
          key={Math.random() * 100}
          marginRight
          about={isAboutSection}
          $navLink={"social-link"}
          currenttheme={currentTheme}
          to={to}
          aria-label={label}
        >
          {content}
        </CustomLink>
      ))}
    </SocialIconsContainer>
  );
};
export default SocialIcons;
