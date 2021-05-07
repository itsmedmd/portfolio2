import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "./projectLink.scss";

export const ProjectLink = ({ title, img, description, slug, projectRef }) => {
  return (
      <div className="projectLink">
          <img className="projectLink__image" src={require(`images/${img}`)} alt="" ref={projectRef}/>
          <div className="projectLink__overlay">
            <p className="projectLink__title">{title.toUpperCase()}</p>
            <Link className="button-link button-link--project projectLink__button" to={`/${slug}`}>Learn more</Link>
            {/*<span className="projectLink__text">{description}</span>*/}
          </div>
      </div>
  );
};
