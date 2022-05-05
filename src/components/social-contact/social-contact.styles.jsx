import styled from "styled-components";

import {
  commonThemeHanlder,
  themeHandler,
} from "../../global-styles/common.styles";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18rem;
  @media (max-width: 75em) {
    margin-right: 0rem;
    margin-bottom: 5rem;
  }
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }
`;
export const IconContainer = styled.span`
  padding: 2rem;

  border-radius: 50%;
  margin-right: 3rem;
  background-color: ${({ currenttheme }) => commonThemeHanlder(currenttheme)};


  svg {
    color: ${({ currenttheme }) =>
      themeHandler(currenttheme, "black", "blue", "white")}
     
      };
  }
`;
