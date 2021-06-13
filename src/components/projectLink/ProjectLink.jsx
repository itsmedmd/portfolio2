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
  projectRef,
  isInSlider,
}) => {
  // check if the screen is wide but with small height
  const isDesktopSmallHeight = useMediaQuery({
    query: "(max-height: 820px) and (min-width: 1160px)",
  });

  const handleNavigation = (target, value) => {
    target.disabled = true;
    target.blur();
    setActiveID(projectID + value, target);
  };

  return (
    <div
      className={`
          project-link
          ${isActive && isInSlider ? " project-link--active" : ""}
          ${noTransition && isInSlider ? " project-link--no-transition" : ""}
        `}
      ref={projectRef}
    >
      <GatsbyImage
        image={sharpImg}
        className="project-link__image-container"
        imgClassName="project-link__image"
        alt="Project preview image"
        objectFit={isDesktopSmallHeight ? " contain" : "cover"}
      />

      <div
        className={`
          project-link__overlay
          ${isActive || !isInSlider ? " project-link__overlay--active" : ""}
          ${
            noTransition && isInSlider
              ? " project-link__overlay--no-transition"
              : ""
          }
        `}
      >
        <h2 className="project-link__title">{title.toUpperCase()}</h2>

        {isInSlider && (
          <div className="project-link__navigation">
            <button
              type="button"
              tabIndex={isActive ? "0" : "-1"}
              onClick={(e) => handleNavigation(e.target, -1)}
              className="project-link__navigate project-link__navigate--left"
            >
              &#8249;
              <p className="sr-only">Previous project</p>
            </button>
            <button
              type="button"
              tabIndex={isActive ? "0" : "-1"}
              onClick={(e) => handleNavigation(e.target, 1)}
              className="project-link__navigate project-link__navigate--right"
            >
              &#8250;
              <p className="sr-only">Next project</p>
            </button>
          </div>
        )}

        <Link
          tabIndex={isActive || !isInSlider ? "0" : "-1"}
          className="button-link button-link--project project-link__link"
          to={`/${slug}`}
        >
          Learn more
          <p className="sr-only">about project {title}</p>
        </Link>
      </div>
    </div>
  );
};
