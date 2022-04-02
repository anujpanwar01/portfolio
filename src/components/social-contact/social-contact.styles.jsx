import styled from "styled-components";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
} from "../../global-styles/common.styles";
import { themeHandler } from "../../theme-function/theme-handler";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18rem;
  @media (max-width: 75em) {
    margin-right: 0rem;
    margin-bottom: 5rem;
  }
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
`;
export const IconContainer = styled.span`
  padding: 2rem;

  border-radius: 50%;
  margin-right: 3rem;
  background-color: ${({ currentTheme }) =>
    currentTheme === "black"
      ? ColorSecondary
      : currentTheme === "pink"
      ? ColorTertiary
      : ColorDefault};

  svg {
    color: ${themeHandler(ColorDefault, "#fff", ColorTertiary)};
  }
`;
