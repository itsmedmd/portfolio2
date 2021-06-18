import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./projectLink.scss";

export const ProjectLink = ({ title, slug, sharpImg }) => {
  return (
    <div className="project-link">
      <GatsbyImage
        image={sharpImg}
        className="project-link__image-container"
        imgClassName="project-link__image"
        alt="Project preview image"
        objectFit="contain"
      />

      <div className="project-link__overlay">
        <h2 className="project-link__title">{title.toUpperCase()}</h2>
        <Link
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
