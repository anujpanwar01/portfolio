import React, { useContext } from "react";
import { themeHandler, btn } from "../../theme-function/theme-handler";
import CustomLink from "../custom-link/custom-link.component";
import { ThemeContext } from "../../context/theme.context";

import {
  ProjectContainer,
  ProjectDetail,
  ImageContainer,
  ButtonContainer,
  ToolContainer,
} from "./project.styles";

const ProjectCard = ({ detail }) => {
  const { currentTheme } = useContext(ThemeContext);

  const { imgUrl, title, overview, tools, source, netlify } = detail;
  const { first, second, third } = tools;

  return (
    <ProjectContainer projectBackground={currentTheme}>
      <ImageContainer title={title}>
        <img src={imgUrl} alt={title} />
      </ImageContainer>
      <ProjectDetail>
        <h2>{title}</h2>
        <p>{overview}</p>

        <ToolContainer>
          <ul>
            <li>{first}</li>
            <li>{second}</li>
            <li>{third}</li>
          </ul>
        </ToolContainer>
        <ButtonContainer>
          <CustomLink
            className={`btn hero-btn ${themeHandler(...btn)}`}
            // className="btn btn-1 "
            target="_blank"
            rel="noreferrer"
            to={netlify}
          >
            Live view
          </CustomLink>
          <CustomLink
            className={`btn hero-btn ${themeHandler(...btn)}`}
            target="_blank"
            rel="noreferrer"
            to={source}
          >
            Source code
          </CustomLink>
        </ButtonContainer>
      </ProjectDetail>
    </ProjectContainer>
  );
};
export default ProjectCard;
