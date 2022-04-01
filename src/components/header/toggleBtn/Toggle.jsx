import React from "react";
import "./toggle.css";
import Span from "./Span";

const slowLoad = function () {
  document.querySelector(".header").classList.toggle("nav-close");
};
const navOpen = function () {
  setTimeout(slowLoad, 200);
  // document.querySelector(".header").classList.toggle("nav-close");
  document.querySelector(".flex").classList.toggle("slide-right");
  // setTimeout(header.classList.toggle("flex"), 2000);
  // header.classList.toggle("flex");
  // header.style.boxShadow = "200rem 0 0 0 #000 !important";
  const toggle = document.querySelectorAll("span");
  toggle.forEach((ele, i) => ele.classList.toggle(`toggle${i + 1}`));
};
// setTimeout(navOpen, 1000);
function Toggle() {
  return (
    <label onClick={navOpen}>
      <Span cl="span" />
      <Span cl="span" />
      <Span cl="span" />
    </label>
  );
}
export default Toggle;
