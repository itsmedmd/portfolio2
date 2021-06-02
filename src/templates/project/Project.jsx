import React from "react";
import { Helmet } from "react-helmet";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Layout, ListImageItem } from "components";
import "./project.scss";

const Project = ({ pageContext }) => {
  const { title, description, features, tools, sharpImg, SVGImages } = pageContext;
  return (
      <Layout className="project">
        <Helmet>
          <title>Deimantas Butėnas - {title}</title>
        </Helmet>

        <h2 className="side-title-right">Project</h2>
        <h2 className="side-title-left">{title}</h2>
        <article>
          <section className="page__section project__banner">
            <GatsbyImage
              image={sharpImg.gatsbyImageData}
              alt=""
            />
          </section>

          <div className="page__action page__action--no-margin project__preview-link">
              <a
                className="button-link button-link--wide"
                href="preview"
              >
                Visit project page
              </a>
          </div>

          <section className="page__section">
            <h1 className="project__title">{title}</h1>
            <p className="page__description">{description}</p>
          </section>

          <section className="page__section">
            <h3 className="page__section-title">
              {features ? "Features and tools:" : "Tools used:"}
            </h3>
            <ul className="page__list">
              { features &&
                features.map((feature, id) =>
                  <li
                    className="page__list-item"
                    key={`${title}-feature-${id}-${feature}`}
                  >
                    {feature}
                  </li>
                )
              }
            </ul>
            <div className="page__skills">
              <ul className="page__skills-column page__skills-column--wide">
                {
                  tools.map((tool, id) =>
                    <ListImageItem
                      img={SVGImages[tool.img]}
                      text={tool.text}
                      key={`${title}-tool-${id}-${tool.text}`}
                    />
                  )
                }
              </ul>
            </div>
          </section>

          <section className="page__section">
            <div className="page__action">
              <Link className="button-link" to="/projects">See other projects</Link>
            </div>
          </section>
        </article>

      </Layout>
  );
};

export default Project;
