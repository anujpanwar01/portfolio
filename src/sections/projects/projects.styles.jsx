// .section-projects {
//     padding: 10rem 9rem;
//     h3 {
//       margin-bottom: 6rem;
//     }
//   }
import styled from "styled-components";
export const SectionProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  ${"" /* width: 1000px; */}

  ${
    "" /* @media (max-width:90rem) {

  } */
  };
`;
export const BgVideo = styled.video`
  position: absolute;
  top: 0;
  opacity: 0.1;
  height: 100%;
  ${"" /* z-index: 1; */}
`;
//   @media only screen and (max-width: 900px) {
//     .project {
//       flex-direction: column;
//       align-items: center;
//     }
//     .videos {
//       width: 90%;
//       margin-right: 0;
//       height: 30rem;
//       margin-bottom: 5rem;
//       /* background-color: red; */
//     }
//     .videos video {
//       height: inherit;
//     }
//     .project-describe {
//       width: 80%;
//     }
//     .project-describe p {
//       hyphens: auto;
//     }
//   }
