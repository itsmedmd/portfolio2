import React from "react";
import { Link } from "gatsby";
import "./projectLink.scss";

export const ProjectLink = ({ title, img, description, projectRef }) => {
  return (
      <div className="projectLink">
          <img className="projectLink__image" src={require(`images/${img}`)} alt="" ref={projectRef}/>
          {/*<span className="projectLink__text">{title}</span>*/}
          {/*<span className="projectLink__text">{description}</span>*/}
      </div>
  );
};
