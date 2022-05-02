import styled, { css } from "styled-components";
import {
  ColorSecondary,
  ColorDefault,
  ColorTertiary,
} from "../../global-styles/common.styles";

export const ThemeHandler = css`
  ${(props) => {
    if (props.button) {
      switch (props.currenttheme) {
        case "default":
          return {
            color: ColorDefault,
            border: `2px solid ${ColorDefault}`,
          };
        case "black":
          return {
            color: ColorSecondary,
            border: `2px solid ${ColorSecondary}`,
          };
        default:
          return {
            color: ColorTertiary,
            border: `2px solid ${ColorTertiary}`,
          };
      }
    } else if (props.a) {
    }
  }}
`;

export const ThemeHandlerHover = styled.button`
  ${(props) => {
    switch (props.currenttheme) {
      case "default":
        return css`
          &:hover {
            background-color: #ffa6000c;
          }
        `;
      case "black":
        return css`
          &:hover {
            background-color: #00e5ff10;
          }
        `;
      default:
        return css`
          &:hover {
            background-color: #d4ecdd17;
          }
        `;
    }
  }}
`;

export const CustomButtonStyle = styled(ThemeHandlerHover)`
  padding: ${({ headerButton }) => headerButton && "1.2rem 3rem !important"};
  background-color: transparent;
  ${ThemeHandler}
`;
