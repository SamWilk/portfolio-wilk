import "./IconComponent.css";
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
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const technologyIcons = {
  SiNextdotjs: <SiNextdotjs size={20} />,
  SiPostgresql: <SiPostgresql size={20} />,
  SiCsharp: <SiCsharp size={20} />,
  SiDigitalocean: <SiDigitalocean size={20} />,
  SiNginx: <SiNginx size={20} />,
  SiVite: <SiVite size={20} />,
  SiJavascript: <SiJavascript size={20} />,
  SiCss3: <SiCss3 size={20} />,
  SiGit: <SiGit size={20} />,
  SiMicrosoftazure: <SiMicrosoftazure size={20} />,
  SiDocker: <SiDocker size={20} />,
  SiDotnet: <SiDotnet size={20} />,
  SiPython: <SiPython size={20} />,
  SiC: <SiC size={20} />,
  SiExpress: <SiExpress size={20} />,
  SiMicrosoftsqlserver: <SiMicrosoftsqlserver size={20} />,
  SiArm: <SiArm size={20} />,
  SiReact: <SiReact size={20} />,
  SiNodedotjs: <SiNodedotjs size={20} />,
};

const IconComponent = ({ iconName }) => {
  return (
    <div className="iconUnit">{technologyIcons[iconName] || <>Nope</>}</div>
  );
};

export default IconComponent;
