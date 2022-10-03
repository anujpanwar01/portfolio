import { useContext } from "react";
import "./navigation.styles.scss";
import { ThemeContext } from "../../context/theme.context";
import { Navigation, NavLinks } from "./navigation.styles";

const NavigationLink = function ({ link, identifier, id, ...props }) {
  const { currentTheme } = useContext(ThemeContext);

  const linkData = [
    { content: "Home", to: "home", style: "flex" },
    {
      style: `${props.about ? "flex" : "none"}`,
      content: "About",
      to: "about",
    },
    {
      content: "Education",
      to: "education",
      style: `${props.education ? "flex" : "none"}`,
    },
    {
      content: "Projects",
      to: "projects",
      style: `${props.project ? "flex" : "none"}`,
    },
    {
      content: "contact",
      to: "footer",
      style: `${props.contact ? "flex" : "none"}`,
    },
  ];

  return (
    <Navigation id={id} nav={link}>
      {linkData.map(({ style, content, to }) => {
        return (
          <NavLinks
            style={{ display: `${style}` }}
            key={Math.random() * 600}
            currenttheme={currentTheme}
            link={identifier}
            to={to}
            smooth={true}
            href="#"
          >
            {content}
          </NavLinks>
        );
      })}
    </Navigation>
  );
};

export default NavigationLink;
