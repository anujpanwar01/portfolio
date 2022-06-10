import styled, { css } from "styled-components";

// const
export const ColorDefault = "#ffa500";
export const ColorSecondary = "#00e7ff";
export const ColorTertiary = "#d4ecdd";

export const TextPremiumColor = "#f8f8f8d2";
export const TextPrimaryColor = "#fff";

//////////////////////////////
export const SectionHeading = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ currenttheme }) =>
    themeHandler(currenttheme, ColorSecondary, ColorTertiary, ColorDefault)};

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
export const commonThemeHanlder = function (currenttheme) {
  return themeHandler(
    currenttheme,
    ColorSecondary,
    ColorTertiary,
    ColorDefault
  );
};

export const defaultGradient = css`
  background: linear-gradient(
    to bottom right,
    #020e21 10%,
    #011d1e 51%,
    #000000 100%
  );
`;
export const secondaryGradient = css`
  background: linear-gradient(
    to bottom right,
    #201b1b 10%,
    #212121 51%,
    #303030 100%
  );
`;

export const tertiaryGradient = css`
  background: linear-gradient(
    to bottom right,
    rgba(66, 39, 90, 1) 51%,
    rgba(115, 75, 109, 1) 100%
  );
`;
export const scroll = css`
  transition: transform 2s ease;
`;
