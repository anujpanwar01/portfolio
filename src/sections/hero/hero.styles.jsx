import styled from "styled-components";
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
`;
export const HeroText = styled.div`
  position: relative;
  p {
    font-size: 2.4rem;
    margin-bottom: 0.6rem;
  }
  h1 {
    font-size: 7.2rem;
    letter-spacing: 1px;
    margin-bottom: 1.2rem;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 4rem;
    position: relative;
    color: ${TextPremiumColor};
    margin-bottom: 5rem;

    &::after {
      content: "";
      background-color: ${({ currentTheme }) =>
        currentTheme === "black"
          ? ColorSecondary
          : currentTheme === "pink"
          ? ColorTertiary
          : ColorDefault};
      display: block;
      height: 3px;
      border-radius: 10rem;
      width: 20%;
      left: 40%;
      position: absolute;
      top: 150%;
      transform: translate(0%, 100%);
    }
  }
`;
