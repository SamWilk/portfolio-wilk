import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projectJson from "../../projectData/projects.json";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectJson.Projects);
  }, []);

  return (
    <>
      <div className="projectsMain">
        <h2>Projects</h2>
        <span className="projectsContainer">
          {projects.map((project, idx) => {
            return (
              <span key={idx}>
                <ProjectCard props={project} />
              </span>
            );
          })}
        </span>
      </div>
    </>
  );
}

export default Projects;
