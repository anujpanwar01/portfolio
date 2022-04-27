import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToggleProvider } from "./context/toggle.context";
import { ThemeProvider } from "./context/theme.context";
import { NavProvider } from "./context/nav.context";
import { BrowserRouter as Router } from "react-router-dom";
// import "./styles.scss";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <ToggleProvider>
      <ThemeProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </ThemeProvider>
    </ToggleProvider>
  </Router>,
  rootElement
);
