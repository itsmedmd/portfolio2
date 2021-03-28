import React from "react";
import "./projectLink.scss";

export const ProjectLink = ({ imgSrc, text }) => {
  return (
      <div className="projectLink">
          <img className="projectLink__image" src={imgSrc} alt=""/>
          <span className="projectLink__text">{text}</span>
      </div>
  );
};
