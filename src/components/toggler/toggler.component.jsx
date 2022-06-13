import React, { useContext } from "react";
import { ToggleNav } from "./toggler.styles.jsx";
import { OverlayContext } from "../../context/overlay.context.js";
import { ThemeContext } from "../../context/theme.context.js";
import { NavContext } from "../../context/nav.context";
import NavigationLink from "../navigation-links/navigation-links.component";

function Toggler(props) {
  const { currentTheme } = useContext(ThemeContext);
  const { isOverlayOpen, setIsOverlayOpen } = useContext(OverlayContext);
  const { nav, setNav } = useContext(NavContext);

  return (
    <ToggleNav>
      {nav && (
        <NavigationLink
          id={"toggler-nav"}
          link={"toggler"}
          identifier={"toggler"}
          common={"common"}
          {...props}
        />
      )}
      <label
        className={currentTheme}
        style={{ position: "relative" }}
        onClick={() => {
          setNav(!nav);
          setIsOverlayOpen(!isOverlayOpen);
        }}
      >
        <span className={`${nav && "toggle1"}`}>&nbsp;</span>
        <div>
          <span className={`${nav && "toggle2"} toggle`}>&nbsp;</span>
          <span className={`${nav && "toggle4"} toggle`}></span>
        </div>

        <span className={`${nav && "toggle3"}`}>&nbsp;</span>
      </label>
    </ToggleNav>
  );
}
export default Toggler;
