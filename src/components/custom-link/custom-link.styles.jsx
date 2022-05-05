import styled, { css } from "styled-components";

import { TextPremiumColor } from "../../global-styles/common.styles";
import {
  themeHandler,
  commonThemeHanlder,
} from "../../global-styles/common.styles";

const buttonLink = function (currenttheme) {
  return css`
    padding: 1.6rem 2.4rem;
    color: ${commonThemeHanlder(currenttheme)};
    border: 2px solid ${commonThemeHanlder(currenttheme)};
    border-radius: 0.5rem;
    font-weight: 600;
  `;
};

export const CustomLinks = styled.a`
  &:link,
  &:visited {
    font-size: ${(props) => (props.$footerLink ? "1.6rem" : "1.6rem")};
    color: ${(props) => props.$pageLink && TextPremiumColor};
   
    ${(props) => {
      switch (props.$navLink) {
        case "toggler-link":
        case "button":
          return css`
            margin-right: 0rem;
            padding: 1.4rem 2rem;
            ${({ currenttheme }) => buttonLink(currenttheme)};
          `;

        default:
          return;
      }
    }}
  &:hover,
  &:active {
    ${(props) => {
      switch (props.$navLink) {
        case "nav-link":
          return css`
            color: ${({ currenttheme }) => commonThemeHanlder(currenttheme)};
          `;

        case "button":
          return css`
            background-color: ${({ currenttheme }) =>
              themeHandler(
                currenttheme,
                "#00e5ff10",
                "#d4ecdd17",
                "#ffa6000c"
              )};
          `;

        case "toggler-link":
          return css`
            color: ${({ currenttheme }) => commonThemeHanlder(currenttheme)};

            background-color: ${({ currenttheme }) =>
              themeHandler(
                currenttheme,
                "#00e5ff10",
                "#d4ecdd17",
                "#ffa6000c"
              )};
          `;
        default:
          return;
      }
    }}
    
`;
