import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import "./projectLink.scss";

export const ProjectLink = ({ title, img, description, slug, projectRef }) => (
  // sita iskelt i projects page query, kad tik 1 karta executintu query
  // + isfiltruot kuriuos reikia ir paduot childImageSharp data ir cia tiesiog renderint
  <StaticQuery
    query={graphql`
      query ProjectLinkImageQuery {
        allFile {
          nodes {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            relativePath
          }
        }
      }
    `}
    render={data => {
      console.log("yoo", data);
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
    }}
  />
);
