import { useContext, useEffect, useRef, useState } from "react";
import { skillData } from "../../all-data/skill";

import { SectionHeading } from "../../global-styles/common.styles";
import { ThemeContext } from "../../context/theme.context";
import {
  SkillSection,
  SkillSetContainer,
  Skill,
  SkillIcon,
} from "./skill.styles";
import useOnScreen from "../../hooks/use-onScreen";

function Skills(props) {
  const skillRef = useRef();
  const skillOnScreen = useOnScreen(skillRef);
  const { currentTheme } = useContext(ThemeContext);
  const [skillRefValue, setSkillRefValue] = useState(false);

  setTimeout(() => {
    props.onFullLoadedSkill(true);
  }, 1000);
  useEffect(() => {
    if (!skillRefValue) {
      setSkillRefValue(skillOnScreen);
    }
  }, [skillOnScreen, skillRefValue]);
  return (
    <SkillSection ref={skillRef} className={skillRefValue ? "" : "scroll-Top"}>
      {skillRefValue && (
        <>
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
        </>
      )}
    </SkillSection>
  );
}
export default Skills;
