import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "./projectLink.scss";

export const ProjectLink = ({ title, slug, sharpImg, projectRef }) => {
  return (
      <div className="projectLink" ref={projectRef}>
          <GatsbyImage image={sharpImg} className="projectLink__image" alt=""/>
          <div className="projectLink__overlay">
            <p className="projectLink__title">{title.toUpperCase()}</p>
            <Link className="button-link button-link--project projectLink__button" to={`/${slug}`}>Learn more</Link>
          </div>
      </div>
  );
};
