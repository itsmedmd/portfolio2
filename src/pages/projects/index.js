import React, { useRef, useEffect, useState } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import { Layout, ProjectLink } from "components";

const Projects = ({ data }) => {
  const { allFile, allProject } = data;

  // copy 2 last projects to the start and 2 first projects to the end
  // of the array. This is used to create an "infinite" image carousel
  const projects = [...allProject.nodes];
  projects.unshift(projects[projects.length - 2], projects[projects.length - 1]);
  projects.push(projects[2], projects[3]);

  const projectRef = useRef(null);
  const [noTransition, setNoTransition] = useState(false);
  const [sliderOffset, setSliderOffset] = useState(1);
  const [activeProject, setActiveProject] = useState(Math.ceil(projects.length / 2) - 1);
  const DEFAULT_PROJECT_SIZE = 1024;

  // use the second DEFAULT_OFFSET if animation on load is not wanted
  const DEFAULT_OFFSET = DEFAULT_PROJECT_SIZE / 2;
  //const DEFAULT_OFFSET = DEFAULT_PROJECT_SIZE / 2 - activeProject * PROJECT_MARGIN_SIZE * 2;

  // update active project ID
  const handleActiveProjectChange = (newProjectID) => {
    setNoTransition(false);
    setActiveProject(newProjectID);
  };

  const handleTransitionEnd = () => {
    // if the end is reached when navigating to either side,
    // turn off transitions and jump to the other side
    if (activeProject === 1) {
      setActiveProject(projects.length - 3);
      setNoTransition(true);
    } else if (activeProject === projects.length - 2) {
      setActiveProject(2);
      setNoTransition(true);
    }
  };

  useEffect(() => {
    // Calculate the offset to set on the slider to center the active project on the screen
    const centerSlider = () => {
      const projectWidth = projectRef?.current?.offsetWidth || DEFAULT_PROJECT_SIZE;
      const offset = 3.5 * projectWidth - activeProject * projectWidth; 
      setSliderOffset(offset);
    };

    if (projectRef?.current) {
      centerSlider();
    };

    window.addEventListener("resize", centerSlider);
    return () => window.removeEventListener("resize", centerSlider);
  }, [projectRef, activeProject]);

  return (
    <Layout className="projects" noPadding={true} noMaxWidth={true} centered={true}>
      <h1 className="sr-only">Projects</h1>

      <div
        onTransitionEnd={handleTransitionEnd}
        className={`projects__slider ${noTransition ? "projects__slider--no-transition" : ""}`}
        style={{transform: `translateX(${sliderOffset === 1 ? DEFAULT_OFFSET : sliderOffset}px)`}}
      >
        {
            projects.map(({id, img, title, slug}, index) => {
              const sharpImg = allFile.nodes.find(imgSharp => imgSharp.relativePath === img);
              return (
                <ProjectLink
                  key={`${id}-${index}`}
                  projectID={index}
                  isActive={activeProject === index ? true : false}
                  setActiveID={handleActiveProjectChange}
                  noTransition={noTransition}
                  title={title}
                  slug={slug}
                  sharpImg={sharpImg.childImageSharp.gatsbyImageData}
                  projectRef={index === projects.length - 1 ? projectRef : undefined}
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
    allFile(filter: {extension: {regex: "/^((?!svg).)*$/"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 80)
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
