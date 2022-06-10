import { memo, useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/theme.context";

import Education from "../../components/Education/education.component";
import { SectionHeading } from "../../global-styles/common.styles";
import { EducationContainer } from "./education.styles";
import useOnScreen from "../../hooks/use-onScreen";
import useGet from "../../hooks/use-get";
import { Spinner } from "../../components/loading-spinner/loading-spinner.styles";

const EducationSection = () => {
  const educationRef = useRef();
  const educationOnScreen = useOnScreen(educationRef);
  const { currentTheme } = useContext(ThemeContext);
  const [educationRefValue, setEducationRefValue] = useState(false);
  const [education, setEducation] = useState([]);
  const { data, isLoading, error } = useGet("education", educationRefValue, []);

  useEffect(() => {
    setEducation(data);
  }, [data]);

  useEffect(() => {
    if (!educationRefValue) {
      setEducationRefValue(educationOnScreen);
    }
  }, [educationOnScreen, educationRefValue]);

  let content = <Spinner />;

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !error) {
    content = educationRefValue && (
      <>
        <SectionHeading currenttheme={currentTheme}>Education</SectionHeading>

        {education.map(({ id, title, year, describe, college }) => {
          return (
            <Education
              key={id}
              title={title}
              year={year}
              describe={describe}
              college={college}
              currenttheme={currentTheme}
            />
          );
        })}
      </>
    );
  }

  return (
    <EducationContainer
      id="education"
      ref={educationRef}
      className={educationRefValue ? "" : "scroll-Top"}
    >
      {content}
    </EducationContainer>
  );
};
export default memo(EducationSection);
