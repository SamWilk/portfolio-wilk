import "./ProjectCard.css";
import { DiUbuntu } from "react-icons/di";

function ProjectCard({ props }) {
  return (
    <>
      <div className="projectCardContainer">
        <h3>Title</h3>
        <DiUbuntu size={50} />
        <p className="projectDescription">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Primis interdum
          nisl lobortis venenatis vivamus facilisi ante. Risus habitasse metus
          amet natoque at purus senectus ipsum.
        </p>
      </div>
    </>
  );
}

export default ProjectCard;
