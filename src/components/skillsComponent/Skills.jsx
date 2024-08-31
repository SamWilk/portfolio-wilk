import SkillCard from "./SkillCard";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skillsContainer">
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
        <SkillCard props={{ colorNumber: 1 }} />
      </div>
    </>
  );
}

export default Skills;
