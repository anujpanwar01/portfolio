import { createContext, useState } from "react";

export const ToggleContext = createContext({
  toggle: false,
  setToggle: () => {},
});
export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const value = { toggle, setToggle };
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
