import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, ProjectLink } from "components";

const Projects = ({ data }) => {
  const DEFAULT_PROJECT_SIZE = 1024;
  const projectRef = useRef(null);
  const [sliderOffset, setSliderOffset] = useState(0);

  useEffect(() => {
    // calculate the width of the entire slider and center the active project on the screen
    // if the number of projects is odd, center the middle project on first render,
    // if the number of projects is even, center the project before the middle one on first render
    const centerSlider = () => {
      const projectWidth = (projectRef && projectRef.current.offsetWidth) || 0
      let offset = 0;

      if (data) {
        const middleProjectNum = data.allProject.nodes.length / 2;
        offset = (
          middleProjectNum % 2 === 0
          ? middleProjectNum - 1
          : middleProjectNum
          ) * projectWidth / 2;
      }
      setSliderOffset(offset);
    };

    const handleResize = () => {
      centerSlider();
    };

    if (projectRef?.current) {
      centerSlider();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [projectRef, sliderOffset, data]);

  return (
    <Layout className="projects" noMargin={true} noPadding={true}>
      <div className="projects__slider" style={{ transform: `translateX(${sliderOffset !== 0 ? sliderOffset : DEFAULT_PROJECT_SIZE / 2}px)` }}>
        {
            data.allProject.nodes.map(({id, ...projectData}, index) => 
              index === 0
              ? <ProjectLink key={id} {...projectData} projectRef={projectRef} />
              : <ProjectLink key={id} {...projectData} />
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
        fields {
          slug
        }
      }
    }
  }
`;


export default Projects;
