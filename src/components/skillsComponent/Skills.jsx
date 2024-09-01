import SkillCard from "./SkillCard";
import "./Skills.css";

function Skills() {
  const technologies = [
    "SiNextdotjs",
    "SiPostgresql",
    "SiCsharp",
    "SiDigitalocean",
    "SiNginx",
    "SiVite",
    "SiJavascript",
    "SiCss3",
    "SiGit",
    "SiMicrosoftazure",
    "SiDocker",
    "SiDotnet",
    "SiPython",
    "SiC",
    "SiExpress",
    "SiMicrosoftsqlserver",
    "SiArm",
  ];

  return (
    <>
      <div className="skillsMain">
        <h2>Skills</h2>
        <div className="skillsContainer">
          {technologies.map((value, idx) => {
            return <SkillCard key={idx} tech={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
