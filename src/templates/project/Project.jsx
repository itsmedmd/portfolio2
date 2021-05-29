import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Layout, ListImageItem } from "components";
import "./project.scss";

const Project = ({ pageContext }) => {
  const { description, features, slug, title, tools, id, sharpImg, SVGImages } = pageContext;
  console.log(pageContext);
  return (
      <Layout className="project">
        <h2 className="side-title-right">Project</h2>
        <h2 className="side-title-left">{title}</h2>
        <article className="project__content">
          <section className="page__section">
            <GatsbyImage
              image={sharpImg.gatsbyImageData}
              className=""
              imgClassName=""
              alt=""
            />
            <GatsbyImage
              image={sharpImg.coloredImg}
              className=""
              imgClassName=""
              alt=""
            />
            <GatsbyImage
              image={sharpImg.coloredImg}
              className=""
              imgClassName=""
              alt=""
            />
          </section>

          <h1 className="project__title">{title}</h1>

          <section className="page__section">
            <p className="page__description">{description}</p>
          </section>

          <section className="page__section">
            <h3 className="page__section-title">
              {features ? "Features and tools:" : "Tools used:"}
            </h3>
            <ul className="page__list">
              { features &&
                features.map((text, id) =>
                  <li
                    className="page__list-item"
                    key={`${title}-feature-${id}-${text}`}
                  >
                    {text}
                  </li>
                )
              }
            </ul>
            <div className="page__skills">
              <ul className="page__skills-column">
                {
                  tools.map((text, id) =>
                    <ListImageItem text={text} key={`${title}-tool-${id}-${text}`}/>
                  )
                }
              </ul>
            </div>
          </section>
        </article>

      </Layout>
  );
};

export default Project;
