import React from "react";
import { Link, graphql } from "gatsby";
import { Layout, ListImageItem } from "components";
import "./index.scss";
import { createSVGImagesObject } from "utils";

const About = ({ data }) => {
  const images = createSVGImagesObject(data.allFile.nodes);

  return (
    <Layout className="about">
      <h1 className="side-title-right">About</h1>
      <h2 className="side-title-left">Deimantas Butėnas</h2>
      <article className="about__content">
        <section className="about__section">
          <p className="about__description">
            I don't know who you are. I don't know what you want. If you are looking 
            for a back-end developer, I can tell you I don't have the expertise, but what I do have are a very 
            particular set of skills. Skills I have acquired over many cold and endless nights.
            Skills that make me a delight for people like you. If you exit this website 
            now that'll be the end of it. I will not look for you, I will not pursue you, but
            if you decide to proceed, I will wait for your message, I will reply to you and I will write
            the best front-end code you've seen.
          </p>
        </section>

        <section className="about__section">
          <h3 className="about__section-title">I have experience with:</h3>
          <ul className="about__list">
            <li className="about__list-item">Working on projects in Agile teams</li>
            <li className="about__list-item">Writing clean, efficient and reusable code</li>
            <li className="about__list-item">Developing accessible websites</li>
            <li className="about__list-item">Organising styles using BEM methodology</li>
          </ul>
          <div className="about__skills">
            <ul className="about__skills-column">
              <ListImageItem img={images.react} text="reactjs" />
              <ListImageItem img={images.javascript} text="javascript" />
              <ListImageItem img={images.css} text="css" />
              <ListImageItem img={images.git} text="git" />
            </ul>
            <ul className="about__skills-column">
              <ListImageItem img={images.gatsby} text="gatsby" />
              <ListImageItem img={images.sass} text="sass(scss)" />
              <ListImageItem img={images.html} text="html" />
              <ListImageItem img={images.webpack} text="webpack" />
            </ul>
          </div>
        </section>

        <section
          className="about__section about__section--vertical"
        >
            <a
              className="button-link button-link--small"
              href="https://www.linkedin.com/in/deimantas-but%C4%97nas-85870a192/"
            >
              <img className="button-link__image" src={images.linkedin} alt=""/>
              LinkedIn profile
            </a>

            <a className="button-link button-link--small" href="https://github.com/ElqBell/">
              <img className="button-link__image" src={images.github} alt=""/>
              GitHub profile
            </a>
        </section>

        <section className="about__section">
          <div className="about__action">
            <Link className="button-link" to="/projects">Projects</Link>
            <Link className="button-link" to="/contact">Contact</Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    allFile(filter: {extension: {regex: "/svg/"}}) {
      nodes {
        relativePath
        publicURL
      }
    }
    about {
      description
      experiences
      id
      skills {
        img
        text
      }
    }
  }
`;

export default About;
