import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { ThankYouSection, ThankYouMsg } from "./thank-you.styles";
import { Link } from "react-router-dom";

const ThankYou = function () {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThankYouSection currenttheme={currentTheme}>
      <ThankYouMsg>
        <h3>Thank You!</h3>
        <p>Your form Submission has been received</p>
        <div>
          <span>&#x2190;</span>
          <Link to={"/"} style={{ color: "orange" }}>
            Go back to site
          </Link>
        </div>
      </ThankYouMsg>
    </ThankYouSection>
  );
};

export default ThankYou;
