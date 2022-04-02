import styled from "styled-components";
export const FormContainer = styled.form`
  display: flex;
  font-family: inherit;
  flex-direction: column;
  font-size: 1.6rem;
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;
