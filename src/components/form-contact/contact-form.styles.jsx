import styled from "styled-components";
export const FormContainer = styled.form`
  display: flex;
  font-family: inherit;
  flex-direction: column;
  font-size: 1.6rem;
  margin-bottom: 3rem;
  .footer-form {
    ::placeholder {
      color: #454545d2;
      font-weight: 500;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
  .footer-contact {
    @media only screen and (max-width: 800px) {
      margin-top: 2rem;
    }
  }
`;
