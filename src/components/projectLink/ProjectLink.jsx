import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./projectLink.scss";

export const ProjectLink = ({ title, slug, sharpImg, projectRef }) => {
  return (
      <div className="projectLink" ref={projectRef}>
          <GatsbyImage image={sharpImg} className="projectLink__image" alt=""/>
          <div className="projectLink__overlay">
            <div className="projectLink__navigation">
              <button type="button" className="projectLink__navigate projectLink__navigate--left">&#8249;</button>
              <button type="button" className="projectLink__navigate projectLink__navigate--right">&#8250;</button>
            </div>
            <p className="projectLink__title">{title.toUpperCase()}</p>
            <Link className="button-link button-link--project projectLink__link" to={`/${slug}`}>Learn more</Link>
          </div>
      </div>
  );
};
