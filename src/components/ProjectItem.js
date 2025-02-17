import React from "react";

function ProjectItem({ name, about, technologies }) {
  let spans = technologies.map(name => <span key={name}>{name}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spans}
      </div>
    </div>
  );
}

export default ProjectItem;
