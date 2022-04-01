import { HELPER } from "../context/theme.context";

export const themeHandler = (class1, class2, class3) => {
  return HELPER === "pink" ? class1 : HELPER === "black" ? class2 : class3;
  //   const {} = useContext(ThemeContext);
};

export const btn = ["btn-pink", "btn-black", "btn-default"];
export const typo = ["typo-pink", "typo-black", "typo-default"];
