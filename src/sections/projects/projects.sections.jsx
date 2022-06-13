import { memo, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/theme.context";
import ProjectCard from "../../components/project/projects.component";

import { SectionHeading } from "../../global-styles/common.styles";
import { SectionProjects, BgVideo } from "./projects.styles";
import bgVideo from "../../assister/bg.mp4";
import useOnScreen from "../../hooks/use-onScreen";
import useGet from "../../hooks/use-get";
import { Spinner } from "../../components/loading-spinner/loading-spinner.styles";

const ProjectPage = (props) => {
  const projectRef = useRef();
  const projectOnScreen = useOnScreen(projectRef);
  const { currentTheme } = useContext(ThemeContext);
  const [projectRefValue, setProjectRefValue] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const { data, isLoading, error } = useGet("project", projectRefValue, []);

  useEffect(() => {
    projectData.length > 0 && props.onFullLoadedProject(true);
    setProjectData(data);
  }, [data, props, projectData]);

  useEffect(() => {
    if (!projectRefValue) {
      setProjectRefValue(projectOnScreen);
    }
  }, [projectOnScreen, projectRefValue]);

  let content = (
    <div className="project-center">
      <Spinner />
    </div>
  );

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !error) {
    content = projectRefValue && (
      <>
        <SectionHeading currenttheme={currentTheme}>Projects</SectionHeading>
        <BgVideo autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </BgVideo>
        {projectData.map((allDetail) => (
          <ProjectCard key={allDetail.id} detail={allDetail} />
        ))}
      </>
    );
  }
  return (
    <SectionProjects id="projects" ref={projectRef}>
      {content}
    </SectionProjects>
  );
};

export default memo(ProjectPage);
