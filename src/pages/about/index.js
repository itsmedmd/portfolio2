import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { Layout, ListImageItem } from "components";
import "./index.scss";

const createSVGImagesObject =
  require("utils/createSVGImagesObject").createSVGImagesObject;

const About = ({ data }) => {
  const images = createSVGImagesObject(data.allFile.nodes);
  const { description, experiences, skills, secondarySkills } = data.about;

  const createSkillsList = (array, start, end) => {
    return array
      .slice(start, end)
      .map((item, id) => (
        <ListImageItem
          img={images[item.img]}
          text={item.text}
          key={`about-skill-${start}-${id}-${item.text}`}
        />
      ));
  };

  return (
    <Layout className="about">
      <Helmet>
        <title>Deimantas Butėnas - About</title>
      </Helmet>

      <h1 className="side-title-right">About</h1>
      <h2 className="side-title-left side-title-left--always-enabled">
        Deimantas Butėnas
      </h2>
      <article className="page__content">
        <section className="page__section">
          {description &&
            description.map((paragraph) => (
              <p className="page__description about__paragraph">{paragraph}</p>
            ))}
        </section>

        <section className="page__section">
          <h3 className="page__section-title">I specialise in:</h3>
          <ul className="page__list">
            {experiences &&
              experiences.map((text, id) => (
                <li
                  className="page__list-item"
                  key={`about-experience-${id}-${text}`}
                >
                  {text}
                </li>
              ))}
          </ul>
          <div className="page__skills">
            <ul className="page__skills-column">
              {skills &&
                createSkillsList(skills, 0, Math.ceil(skills.length / 2))}
            </ul>
            <ul className="page__skills-column">
              {skills &&
                createSkillsList(
                  skills,
                  Math.ceil(skills.length / 2),
                  skills.length
                )}
            </ul>
          </div>
        </section>

        <section className="page__section">
          <h3 className="page__section-title">I'm also familiar with:</h3>
          <div className="page__skills page__skills--reduced-margin">
            <ul className="page__skills-column">
              {secondarySkills &&
                createSkillsList(
                  secondarySkills,
                  0,
                  Math.ceil(secondarySkills.length / 2)
                )}
            </ul>
            <ul className="page__skills-column">
              {secondarySkills &&
                createSkillsList(
                  secondarySkills,
                  Math.ceil(secondarySkills.length / 2),
                  secondarySkills.length
                )}
            </ul>
          </div>
        </section>

        <section className="page__section page__section--vertical">
          <a
            className="button-link button-link--small"
            href="https://www.linkedin.com/in/deimantas-but%C4%97nas-85870a192/"
          >
            <img className="button-link__image" src={images.linkedin} alt="" />
            LinkedIn profile
          </a>

          <a
            className="button-link button-link--small"
            href="https://github.com/ElqBell/"
          >
            <img className="button-link__image" src={images.github} alt="" />
            GitHub profile
          </a>
        </section>

        <section className="page__section">
          <div className="page__action">
            <Link className="button-link" to="/projects">
              Projects
            </Link>
            <Link className="button-link" to="/contact">
              Contact
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    allFile(filter: { extension: { regex: "/svg/" } }) {
      nodes {
        relativePath
        publicURL
      }
    }
    about {
      description
      experiences
      skills {
        text
        img
      }
      secondarySkills {
        text
        img
      }
    }
  }
`;

export default About;
