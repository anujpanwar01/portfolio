import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { ThankYouSection, ThankYouMsg } from "./thank-you.styles";

import { ThankYouContext } from "../../context/thankyou.context";

const ThankYou = function () {
  const { currentTheme } = useContext(ThemeContext);
  const { thankyou, setThankyou } = useContext(ThankYouContext);

  const dialogHandler = () => setThankyou(!thankyou);

  return (
    <ThankYouSection
      style={!thankyou ? { display: "none" } : { display: "flex" }}
      currenttheme={currentTheme}
    >
      {thankyou && (
        <ThankYouMsg>
          <h3>Thank You!</h3>
          <p>Your form Submission has been received</p>
          <div>
            <span>&#x2190;</span>
            <a href="#home" onClick={dialogHandler} style={{ color: "orange" }}>
              Go back to site
            </a>
          </div>
        </ThankYouMsg>
      )}
    </ThankYouSection>
  );
};

export default ThankYou;
