import styled from "styled-components";
export const ToggleNav = styled.div`
  display: none;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: fixed;
  bottom: 6%;
  z-index: 1500000;
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
    div {
      display: flex;
    }
    span {
      position: relative;
      width: 3rem;
      height: 2px;
      background-color: rgb(255, 255, 255);
      display: inline-block;
      transition: transform 0.5s ease-in;

      &:not(:last-child) {
        margin-bottom: 0.9rem;
      }
    }
    .toggle {
      width: 1.5rem;
    }
    .toggle1 {
      transform: rotate(45deg);
      width: 4rem;
      transform: rotate(402deg) translate(7px, 9px);
    }
    .toggle2,
    .toggle4 {
      width: 2rem;
      height: 3px;
      transform: scale(0);
    }
    .toggle2 {
      transform-origin: left;
    }
    .toggle4 {
      transform-origin: right;
    }
    .toggle3 {
      transform: rotate(-410deg) translate(9px, -9px);
      width: 4rem;
    }

    /* gap: 6px; */
  }
`;
