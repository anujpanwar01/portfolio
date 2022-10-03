import { ExperienceSection } from "./experience.styles";
import { useRef, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/theme.context";
import useOnScreen from "../../hooks/use-onScreen";
import { Spinner } from "../../components/loading-spinner/loading-spinner.styles";
import useGet from "../../hooks/use-get";
import { SectionHeading } from "../../global-styles/common.styles";

const Experience = (props) => {
  const experienceRef = useRef();
  const { onFullLoadedExeperience } = props;
  const experienceOnScreen = useOnScreen(experienceRef);
  console.log(experienceOnScreen)
  const { currentTheme } = useContext(ThemeContext);
  const [experienceRefValue, setExperienceRefValue] = useState(false);
  const [experience, setExperience] = useState([]);
  const { data, isLoading, error } = useGet("experience", experienceRef, []);

  useEffect(() => {
    let val = [];
    for (let key in data) {
      val.push({
        about: data[key].about,
        company: data[key].company,
        designation: data[key].designation,
        skill: data[key].skills,
        id: key,
      });
    }
    setExperience(val);
  }, [data]);

  useEffect(() => {
    experience.length > 0 && onFullLoadedExeperience(true);
  }, [data, onFullLoadedExeperience, experience]);

  useEffect(() => {
    if (!experienceRefValue) {
      setExperienceRefValue(experienceOnScreen);
    }
  }, [experienceOnScreen, experienceRefValue]);

  let content = <Spinner />;

  if (!isLoading && props.loading && error) {
    content = <p>{error}</p>;
  }

  if (!isLoading && !error) {
    content = (
      <div>
        {" "}
        <SectionHeading currenttheme={currentTheme}>Experience</SectionHeading>
      </div>
    );
  }

  return (
    <ExperienceSection id="experience" ref={experienceRef}>
      {content}
    </ExperienceSection>
  );
};
export default Experience;
