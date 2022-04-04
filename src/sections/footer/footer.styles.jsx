import styled from "styled-components";
export const FooterContainer = styled.section`
  display: flex;
  ${"" /* font-size: 1.6rem; */}
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 6rem;
  p {
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
// .footer {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 10rem 0 6rem;

//     /* background-color: #3e5649e8; */
//   }
//   .footer p {
//     font-size: 1.2rem;
//     color: #fff;
//     letter-spacing: 1.5px;
//   }
//   .footer p a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 1.3rem;
//   }
//   .footer p a:hover {
//     color: blue;
//     transition: all 0.3s ease-in-out;
//     text-decoration: underline;
//   }

//   .contact {
//     display: flex;
//     align-items: flex-start;
//     margin-top: 6rem;
//     margin-bottom: 6rem;
//   }
//   @media only screen and (max-width: 1200px) {
//     .footer {
//       padding: 9rem 2rem 8rem;
//     }
//     .contact {
//       flex-direction: column;
//       margin-top: 3rem;
//     }
//   }