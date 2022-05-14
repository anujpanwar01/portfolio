import styled from "styled-components";
export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: ${({ about }) => (about ? "row" : "column")};
  position: ${({ about }) => (about ? "relative" : "fixed")};
  left: ${({ about }) => (about ? "0" : "4.05rem")};
  margin-bottom: ${({ about }) => (about ? "2.4rem" : "0")};
  top: 43.5%;
  cursor: pointer;
  z-index: 500;

  @media only screen and (max-width: 1600px) {
    top: 45%;
  }
  @media only screen and (max-width: 900px) {
    left: 2.8rem;
    top: 45%;
  }
  @media only screen and (max-width: 700px) {
    left: 0;
  }
  ${
    "" /* &:: before {
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
  } */
  }
  @supports not (gap: 2rem) {
    svg:not(:last-child) {
      margin-bottom: 2rem;

      @media only screen and (max-width: 600px) {
        margin: 0 2rem 0 0;
      }
    }
  }
`;
