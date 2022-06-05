import { Skill } from "../../interfaces/Skill";
import ResumeSkillsItem from "./ResumeSkillItem";

interface Props {
  skills: any;
}

const ResumeSkillsList: React.FC<Props> = ({ skills }) => {
  return (
    <>
      {skills.length > 0 &&
        skills.map((skill: any, i: number) => {
          return (
            <div key={i} className="skill-container">
              <div className="block-title">
                <h3>
                  {skill.name} <span>Skills</span>
                </h3>
              </div>

              <div className="skills-info skills-second-style">
                <ResumeSkillsItem list={skill.list} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ResumeSkillsList;
