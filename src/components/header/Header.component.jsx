import React, { useContext } from "react";
import { ToggleContext } from "../../context/toggle.context";
import { ThemeContext } from "../../context/theme.context";
// import "./Header.scss";
import { BsDiamond } from "react-icons/bs";

import CustomBtn from "../custom-btn/custom-btn.component";
import { Head, LogoContainer } from "./Header.style";

import NavigationLink from "../navigation-links/navigation-links.component";

function Header() {
  const { toggle, setToggle } = useContext(ToggleContext);
  const { currentTheme } = useContext(ThemeContext);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <React.Fragment>
      {/* <div className="flex"></div> */}
      <Head>
        <LogoContainer
          currenttheme={currentTheme}
          to={"home"}
          smooth={true}
          link="logo"
          href="#"
        >
          <BsDiamond className={`logo icon`} size={46} />

          <span>ap</span>
        </LogoContainer>
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
      </Head>
    </React.Fragment>
  );
}

export default Header;
