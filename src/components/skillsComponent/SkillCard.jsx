import "./SkillCard.css";
import { DiGit } from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiCsharp,
  SiDigitalocean,
  SiNginx,
  SiVite,
  SiJavascript,
  SiCss3,
  SiGit,
  SiMicrosoftazure,
  SiDocker,
  SiDotnet,
  SiPython,
  SiC,
  SiExpress,
  SiMicrosoftsqlserver,
  SiArm,
} from "react-icons/si";

const technologyIcons = {
  SiNextdotjs: <SiNextdotjs size={40} />,
  SiPostgresql: <SiPostgresql size={40} />,
  SiCsharp: <SiCsharp size={40} />,
  SiDigitalocean: <SiDigitalocean size={40} />,
  SiNginx: <SiNginx size={40} />,
  SiVite: <SiVite size={40} />,
  SiJavascript: <SiJavascript size={40} />,
  SiCss3: <SiCss3 size={40} />,
  SiGit: <SiGit size={40} />,
  SiMicrosoftazure: <SiMicrosoftazure size={40} />,
  SiDocker: <SiDocker size={40} />,
  SiDotnet: <SiDotnet size={40} />,
  SiPython: <SiPython size={40} />,
  SiC: <SiC size={40} />,
  SiExpress: <SiExpress size={40} />,
  SiMicrosoftsqlserver: <SiMicrosoftsqlserver size={40} />,
  SiArm: <SiArm size={40} />,
};

function SkillCard({ tech }) {
  return (
    <>
      <div className="skillCardContainer">
        {technologyIcons[tech] || <div>Technology not recognized</div>}
      </div>
    </>
  );
}

export default SkillCard;
