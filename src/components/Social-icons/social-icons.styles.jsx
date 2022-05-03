import styled from "styled-components";
import { themeHandler } from "../../global-styles/common.styles";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
} from "../../global-styles/common.styles";
export const SocialIconsContainer = styled.div`
  display: flex;

  flex-direction: ${({ about }) => (about ? "row" : "column")};
  position: ${({ about }) => (about ? "relative" : "fixed")};
  left: ${({ about }) => (about ? "0" : "4.05rem")};
  margin-bottom: ${({ about }) => (about ? "2.4rem" : "0")};
  top: 40%;
  cursor: pointer;
  z-index: 500;
  gap: ${({ about }) => (about ? "3rem" : "2rem")};

  @media only screen and (max-width: 900px) {
    left: 2.8rem;
  }
  @media only screen and (max-width: 700px) {
    left: 0;
  }
  &:: before {
    content: "";
    display: ${({ about }) => (about ? "none" : "block")};
    width: 3px;
    height: 150%;
    background-color: ${({ currenttheme }) =>
      themeHandler(currenttheme, ColorSecondary, ColorTertiary, ColorDefault)};
    position: absolute;
    left: 50%;
    bottom: 106%;
    height: 115%;
    z-index: -1;
  }
  @supports not (gap: 2rem) {
    svg:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
