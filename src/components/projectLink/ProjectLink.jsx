import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import { Link } from "gatsby";
import "./projectLink.scss";

export const ProjectLink = ({
  projectID,
  isActive,
  setActiveID,
  noTransition,
  title,
  slug,
  sharpImg,
  projectRef
}) => {
  // check if the screen is wide but with small height
  const isDesktopSmallHeight = useMediaQuery({
    query: "(max-height: 820px) and (min-width: 1200px)"
  });

  const handleNavigation = (target, value) => {
    target.blur();
    setActiveID(projectID + value);
  };

  return (
      <div
        className={`
          projectLink
          ${isActive ? "projectLink--active" : ""}
          ${noTransition ? "projectLink--no-transition" : ""}
        `}
        ref={projectRef}
      >
          <GatsbyImage
            image={sharpImg}
            className="projectLink__image-container"
            imgClassName="projectLink__image"
            alt=""
            objectFit={isDesktopSmallHeight ? "contain" : "cover"}
          />
          
          <div
            className={`
              projectLink__overlay
              ${isActive ? "projectLink__overlay--active" : ""}
              ${noTransition ? "projectLink__overlay--no-transition" : ""}
            `}
          >
            <h2 className="projectLink__title">{title.toUpperCase()}</h2>

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
