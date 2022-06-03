import { memo, useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import education from "../../all-data/education";
import Education from "../../components/Education/education.component";
import { SectionHeading } from "../../global-styles/common.styles";
import { EducationContainer } from "./education.styles";

const EducationSection = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <EducationContainer id="education">
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
    </EducationContainer>
  );
};
export default memo(EducationSection);
