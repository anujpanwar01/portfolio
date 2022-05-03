import styled, { css } from "styled-components";
import { Link } from "react-scroll/modules";
import { TextPremiumColor } from "../../global-styles/common.styles";
import {
  themeHandler,
  commonThemeHanlder,
} from "../../global-styles/common.styles";

export const NavStyles = css`
  display: flex;
  flex-direction: column;
  grid-gap: 2.4rem;

  bottom: 10%;
`;
const commonStyle = function (currenttheme) {
  const common = css`
    background-color: ${themeHandler(
      currenttheme,
      "#00e5ff10",
      "#d4ecdd17",
      "#242e1a"
    )};
    border-radius: 0.5rem;
    margin-right: 0rem;
    padding: 1.2rem 2rem;
    border-radius: 0.5rem;

    color: ${commonThemeHanlder(currenttheme)};
  `;
  return common;
};

export const NavLinks = styled(Link)`
  font-size: ${({ link }) => (link === "toggler-link" ? "1.6rem" : "1.4rem")};
  color: ${(props) => props.$pageLink && TextPremiumColor};
  cursor: pointer;

  ${({ link, currenttheme }) => {
    //for toggler link
    switch (link) {
      case "toggler":
        return css`
          ${commonStyle(currenttheme)}
          &:hover,
          &:active {
            border: 2px solid ${commonThemeHanlder(currenttheme)};
            color: ${TextPremiumColor};

            background: transparent;
          }
        `;

      //for navigation link
      case "header":
        return css`
          ${commonStyle(currenttheme)}

          &:hover,
          &:active {
            background: transparent;
          }
        `;
      case "button":
        return css`
          margin-top: 3rem;
          padding: 1.8rem 3rem !important;
          color: ${commonThemeHanlder(currenttheme)};

          border: 2px solid ${commonThemeHanlder(currenttheme)};
        `;
      default:
        return;
    }
  }}

  &:hover,&:active {
    ${({ link }) => {
      switch (link) {
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
        default:
          return;
      }
    }}
  } ;
`;
export const Navigation = styled.nav`
  ${({ nav }) => {
    switch (nav) {
      case "toggler":
        return NavStyles;

      default:
        return css`
          display: flex;
          grid-gap: 2rem;
        `;
    }
  }}
`;
