import React, { useContext } from "react";
import { ToggleContext } from "../../context/toggle.context";
import { ThemeContext } from "../../context/theme.context";
import "./Header.scss";
import { BsDiamond } from "react-icons/bs";

import CustomBtn from "../custom-btn/custom-btn.component";

import { NavLinks } from "../navigation-links/navigation.styles";
import NavigationLink from "../navigation-links/navigation-links.component";

function Header() {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { currentTheme } = useContext(ThemeContext);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <div>
      <div className="flex"></div>
      <div className="header">
        <NavLinks
          currenttheme={currentTheme}
          to={"home"}
          smooth={true}
          link="logo"
          className="logo-container"
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
          <span className="theme-btn-text">Theme</span>
        </CustomBtn>
      </div>
    </div>
  );
}

export default Header;
