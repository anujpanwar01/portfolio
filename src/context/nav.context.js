import { createContext, useState } from "react";

export const NavContext = createContext({
  nav: false,
  setNav: () => {},
});
export const NavProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  const value = { nav, setNav };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
