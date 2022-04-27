import { createContext, useState } from "react";

export const ThankYouContext = createContext({
  thankyou: false,
  setThankyou() {},
});

export const ThankYouProvider = ({ children }) => {
  const [thankyou, setThankyou] = useState(false);
  const value = { thankyou, setThankyou };

  return (
    <ThankYouContext.Provider value={value}>
      {children}
    </ThankYouContext.Provider>
  );
};
