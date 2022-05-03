import styled from "styled-components";
export const SkillSection = styled.section`
  padding: 12rem 8rem 14rem;
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;
  display: flex;
  ${"" /* align-items: center; */}
  flex-direction: column;
  position: relative;
  margin-bottom: 10rem;

  @media (max-width: 650px) {
    padding: 12rem 2rem 14rem;
  }
  @media (max-width: 500px) {
    padding: 9rem 1rem 10rem;
  }
`;
export const SkillSetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4rem;
  @supports not (gap: 4rem) {
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  grid-gap: 1rem;
  @supports not (gap: 1rem) {
    margin-bottom: 4rem;
    margin-right: 4rem;
  }
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
`;
export const SkillIcon = styled.span`
  font-size: 6rem;
  grid-gap: 0;
  @supports not (gap: 0) {
    margin-bottom: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 4rem;
  }
`;
