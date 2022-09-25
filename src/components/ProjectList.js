import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const List = projects.map((project)=>{
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
  });
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {List}
        </div>
    </div>
  );
}

export default ProjectList;
