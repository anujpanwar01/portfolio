import CustomLink from "../custom-link/custom-link.component";
import { useContext } from "react";

import { ThemeContext } from "../../context/theme.context";
import { Navigation, NavLinks } from "./navigation.styles";
const NavigationLink = function ({ link, identifier }) {
  //   const { toggle, setToggle } = useContext(ToggleContext);
  const { currentTheme } = useContext(ThemeContext);

  const linkData = [
    { className: "nav-link", content: "Home", to: "home" },
    { className: "nav-link", content: "About", to: "about" },
    { className: "nav-link", content: "Projects", to: "projects" },
    { className: "nav-link", content: "Education", to: "education" },
    { className: "nav-link", content: "contact", to: "footer" },
  ];

  return (
    <Navigation nav={link}>
      {linkData.map(({ content, to }) => (
        <NavLinks
          key={Math.random() * 600}
          currenttheme={currentTheme}
          // $toggler={"toggler-link"}
          // currentTheme={currentTheme}
          // $pageLink
          link={identifier}
          to={to}
          smooth={true}
          // style={{ marginRight: "5rem" }}
        >
          {content}
        </NavLinks>
      ))}
    </Navigation>
  );
};

export default NavigationLink;
