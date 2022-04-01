import { useState, createContext } from "react";
export let HELPER;
export const ThemeContext = createContext({
  currentTheme: "default",
  setCurrentTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("default");
  const value = { currentTheme, setCurrentTheme };
  HELPER = currentTheme;
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
