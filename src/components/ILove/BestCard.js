import React from "react";
import "./Best.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaReact, FaJsSquare, FaCode } from "react-icons/fa";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Card(props) {
  const html = props.icon;
  // console.log((props.icon = FaReact));
  const span = document.createElement("span");
  console.log(props.src);
  span.innerHTML = html;
  console.log(html);

  console.log(props);
  // console.log(FontAwesomeIcon);
  console.log(props.id);
  return (
    <div className="card">
      {/* <a></a> */}
      {/* {FaReact} */}

      {/* <FaReact /> */}
      <span className="icons"> {props.icon}</span>

      {/* <a href="ap"> */}
      {}
      {/* {props.icon === "FaReact"}?<FaReact />:<FaJsSquare />; */}
      {/* <FontAwesomeIcon icon={faCode} /> */}
      {/* </a> */}
      <h3 className="best-title">{props.title}</h3>
      <p className="best-describe">{props.describe}</p>
    </div>
  );
}
export default Card;
