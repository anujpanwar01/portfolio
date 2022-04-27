import React, { useContext } from "react";
import { ToggleNav } from "./toggler.styles.jsx";
import NavigationLink from "../navigation-links/navigation-links.component";
import { ThemeContext } from "../../context/theme.context.js";
import { NavContext } from "../../context/nav.context";

// const slowLoad = function () {
//   document.querySelector(".header").classList.toggle("nav-close");
// };
// const navOpen = function () {
//   setTimeout(slowLoad, 200);
//   // document.querySelector(".header").classList.toggle("nav-close");
//   document.querySelector(".flex").classList.toggle("slide-right");
//   // setTimeout(header.classList.toggle("flex"), 2000);
//   // header.classList.toggle("flex");
//   // header.style.boxShadow = "200rem 0 0 0 #000 !important";
//   const toggle = document.querySelectorAll("span");
//   toggle.forEach((ele, i) => ele.classList.toggle(`toggle${i + 1}`));
// };
// setTimeout(navOpen, 1000);
function Toggler() {
  const { currentTheme } = useContext(ThemeContext);
  const { nav, setNav } = useContext(NavContext);

  return (
    <ToggleNav>
      {nav && (
        <NavigationLink
          link={"toggler"}
          identifier={"toggler"}
          common={"common"}
        />
      )}
      <label
        className={currentTheme}
        style={{ position: "relative" }}
        onClick={() => setNav(!nav)}
      >
        <span className={`${nav && "toggle1"}`}>&nbsp;</span>
        <span className={`${nav && "toggle1"}`}>&nbsp;</span>
        <span className={`${nav && "toggle1"}`}>&nbsp;</span>
      </label>
    </ToggleNav>
  );
}
export default Toggler;
