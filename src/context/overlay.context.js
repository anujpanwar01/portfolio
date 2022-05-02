import { createContext, useState } from "react";

export const OverlayContext = createContext({
  isOverlayOpen: false,
  setIsOverlayOpen: () => {},
});

export const OverlayProvider = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const value = { isOverlayOpen, setIsOverlayOpen };

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
};
