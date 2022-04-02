import styled from "styled-components";
import { css } from "styled-components";
import { TextPremiumColor } from "../../global-styles/common.styles";

export const CustomInputContainer = styled.input`
  font-size: 1.6rem;
  font-family: inherit;
  padding: 2rem;
  border-radius: 1rem;
  background: ${TextPremiumColor};
  border: none;
  outline: #3e5649e8;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
  &::placeholder {
    color: #000;
    font-family: inherit;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }

  ${(props) => {
    switch (props.name) {
      case "name":
        return css`
          width: 100%;
          margin-right: 0;
          margin-bottom: 2rem;
        `;
      case "email":
      case "number":
        return css`
          width: 30rem;
        `;
      default:
        break;
    }
  }}
`;
export const TextArea = styled.textarea`
  font-size: 1.6rem;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
  font-family: inherit;
  background: ${TextPremiumColor};
  outline: #3e5649e8;
  letter-spacing: 1px;
  width: 100%;
  height: 10rem;
  resize: none;
  &::placeholder {
    color: #000;
  }

  @media (max-width: 800px) {
    margin: 0;
  }
`;
