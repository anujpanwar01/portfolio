import styled, { css } from "styled-components";

import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
  TextPremiumColor,
} from "../../global-styles/common.styles";
import { themeHandler } from "../../global-styles/common.styles";

export const CustomLinks = styled.a`
  &:link,
  &:visited {
    font-size: ${(props) => (props.$footerLink ? "1.6rem" : "1.4rem")};
    color: ${(props) => props.$pageLink && TextPremiumColor};
   
    ${(props) => {
      switch (props.$navLink) {
        case "toggler-link":
          return css`
            margin-right: 0rem;
            padding: 1.2rem 2rem;
            color: ${props.currentTheme === "black"
              ? ColorSecondary
              : props.currentTheme === "pink"
              ? ColorTertiary
              : ColorDefault};

            border: 2px solid
              ${props.currentTheme === "black"
                ? ColorSecondary
                : props.currentTheme === "pink"
                ? ColorTertiary
                : ColorDefault};
            border-radius: 0.5rem;
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
            color: ${props.currentTheme === "black"
              ? ColorSecondary
              : props.currentTheme === "pink"
              ? ColorTertiary
              : ColorDefault}; ;
          `;
        case "toggler-link":
          return css`
            color: ${props.currentTheme === "black"
              ? ColorSecondary
              : props.currentTheme === "pink"
              ? ColorTertiary
              : ColorDefault};

            background-color: ${props.currentTheme === "black"
              ? "#00e5ff10"
              : props.currentTheme === "pink"
              ? "#d4ecdd17"
              : "#ffa6000c"};
          `;
        default:
          return;
      }
    }}
    
`;
