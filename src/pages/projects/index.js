import React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout, ProjectLink } from "components";

const Projects = ({ data }) => {
  const { allFile, allProject } = data;

  const createProjectsToRender = () => {
    return allProject.nodes.map(({ id, img, title, slug }, index) => {
      const sharpImg = allFile.nodes.find(
        (imgSharp) => imgSharp.relativePath === img
      );

      return (
        <ProjectLink
          key={`${id}-${index}`}
          title={title}
          slug={slug}
          sharpImg={sharpImg.childImageSharp.gatsbyImageData}
        />
      );
    });
  };

  return (
    <Layout className="projects" noPadding={true} noMaxWidth={true}>
      <Helmet>
        <title>Deimantas Butėnas - Projects</title>
      </Helmet>

      <h1 className="sr-only">Projects</h1>

      <div className="projects__container">{createProjectsToRender()}</div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsQuery {
    allFile(filter: { extension: { regex: "/^((?!svg).)*$/" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 75)
        }
        relativePath
      }
    }
    allProject {
      nodes {
        id
        img
        title
        slug
      }
    }
  }
`;

export default Projects;
