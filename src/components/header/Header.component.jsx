import React, { useContext } from "react";
import { ToggleContext } from "../../context/toggle.context";
import { ThemeContext } from "../../context/theme.context";
import "./Header.scss";
import { BsDiamond } from "react-icons/bs";
import CustomLink from "../custom-link/custom-link.component";
import CustomBtn from "../custom-btn/custom-btn.component";

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

  const linkData = [
    { className: "nav-link", content: "Home", to: "#home" },
    { className: "nav-link", content: "About", to: "#home" },
    { className: "nav-link", content: "Projects", to: "#home" },
    { className: "nav-link", content: "Education", to: "#home" },
    { className: "nav-link", content: "contact", to: "#home" },
  ];

  return (
    <div>
      {/* <Toggle /> */}
      <div className="flex"></div>
      <div className="header">
        <CustomLink
          to={"#home"}
          className={`logo-container ${themeHandler(
            "pink-logo",
            "black-logo",
            "default-logo"
          )}`}
        >
          <BsDiamond
            className={`logo icon`}
            size={46}
            // color={
            //   currentTheme === "pink"
            //     ? "#f900ff"
            //     : currentTheme === "black"
            //     ? "blue"
            //     : "#ffa500"
            // }
          />

          <span>ap</span>
        </CustomLink>
        <nav>
          {linkData.map(({ content, to }) => {
            return (
              <CustomLink
                key={Math.random() * 600}
                currentTheme={currentTheme}
                $pageLink
                $navLink={"nav-link"}
                to={to}
                style={{ marginRight: "5rem" }}
              >
                {content}
              </CustomLink>
            );
          })}

          <CustomBtn
            button
            currentTheme={currentTheme}
            className="btn"
            headerButton
            handleChange={toggleHandler}
          >
            Theme
            <span className="theme-btn-text ">Change Theme</span>
          </CustomBtn>
        </nav>
      </div>
    </div>
  );
}

export default Header;
