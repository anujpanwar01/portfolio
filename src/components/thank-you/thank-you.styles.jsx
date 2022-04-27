import styled from "styled-components";
import { themeHandler } from "../../global-styles/common.styles";
import {
  defaultGradient,
  secondaryGradient,
  tertiaryGradient,
} from "../../global-styles/common.styles";

export const ThankYouSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  position: fixed;
  top: -16%;
  left: -3%;

  background-color: ${({ currrenttheme }) =>
    themeHandler(
      currrenttheme,
      secondaryGradient,
      tertiaryGradient,
      defaultGradient
    )};
`;

export const ThankYouMsg = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background: #eee;
  padding: 2rem;
  border-radius: 0.5rem;
  h3 {
    margin-bottom: 1.6rem;
  }

  div {
    margin-top: 1rem;
    display: flex;
    color: orangered;
    cursor: pointer;

    align-items: center;
    span {
      margin-right: 1.8rem;
      font-size: 2.4rem;
      transition: all 0.4s ease-in-out;
    }
    &:hover span,
    &:active span {
      margin-left: 0.6rem;
      margin-right: 1.6rem;
    }
  }
`;
