import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import ProjectCard from "../../components/project/projects.component";
import { projectData } from "../../all-data/project.js";
import { SectionHeading } from "../../global-styles/common.styles";
import { SectionProjects, BgVideo } from "./projects.styles";
import bgVideo from "../../assister/bg.mp4";
const ProjectPage = () => {
  // console.log(projects);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <SectionProjects id="projects">
      <SectionHeading currentTheme={currentTheme}>Projects</SectionHeading>
      <BgVideo autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </BgVideo>
      {projectData.map((allDetail) => (
        <ProjectCard key={allDetail.id} detail={allDetail} />
      ))}
    </SectionProjects>
  );
};

export default ProjectPage;
