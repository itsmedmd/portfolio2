import React from "react";
import { graphql } from "gatsby";
import { Layout, ProjectLink } from "components";


const Projects = ({ data }) => {
  console.log(data.allProject.nodes);

  return (
    <Layout className="projects">
      <h2 className="side-title-left">Deimantas Butėnas</h2>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsQuery {
    allProject {
      nodes {
        id
        description
        img
        title
      }
    }
  }
`;


export default Projects;
