import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import CustomLink from "../custom-link/custom-link.component";
import "./Social-icons.styles.scss";
const SocialIcons = function () {
  const { currentTheme } = useContext(ThemeContext);
  const themeHandler = (class1, class2, class3) => {
    return currentTheme === "pink"
      ? class1
      : currentTheme === "black"
      ? class2
      : class3;
  };

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
    <div
      className={`social-icons 
       ${themeHandler(
         "pink-social-icons",
         "black-social-icons",
         "default-social-icons"
       )}`}
    >
      {iconsData.map(({ content, to }) => (
        <CustomLink
          key={Math.random() * 100}
          className={`icon ${
            currentTheme === "pink"
              ? "pink-social-icon"
              : currentTheme === "black"
              ? "black-social-icon"
              : "default-social-icon"
          }`}
          to={to}
        >
          {content}
        </CustomLink>
      ))}
    </div>
  );
};
export default SocialIcons;
