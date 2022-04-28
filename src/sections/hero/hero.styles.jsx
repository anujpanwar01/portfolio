import styled from "styled-components";
import { themeHandler } from "../../global-styles/common.styles";
import {
  TextPremiumColor,
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
  defaultGradient,
  secondaryGradient,
  tertiaryGradient,
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

  ${({ currenttheme }) =>
    themeHandler(
      currenttheme,
      secondaryGradient,
      tertiaryGradient,
      defaultGradient
    )}

  div {
    h1 {
      font-size: 7.2rem;
      letter-spacing: 1px;
      margin-bottom: 1.2rem;
    }
  }
`;

export const HeroP = styled.p`
  font-size: 2.4rem;
  margin-bottom: 0.6rem;
  color: ${({ currenttheme }) =>
    themeHandler(currenttheme, ColorSecondary, ColorTertiary, ColorDefault)};
`;

export const HeroH3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 4rem;
  position: relative;
  color: ${TextPremiumColor};
  margin-bottom: 5rem;
  letter-spacing: 0.5px;
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
