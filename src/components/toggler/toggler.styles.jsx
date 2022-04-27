import styled from "styled-components";
export const ToggleNav = styled.div`
  display: none;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: fixed;
  bottom: 6%;
  z-index: 1500;
  right: 5%;

  @media (max-width: 900px) {
    display: flex;
  }
  label {
    background-color: #fff;
    width: 7.5rem;
    height: 7.5rem;
    /* position: fixed; */
    /* top: 3rem; */
    /* right: 5rem; */
    margin-top: 2rem;
    border-radius: 50%;
    z-index: 100;
    -webkit-box-shadow: 0 0.8rem 1rem rgb(0 0 0 / 20%);
    box-shadow: 0 0.8rem 1rem rgb(0 0 0 / 20%);
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3e5649e8;
    span {
      position: relative;
      width: 3rem;
      height: 2px;
      background-color: rgb(255, 255, 255);
      display: inline-block;
      transition: all 0.2s;
      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }
   
    /* gap: 6px; */
  }
`;
