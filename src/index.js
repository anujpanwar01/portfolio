import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToggleProvider } from "./context/toggle.context";
import { ThemeProvider } from "./context/theme.context";
import { NavProvider } from "./context/nav.context";
import { ThankYouProvider } from "./context/thankyou.context";
import { OverlayProvider } from "./context/overlay.context";
import "./styles.scss";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ToggleProvider>
    <ThemeProvider>
      <ThankYouProvider>
        <OverlayProvider>
          <NavProvider>
            <App />
          </NavProvider>
        </OverlayProvider>
      </ThankYouProvider>
    </ThemeProvider>
  </ToggleProvider>
);
