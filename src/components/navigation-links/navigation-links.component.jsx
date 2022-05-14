import { useContext } from "react";

import { ThemeContext } from "../../context/theme.context";
import { Navigation, NavLinks } from "./navigation.styles";

const NavigationLink = function ({ link, identifier, id }) {
  const { currentTheme } = useContext(ThemeContext);

  const linkData = [
    { className: "nav-link", content: "Home", to: "home" },
    { className: "nav-link", content: "About", to: "about" },
    { className: "nav-link", content: "Projects", to: "projects" },
    { className: "nav-link", content: "Education", to: "education" },
    { className: "nav-link", content: "contact", to: "footer" },
  ];

  return (
    <Navigation id={id} nav={link}>
      {linkData.map(({ content, to }) => (
        <NavLinks
          key={Math.random() * 600}
          currenttheme={currentTheme}
          link={identifier}
          to={to}
          smooth={true}
          href="#"
        >
          {content}
        </NavLinks>
      ))}
    </Navigation>
  );
};

export default NavigationLink;
