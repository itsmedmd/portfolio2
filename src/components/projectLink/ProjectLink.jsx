import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./projectLink.scss";

export const ProjectLink = ({ projectID, isActive, setActiveID, title, slug, sharpImg, projectRef }) => {
  const handleNavigation = (target, value) => {
    target.blur();
    setActiveID(projectID + value);
  };

  return (
      <div className="projectLink" ref={projectRef}>
          <GatsbyImage image={sharpImg} className="projectLink__image" alt=""/>
          <div className={`projectLink__overlay ${isActive && "projectLink__overlay--active "}`}>
            <div className="projectLink__navigation">
              <button
                type="button"
                tabIndex={isActive ? "0" : "-1"}
                onClick={(e) => handleNavigation(e.target, -1)}
                className="projectLink__navigate projectLink__navigate--left"
              >
                &#8249;
                <p className="sr-only">Previous project</p>
              </button>
              <button
                type="button"
                tabIndex={isActive ? "0" : "-1"}
                onClick={(e) => handleNavigation(e.target, 1)}
                className="projectLink__navigate projectLink__navigate--right"
              >
                &#8250;
                <p className="sr-only">Next project</p>
              </button>
            </div>
            <p className="projectLink__title">{title.toUpperCase()}</p>
            <Link
              tabIndex={isActive ? "0" : "-1"}
              className="button-link button-link--project projectLink__link"
              to={`/${slug}`}
            >
              Learn more
              <p className="sr-only">about project {title}</p>
            </Link>
          </div>
      </div>
  );
};
