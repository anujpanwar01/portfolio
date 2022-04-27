import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToggleProvider } from "./context/toggle.context";
import { ThemeProvider } from "./context/theme.context";
import { NavProvider } from "./context/nav.context";
import { ThankYouProvider } from "./context/thankyou.context";
;
// import "./styles.scss";
const rootElement = document.getElementById("root");
ReactDOM.render(

    <ToggleProvider>
      <ThemeProvider>
        <ThankYouProvider>
          <NavProvider>
            <App />
          </NavProvider>
        </ThankYouProvider>
      </ThemeProvider>
    </ToggleProvider>
,
  rootElement
);
