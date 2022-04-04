import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import ProjectCard from "../../components/project/projects.component";
import projects from "../../all-data/project.json";
import { SectionHeading } from "../../global-styles/common.styles";
import { SectionProjects, BgVideo } from "./projects.styles";
import bgVideo from "../../assister/bg.mp4";
const ProjectPage = () => {
  // console.log(projects);
  const { currentTheme } = useContext(ThemeContext);
  console.log(projects);
  return (
    <SectionProjects>
      <SectionHeading currentTheme={currentTheme}>Projects</SectionHeading>
      <BgVideo autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </BgVideo>
      {projects.map((allDetail) => (
        <ProjectCard key={allDetail.id} detail={allDetail} />
      ))}
    </SectionProjects>
  );
};

export default ProjectPage;
