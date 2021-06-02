import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

(() => {
  const setFullHeightProperty = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setFullHeightProperty();
  window.addEventListener("resize", setFullHeightProperty);
})();

ReactDOM.render(
  <BrowserRouter basename={"/dongguk-bob"}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
