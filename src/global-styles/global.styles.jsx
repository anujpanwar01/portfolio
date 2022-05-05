import { createGlobalStyle } from "styled-components";
import { TextPrimaryColor } from "./common.styles";
export const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  @media only screen and (max-width:500px){
   font-size:56.25%;
  }
}
body {
  color: $color-text;
  font-family:"Rubik" ,"Montserrat", sans-serif;
  font-weight: 400;
  position: relative;
  overflow-x:hidden;

}
a{
  text-decoration:none;
  color:${TextPrimaryColor};
}
p {
  // color: inherit;
  line-height: 1.7;
  letter-spacing: 1px;
  font-size:1.8rem;
}
.btn{
    font-size: 2rem;
  padding: 1.4rem 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 600;
}
`;
// @import "./common-sass/common.styles.scss";

// @media only screen and (max-width: 600px) {
//   html {
//     font-size: 56.5%;
//   }
// }

// .btn {
//   font-size: 1.6rem;
//   padding: 1.6rem 3rem;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   letter-spacing: 1px;

//   // color: inherit;
//   // color: $color-primary;
//   // border: 2px solid $color-primary;

//   // &:hover {
//   //   background: #ffa6000c;
//   // }
// }
// .section-heading {
//   font-size: 3rem;
//   font-weight: 300;
//   color: #fff;
//   font-family: inherit;
//   margin-bottom: 3rem;
//   letter-spacing: 1px;
//   text-align: center;
// }
