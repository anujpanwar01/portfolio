import styled from "styled-components";
import { scroll } from "../../global-styles/common.styles";

export const EducationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12rem 0 14rem;
  transition: transform 2s ease;
  ${scroll}
  @media only screen and (max-width: 650px) {
    padding: 12rem 2rem 14rem;
  }
`;
