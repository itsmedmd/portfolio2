import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, ProjectLink } from "components";

const Projects = ({ data }) => {
  const { allFile, allProject } = data;
  const DEFAULT_PROJECT_SIZE = 1024;
  const projectRef = useRef(null);
  const [sliderOffset, setSliderOffset] = useState(1);
  const [activeProject, setActiveProject] = useState(Math.ceil(allProject.nodes.length / 2) - 1);

  // Only 'allFile' entries that have "childImageSharp" are important.
  // *.svg files don't have it, those svg files are not used here.
  const allImages = allFile.nodes.filter(file => file.childImageSharp); 

  // update active project ID
  const handleActiveProjectChange = (newProjectID) => {
    console.log("last id:", activeProject, "new id:", newProjectID);
    let newID = newProjectID;
    if(newID === -1) {
      newID = allProject.nodes.length - 1;
      //newID = 0;
    } else if (newID === allProject.nodes.length) {
      //newID = allProject.nodes.length - 1;
      newID = 0;
    }
    setActiveProject(newID);
  };

  useEffect(() => {
    // Calculate the offset to set on the slider to center the active project on the screen
    const centerSlider = () => {
      const projectWidth = (projectRef?.current?.offsetWidth) || 0
      let offset = 0;
      if (allProject) {
        offset = (activeProject * projectWidth * -1) + 1.5 * projectWidth;
      }
      setSliderOffset(offset);
    };

    if (projectRef?.current) {
      centerSlider();
    };

    window.addEventListener("resize", centerSlider);
    return () => window.removeEventListener("resize", centerSlider);
  }, [projectRef, activeProject, allProject]);

  console.log("active:", activeProject, "offset:", sliderOffset);

  return (
    <Layout className="projects" noPadding={true} noMaxWidth={true}>
      <div className="projects__slider" style={{ transform: `translateX(${sliderOffset === 1 ? DEFAULT_PROJECT_SIZE / 2 : sliderOffset}px)` }}>
        {
            allProject.nodes.map(({id, img, title, slug}, index) => {
              const sharpImg = allImages.find(imgSharp => imgSharp.relativePath === img);
              return (
                <ProjectLink
                  key={id}
                  projectID={index}
                  isActive={activeProject === index ? true : false}
                  setActiveID={handleActiveProjectChange}
                  title={title}
                  slug={slug}
                  sharpImg={sharpImg.childImageSharp.gatsbyImageData}
                  projectRef={index === allProject.nodes.length - 1 ? projectRef : undefined}
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
