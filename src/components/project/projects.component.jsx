import React, { useContext } from "react";
// import { themeHandler, btn } from "../../theme-function/theme-handler";
import CustomLink from "../custom-link/custom-link.component";
import { ThemeContext } from "../../context/theme.context";

import {
  ProjectContainer,
  ProjectDetail,
  ImageContainer,
  ButtonContainer,
  ToolContainer,
} from "./project.styles";

const tool = function (obj) {
  return Object.keys(obj).map((ele) => (
    <li key={Math.random() * 9.24}>{obj[ele]}</li>
  ));
};

const ProjectCard = ({ detail }) => {
  const { currentTheme } = useContext(ThemeContext);

  const { imgUrl, title, overview, tools, source, netlify } = detail;

  return (
    <ProjectContainer projectBackground={currentTheme}>
      <ImageContainer title={title}>
        <img src={imgUrl} alt={title} />
      </ImageContainer>
      <ProjectDetail>
        <h2>{title}</h2>
        <p>{overview}</p>
        <ToolContainer>
          <ul>{tool(tools)}</ul>
        </ToolContainer>
        <ButtonContainer>
          <CustomLink
            currenttheme={currentTheme}
            $navLink="button"
            target="_blank"
            rel="noreferrer"
            to={netlify}
          >
            Live view
          </CustomLink>
          <CustomLink
            currenttheme={currentTheme}
            $navLink="button"
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
