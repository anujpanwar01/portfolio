import education from "./education-data";
import EducationCard from "./Education-card";
import { SectionHeading } from "../../global-styles/common.styles";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
// import { FaGraduationCap } from "react-icons/fa";
import "./education.scss";
const Education = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <section className="education" id="education">
      <SectionHeading currenttheme={currentTheme}>Education</SectionHeading>
      <div>
        {education.map((data) => {
          return (
            <EducationCard
              key={data.id}
              title={data.title}
              year={data.year}
              describe={data.describe}
              college={data.college}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Education;
