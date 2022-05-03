import { useContext, useState } from "react";
import { ToggleContext } from "../../context/toggle.context";
import { ThemeContext } from "../../context/theme.context";
import CustomBtn from "../custom-btn/custom-btn.component";
import "./themes.styles.scss";

const Themes = () => {
  const [link, setLink] = useState(1); //default active link
  const { toggle } = useContext(ToggleContext);
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const btns = [
    { id: 1, content: "Default", classes: "default" },
    { id: 2, content: "Black", classes: "black" },
    { id: 3, content: "Pink", classes: "pink" },
  ];

  const themeClass = (additional, arg1, arg2, arg3) => {
    return additional
      ? currentTheme === "black"
        ? `theme-black${additional}`
        : currentTheme === "pink"
        ? `theme-pink${additional}`
        : `theme-default${additional}`
      : //theme-2
      currentTheme === "black"
      ? `${arg1}-black`
      : currentTheme === "pink"
      ? `${arg2}-pink`
      : `${arg3}-default`;
  };

  const borderTheme = new Array(3).fill("theme");
  const btnTheme = new Array(3).fill("btn");

  return (
    <div
      className={`themes ${themeClass(undefined, ...borderTheme)}`}
      style={toggle ? { display: "flex" } : { display: "none" }}
    >
      {btns.map(({ id, content, classes }) => {
        return (
          <CustomBtn
            key={id}
            currenttheme={currentTheme}
            button="button"
            className={`themes-btn ${
              link === id ? themeClass("-active") : ""
            } ${themeClass(undefined, ...btnTheme)}`}
            handleChange={() => {
              setLink(id);
              setCurrentTheme(classes);
            }}
          >
            {content}
          </CustomBtn>
        );
      })}
    </div>
  );
};
export default Themes;
