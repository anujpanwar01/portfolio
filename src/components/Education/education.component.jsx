import {
  EducationCard,
  EducationTheme,
  EducationDetails,
} from "./education.styles";

const Education = ({ title, year, describe, college, currenttheme }) => {
  return (
    <EducationCard>
      <EducationTheme currenttheme={currenttheme}>
        <span />
        <div />
      </EducationTheme>
      <EducationDetails>
        <h2>{title}</h2>
        <p>{describe}</p>
        <div>
          <p>{college}</p>
          <p>{year}</p>
        </div>
      </EducationDetails>
    </EducationCard>
  );
};

export default Education;
