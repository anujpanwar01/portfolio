import { useContext } from "react";
import "./loading-spinner.styles.js";
import { ThemeContext } from "../../context/theme.context.js";
import {Spinner} from "./loading-spinner.styles.js";
const LoadingSpinner = () => {
  const { currentTheme } = useContext(ThemeContext);
  return <Spinner currenttheme={currentTheme}></Spinner>;
};

export default LoadingSpinner;
