import styled from "styled-components";
import { themeHandler } from "../../global-styles/common.styles";
import {
  TextPremiumColor,
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
} from "../../global-styles/common.styles";

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-around;
  color: ${TextPremiumColor};
  font-family: inherit;
  text-align: center;
  height: 100vh;
  padding: 20rem 12rem;
  margin-bottom: 10rem;
  background-size: cover;
  background-position: center;

  ${"" /* for gradient */}
  ${
    "" /* ${({ currenttheme }) =>
    themeHandler(
      currenttheme,
      secondaryGradient,
      tertiaryGradient,
      defaultGradient
    )} */
  }

  div {
    h2 {
      font-size: 7.2rem;
      letter-spacing: 1px;
      margin-bottom: 1.2rem;
      font-weight: 600;
    }
  }
`;

export const HeroH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${({ currenttheme }) =>
    themeHandler(currenttheme, ColorSecondary, ColorTertiary, ColorDefault)};
`;

export const HeroH3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 4rem;
  position: relative;
  color: ${TextPremiumColor};
  margin-bottom: 6rem;
  letter-spacing: 0.8px;
  font-weight: 500;
  &::after {
    content: "";
    background-color: ${({ currenttheme }) =>
      themeHandler(
        currenttheme,
        ColorSecondary,
        ColorTertiary,
        ColorDefault
      )} !important;

    display: block;
    height: 3px;
    border-radius: 10rem;
    width: 15%;
    left: 42%;
    position: absolute;
    top: 153%;
    transform: translate(0%, 100%);
  }
`;
