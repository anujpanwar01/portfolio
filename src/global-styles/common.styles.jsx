import styled, { css } from "styled-components";

// const
export const ColorDefault = "#ffa500";
export const ColorSecondary = "#00e7ff";
export const ColorTertiary = "#d4ecdd";

export const DefaultGradient = "";
export const SecondaryGradient = "";
export const TertiaryGradient = "";

export const TextPremiumColor = "#f8f8f8d2";
export const TextPrimaryColor = "#fff";

//////////////////////////////
export const SectionHeading = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  color: ${({ currentTheme }) =>
    currentTheme === "pink"
      ? ColorTertiary
      : currentTheme === "black"
      ? ColorSecondary
      : ColorDefault};
  font-family: inherit;
  margin-bottom: 6rem;
  letter-spacing: 1px;
  text-align: center;
  z-index: 10;
`;
//mixins
export const FlexCenter = css`
display:flex;
align-items:center,
justify-content:center,
`;
export function themeHandler(currenttheme, color1, color2, color3) {
  return currenttheme === "black"
    ? color1
    : currenttheme === "pink"
    ? color2
    : color3;
}
