import styled from "styled-components";
import { commonThemeHanlder, scroll } from "../../global-styles/common.styles";

export const ImageContainer = styled.div`
  width: 31%;
  position: relative;
  box-sizing: content-box;
  background-size: cover;
  z-index: 1;
  margin-right: 5rem;

  p {
    color: red;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 900px) {
    width: 60%;
    margin: 5rem 0 0;
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
    border: 2px solid ${({ currenttheme }) => commonThemeHanlder(currenttheme)};

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
  ${"" /* padding: 20rem 0 15rem; */}
  margin-bottom: 10rem;
  ${scroll}
  ${"" /* grid-gap: 5rem; */}

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
  width: 30%;
  grid-gap: 0;
  h3 {
    text-align: left;
    margin-bottom: 1rem;
  }
  h4 {
    color: white;
    font-size: 3.2rem;
    margin-bottom: 1.6rem;
    letter-spacing: 0.6px;
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
  @supports not (grid-gap: 0) {
    margin-left: 5rem;
  }
`;
export const AboutText = styled.aside`
  color: white;
  font-size: 1.8rem;
  line-height: 1.7;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  font-weight: 500;
`;
