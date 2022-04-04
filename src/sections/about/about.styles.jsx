import styled from "styled-components";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
} from "../../global-styles/common.styles";

export const ImageContainer = styled.div`
  width: 30%;
  position: relative;
  box-sizing: content-box;
  background-size: cover;
  z-index: 1;
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 8%;
    top: 5%;
    border: 2px solid
      ${({ currentTheme }) =>
        currentTheme === "black"
          ? ColorSecondary
          : currentTheme === "pink"
          ? ColorTertiary
          : ColorDefault};
    z-index: -1;

    border-radius: 0.5rem;
    transform: scale(0);
    transition: transform 1.5s ease-in-out;
  }
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20rem 0 15rem;
  margin-bottom: 10rem;
  gap: 5rem;

  &:hover ${ImageContainer}::before {
    transform: scale(1);
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 25%;
  gap: 0;
  h3 {
    text-align: left;
    margin-bottom: 2rem;
  }
  h4 {
    color: white;
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
  @supports not (gap: 0) {
    margin-left: 5rem;
  }
`;
export const AboutText = styled.aside`
  color: white;
  font-size: 1.6rem;
  line-height: 1.7;
  letter-spacing: 1px;
  margin-bottom: 3rem;
`;
