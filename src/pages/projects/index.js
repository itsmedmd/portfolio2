import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, ProjectLink } from "components";

const Projects = ({ data }) => {
  console.log("QUEEN: ", data);
  const { allFile, allProject } = data;
  const DEFAULT_PROJECT_SIZE = 1024;
  const projectRef = useRef(null);
  const [sliderOffset, setSliderOffset] = useState(0);

  // Only 'allFile' entries that have "childImageSharp" are important.
  // *.svg files don't have it, those svg files are not used here.
  const allImages = allFile.nodes.filter(file => file.childImageSharp); 

  /////////////////////////////////////////// REMAKE THIS /////////////////////////////////////////////////////////////
  useEffect(() => {
    // Calculate the width of the entire slider and center the active project on the screen/
    // If the number of projects is odd, center the middle project on the first render,
    // if the number of projects is even, center the project before the middle one on the first render.
    const centerSlider = () => {
      const projectWidth = (projectRef?.current?.offsetWidth) || 0
      let offset = 0;

      if (allProject) {
        const middleProjectNum = allProject.nodes.length / 2;
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
  }, [projectRef, sliderOffset, allProject]);

  return (
    <Layout className="projects" noMargin={true} noPadding={true}>
      <div className="projects__slider" style={{ transform: `translateX(${sliderOffset !== 0 ? sliderOffset : DEFAULT_PROJECT_SIZE / 2}px)` }}>
        {
            allProject.nodes.map(({id, img, title, slug}, index) => {
              const sharpImg = allImages.find(imgSharp => imgSharp.relativePath === img);
              return (
                <ProjectLink
                  key={id}
                  title={title}
                  slug={slug}
                  sharpImg={sharpImg.childImageSharp.gatsbyImageData}
                  projectRef={index === 0 ? projectRef : undefined}
                />
              );
            })
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsQuery {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
        relativePath
      }
    }
    allProject {
      nodes {
        id
        description
        img
        title
        slug
      }
    }
  }
`;

export default Projects;
