import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import CustomLink from "../custom-link/custom-link.component";

import { SocialIconsContainer } from "./social-icons.styles";
const SocialIcons = function () {
  const { currentTheme } = useContext(ThemeContext);

  const iconsData = [
    {
      content: <FaLinkedin size={28} />,

      to: "https://www.linkedin.com/in/anuj-panwar-a1390a229/",
    },
    {
      content: <FaGithub size={28} />,

      to: "https://github.com/anujpanwar01",
    },
    {
      content: <FaTwitter size={28} />,

      to: "https://twitter.com/anujpanwar7911",
    },
    {
      content: <FaInstagram size={28} />,

      to: "https://www.instagram.com/anujpanwar01/",
    },
  ];

  return (
    <SocialIconsContainer currentTheme={currentTheme}>
      {iconsData.map(({ content, to }) => (
        <CustomLink
          key={Math.random() * 100}
          marginRight
          $navLink={"nav-link"}
          currenttheme={currentTheme}
          to={to}
        >
          {content}
        </CustomLink>
      ))}
    </SocialIconsContainer>
  );
};
export default SocialIcons;
