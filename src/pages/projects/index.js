import React from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, ProjectLink } from "components";


const Projects = ({ data }) => {
  return (
    <Layout className="projects" noMargin={true} noPadding={true}>
      <div className="projects__slider">
        {
            data.allProject.nodes.map(({id, ...projectData}) => 
              <ProjectLink key={id} {...projectData} />
            )
        }
      </div>
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
