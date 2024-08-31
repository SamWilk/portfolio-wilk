import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projectsContainer">
        <ProjectCard props={{ colorNumber: 1 }} />
        <ProjectCard props={{ colorNumber: 1 }} />
        <ProjectCard props={{ colorNumber: 1 }} />
        <ProjectCard props={{ colorNumber: 1 }} />
        <ProjectCard props={{ colorNumber: 1 }} />
        <ProjectCard props={{ colorNumber: 1 }} />
        <ProjectCard props={{ colorNumber: 1 }} />
      </div>
    </>
  );
}

export default Projects;
