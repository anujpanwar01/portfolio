import styled from "styled-components";
import { scroll } from "../../global-styles/common.styles";
export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 6rem;
  ${scroll}
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 75em) {
    padding: 9rem 2rem 8rem;
  }
`;
export const Contact = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 6rem;
  margin-bottom: 6rem;
  @media (max-width: 75em) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;
