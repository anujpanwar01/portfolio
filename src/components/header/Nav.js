import React from "react";
import "./Header.scss";

function Nav(props) {
  return (
    <a className="nav-link" href={props.link}>
      {props.content}
    </a>
  );
}

export default Nav;
