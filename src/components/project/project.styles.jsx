import styled from "styled-components";

const pink = "#36095e";
const black = "#000";
const defaults = "#034348";

export const ProjectContainer = styled.div`
  align-self: center;
  width: 112rem;
  display: grid;
  grid-template-columns: 50rem 1fr;
  font-family: inherit;
  color: #fff;
  padding: 3rem 4rem 3rem 3rem;
  margin-bottom: 10rem;
  border-radius: 1rem;
  column-gap: 6rem;
  position: relative;
  background-color: ${({ projectBackground }) =>
    projectBackground === "black"
      ? black
      : projectBackground === "pink"
      ? pink
      : defaults};
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 60%;
  }
  @media (max-width: 56.25em) {
    border-radius: 0;
    width: 100%;
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 3.2rem;
    text-align: start;
    margin: 1rem 0 1.2rem;
    font-weight: 500;
  }
  p {
    font-size: 1.8rem;
    text-align: start;
    line-height: 1.7;
  }
`;
export const ToolContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  ul {
    display: flex;
    font-size: 1.8rem;
    margin-left: 1.6rem;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    li:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;
export const ImageContainer = styled.div`
  width: 50rem;
  background: ${({ title }) =>
    title === "Keeper App"
      ? "#EEEEEE"
      : title === "Panwar Cloth"
      ? "#786eab"
      : null};
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  ${"" /* margin-right: 5rem; */}
  @media (max-width:1100px) {
    width: 100%;
    margin-bottom: 5rem;
  }
  @media (max-width: 56.25em) {
    width: 100%;
    margin-bottom: 5rem;
  }

  img {
    border-radius: 1rem;
    width: 100%;
    @media (max-width: 56.25em) {
      border-radius: 0.5rem;
    }
  }
`;
export const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${"" /* padding: 0 2rem 0 0; */}
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  grid-gap: 1.6rem;

  @media (max-width: 56.25em) {
    margin-top: 2rem;
  }
`;
