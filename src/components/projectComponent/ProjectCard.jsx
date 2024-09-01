import IconComponent from "../iconComponent/IconComponent";
import "./ProjectCard.css";
import { DiUbuntu } from "react-icons/di";

function ProjectCard({ props }) {
  // Extract ProjectName object
  const projectName = props.ProjectName;

  // Destructure properties from ProjectName
  const { Description, Icons, github, Title } = projectName;
  return (
    <>
      <a className="projectCardContainer" href={github} target="_blank">
        <span className="projectCardTitleContainer">
          <strong>{Title}</strong>
          <div className="iconContainer">
            {Icons.map((iconName, idx) => {
              return (
                <span key={idx}>
                  <IconComponent iconName={iconName} />
                </span>
              );
            })}
          </div>
        </span>
        {/* <IconComponent props={Icon} */}
        <p className="projectDescription">{Description}</p>
      </a>
    </>
  );
}

export default ProjectCard;
