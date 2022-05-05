import React, { useContext } from "react";
import { ToggleContext } from "../../context/toggle.context";
import { ThemeContext } from "../../context/theme.context";
import "./Header.scss";
import { BsDiamond } from "react-icons/bs";

import CustomBtn from "../custom-btn/custom-btn.component";

import { NavLinks } from "../navigation-links/navigation.styles";
import NavigationLink from "../navigation-links/navigation-links.component";
// import Toggler from "../toggler/toggler.component";
// import Nav from "./Nav";
// import Mylogo from "../../assister/m.png";
// import Toggle from "./toggleBtn/Toggle";

function Header() {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { currentTheme } = useContext(ThemeContext);

  const toggleHandler = () => setToggle(!toggle);

  const themeHandler = (class1, class2, class3) => {
    return currentTheme === "pink"
      ? class1
      : currentTheme === "black"
      ? class2
      : class3;
  };

  return (
    <div>
      <div className="flex"></div>
      <div className="header">
        <NavLinks
          to={"#home"}
          className={`logo-container ${themeHandler(
            "pink-logo",
            "black-logo",
            "default-logo"
          )}`}
        >
          <BsDiamond className={`logo icon`} size={46} />

          <span>ap</span>
        </NavLinks>
        {<NavigationLink identifier={"header"} />}

        <CustomBtn
          button="button"
          currenttheme={currentTheme}
          className="btn"
          headerButton
          handleChange={toggleHandler}
          style={{ marginLeft: "2rem" }}
        >
          <span className="theme-btn-text ">Theme</span>
        </CustomBtn>
      </div>
    </div>
  );
}

export default Header;
