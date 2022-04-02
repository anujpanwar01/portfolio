import styled from "styled-components";
import { themeHandler } from "../../theme-function/theme-handler";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
} from "../../global-styles/common.styles";
export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 4rem;
  top: 40%;
  cursor: pointer;
  z-index: 500;
  gap: 2rem;
  &:: before {
    content: "";
    display: block;
    width: 3px;
    height: 150%;
    background-color: ${({ currentTheme }) =>
      currentTheme === "pink"
        ? ColorTertiary
        : currentTheme === "black"
        ? ColorSecondary
        : ColorDefault};
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
