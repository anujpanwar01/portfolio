// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
// import { faBookmark } from "@fortawesome/free-regular-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FaReact, FaJsSquare, FaCode } from "react-icons/fa";

const data = [
  {
    id: "1",
    icon: <FaCode size={42} />,
    num: "1",
    // src: "img/react-brands.svg",
    title: "FrontEnd",
    describe:
      "I love to use all Frontend tools like HTML, CSS, JS, React js. Make good design and easy to understand for all Users",
  },
  {
    id: "2",
    title: "Javascript",
    icon: <FaJsSquare size={42} />,
    // FaJsSquare,
    describe: `I fell love with Javascript because it's beginner friendly and So powerfull and use in Backend Nodejs .`,
  },
  {
    id: "3",
    title: "React js",
    icon: <FaReact size={42} />,
    // FaReact,
    describe: `I fell love with Javascript because it's beginner friendly and So powerfull and use in Backend Nodejs .`,
  },
];
// console.log(FaReact);
console.log(data);
export default data;
