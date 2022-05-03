import styled from "styled-components";
import {
  ColorDefault,
  ColorSecondary,
  ColorTertiary,
  themeHandler,
} from "../../global-styles/common.styles";

export const EducationCard = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  position: relative;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const EducationTheme = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5rem 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 2rem 1fr;
    grid-template-rows: 1fr;
    margin-bottom: 2rem;
  }

  & span {
    width: 2rem;
    height: 2rem;
    display: block;
    border-radius: 50%;
    border: 4px solid
      ${({ currenttheme }) =>
        themeHandler(
          currenttheme,
          ColorSecondary,
          ColorTertiary,
          ColorDefault
        )};

    justify-self: center;
  }
  & div {
    height: 68%;
    width: 0.4rem;
    background-color: ${({ currenttheme }) =>
      themeHandler(currenttheme, ColorSecondary, ColorTertiary, ColorDefault)};
    justify-self: center;
    align-self: flex-start;
    @media only screen and (max-width: 900px) {
      height: 20%;
      width: 100%;
      align-self: center;
    }
  }
`;

export const EducationDetails = styled.div`
  display: grid;
  grid-template-columns: 70rem;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 6rem;
  margin-bottom: 4rem;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 60rem;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 55rem;
  }
  @media only screen and (max-width: 570px) {
    grid-template-columns: 46em;
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  & h2 {
    margin-right: 10rem;
    font-size: 2.4rem;
    color: white;
    @media only screen and (max-width: 570px) {
      font-size: 2rem;
    }
  }
  & p {
    margin: 0;
    align-self: flex-end;
    font-size: 1.6rem;
    color: white;
    ${"" /* font-weight: 600; */}
  }
  & div {
    display: grid;
    grid-template-columns: 1fr 10rem;
  }
`;
