import * as React from "react";
import { Link } from "gatsby";
import { Layout, ListImageItem } from "components";
import "./index.scss";

const About = () => {
  return (
    <Layout className="about">
      <h1 className="side-title-right">About</h1>
      <h2 className="side-title-left">Deimantas Butėnas</h2>
      <article className="about__content">
        <section className="about__section">
          <p className="about__description">
            I don't know who you are. I don't know what you want. If you are looking 
            for ransom I can tell you I don't have money, but what I do have are a very 
            particular set of skills. Skills I have acquired over a very long career. Skills
            that make me a nightmare for people like you. If you let my daughter go 
            now that'll be the end of it. I will not look for you, I will not pursue you, but
            if you don't, I will look for you, I will find you and I will kill you.
          </p>
        </section>

        <section className="about__section">
          <h3 className="about__section-title">I have experience with:</h3>
          <ul className="about__list">
            <li className="about__list-item">Working on projects in Agile teams</li>
            <li className="about__list-item">Writing clean, efficient and reusable code</li>
            <li className="about__list-item">Developing accessible websites</li>
          </ul>
          <div className="about__skills">
            <ul className="about__skills-column">
              <ListImageItem imgSrc={require("images/react.svg")} text="reactjs" />
              <ListImageItem imgSrc={require("images/javascript.svg")} text="javascript" />
              <ListImageItem imgSrc={require("images/css.svg")} text="css" />
              <ListImageItem imgSrc={require("images/git.svg")} text="git" />
            </ul>
            <ul className="about__skills-column">
              <ListImageItem imgSrc={require("images/gatsby.svg")} text="gatsby" />
              <ListImageItem imgSrc={require("images/sass.svg")} text="sass" />
              <ListImageItem imgSrc={require("images/html.svg")} text="html" />
              <ListImageItem imgSrc={require("images/webpack.svg")} text="webpack" />
            </ul>
          </div>
        </section>

        <section className="about__section about__section--centered">
            <a className="button-link button-link--with-img" href="https://github.com/ElqBell">
              <img className="button-link__image" src={require("images/github.svg")} alt=""/>
              My github profile
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

export default About;
