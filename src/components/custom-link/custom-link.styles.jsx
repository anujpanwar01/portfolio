import styled from "styled-components";
import { css } from "styled-components";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
  TextPremiumColor,
} from "../../global-styles/common.styles";
// import { themeHandler } from "../../theme-function/theme-handler";

export const CustomLinks = styled.a`
  &:link,
  &:visited {
    font-size: 1.4rem;
    margin-right: ${(props) => !props.marginRight && "5rem"};
    color: ${(props) => props.$pageLink && TextPremiumColor};
  }
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

        default:
          return;
      }
    }}
    ${
      "" /* color: ${(props) =>
      props.navLink && props.currentTheme === "black"
        ? ColorSecondary
        : props.currentTheme === "pink"
        ? ColorTertiary
        : ColorDefault};
  } */
    }
`;
