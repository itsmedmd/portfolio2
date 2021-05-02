import React from "react";
import "./projectLink.scss";

export const ProjectLink = ({ title, img, description }) => {
  return (
      <div className="projectLink">
          <img className="projectLink__image" src={require(`images/${img}`)} alt=""/>
          {/*<span className="projectLink__text">{title}</span>*/}
          {/*<span className="projectLink__text">{description}</span>*/}
      </div>
  );
};
