import styled from "styled-components";
import { scroll } from "../../global-styles/common.styles";
export const SectionProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  ${scroll}
  .project-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const BgVideo = styled.video`
  position: absolute;
  top: 0;
  opacity: 0.1;
  height: 100%;
`;
