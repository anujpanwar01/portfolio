import styled from "styled-components";
import { commonThemeHanlder } from "../../global-styles/common.styles";
// @import "../../common-sass/common.styles.scss";
export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ currenttheme }) => commonThemeHanlder(currenttheme)};

    border-color: ${({ currenttheme }) => commonThemeHanlder(currenttheme)}
      transparent ${({ currenttheme }) => commonThemeHanlder(currenttheme)}
      transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
