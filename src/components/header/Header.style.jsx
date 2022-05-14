import styled, { css } from "styled-components";
import { NavLinks } from "../navigation-links/navigation.styles";
import { commonThemeHanlder } from "../../global-styles/common.styles";

const logoAfter = (currenttheme, top) => css`
  &::after {
    content: "";
    width: 0.3rem;
    height: 23rem;
    top: ${top};
    left: 47%;
    display: block;
    position: absolute;
    background: ${commonThemeHanlder(currenttheme)};
  }
`;

export const Head = styled.header`
  display: flex;
  box-shadow: 0px 1px 5px #0000008c;

  font-size: 1.6rem;
  padding: 1rem 4rem 0.4rem 3.25rem;
  position: fixed;
  width: 100%;
  z-index: 100;

  @media only screen and (max-width: 900px) {
    width: 100%;
    top: 0;
    grid-gap: 0;
    bottom: 8rem;
    align-items: flex-start;
    justify-content: space-between;
    height: 7rem;
    padding: 1.2rem 2rem 0.4rem 2rem;
  }
  @media only screen and (max-width: 500px) {
    padding: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    margin-left: auto;
    @media only screen and (max-width: 900px) {
      position: absolute;
      display: none;
    }
  }
`;

export const LogoContainer = styled(NavLinks)`
  position: relative;
  z-index: 100000;
  cursor: pointer;
  ${({ currenttheme }) => {
    return logoAfter(currenttheme, "80%");
  }}
  @media only screen and (max-width: 900px) {
    ${({ currenttheme }) => {
      return logoAfter(currenttheme, "85%");
    }}
  }
  @media only screen and (max-width: 700px) {
    &::after {
      display: none;
    }
  }
  span {
    position: absolute;

    text-transform: uppercase;
    font-weight: 600;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logo-icon {
    color: inherit;
  }
`;
