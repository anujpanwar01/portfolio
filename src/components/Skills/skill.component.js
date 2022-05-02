import { useContext } from "react";
import { skillData } from "../../all-data/skill";

import { SectionHeading } from "../../global-styles/common.styles";
import { ThemeContext } from "../../context/theme.context";
import {
  SkillSection,
  SkillSetContainer,
  Skill,
  SkillIcon,
} from "./skill.styles";

function Skills() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <SkillSection>
      <SectionHeading currenttheme={currentTheme}>
        Skills & Tools
      </SectionHeading>

      <SkillSetContainer>
        {skillData.map(({ icon, iconName }) => {
          return (
            <Skill key={Math.random() * 3000}>
              <SkillIcon>{icon}</SkillIcon>
              <span>{iconName}</span>
            </Skill>
          );
        })}
      </SkillSetContainer>
    </SkillSection>
  );
}
export default Skills;
