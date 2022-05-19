import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(proj => <ProjectItem 
        name={proj.name}
        about={proj.about}
        technologies={proj.technologies}
        key={proj.id}
        />)}
      </div>
    </div>
  );
}

export default ProjectList;
