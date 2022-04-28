import styled, { css } from "styled-components";
import { Link } from "react-scroll/modules";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
  TextPremiumColor,
} from "../../global-styles/common.styles";
import { themeHandler } from "../../global-styles/common.styles";

export const NavStyles = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${"" /* position: absolute; */}

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

    color: ${themeHandler(
      currenttheme,
      ColorSecondary,
      ColorTertiary,
      ColorDefault
    )};
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
            border: 2px solid
              ${themeHandler(
                currenttheme,
                ColorSecondary,
                ColorTertiary,
                ColorDefault
              )};
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
      default:
        return;
    }
  }}
`;
export const Navigation = styled.nav`
  ${({ nav }) => {
    switch (nav) {
      case "toggler":
        return NavStyles;

      default:
        return css`
          display: flex;
          gap: 2rem;
        `;
    }
  }}
`;
