import React, { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./index.scss";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout, ProjectLink } from "components";

const Projects = ({ data }) => {
  const { allFile, allProject } = data;
  const DEFAULT_OFFSET = 1024;
  const projects = [...allProject.nodes];
  const isSliderEnabled = useMediaQuery({ query: "(min-width: 1160px)" });

  if (isSliderEnabled) {
    // copy 2 last projects to the start and 2 first projects to the end
    // of the array. This is used to create an "infinite" image carousel effect
    projects.unshift(
      projects[projects.length - 2],
      projects[projects.length - 1]
    );
    projects.push(projects[2], projects[3]);
  } else {
    // swap first and second project positions because by default in
    // slider the second project is the most important, but not in
    // vertical projects view when the slider is disabled
    const temp = projects[0];
    projects[0] = projects[1];
    projects[1] = temp;
  }

  const projectRef = useRef(null);
  const [noTransition, setNoTransition] = useState(false);
  const [sliderOffset, setSliderOffset] = useState(DEFAULT_OFFSET);
  const [activeProject, setActiveProject] = useState(
    Math.ceil(projects.length / 2) - 1
  );

  useEffect(() => {
    // Calculate the offset to set on the slider to center the active project on the screen
    const centerSlider = () => {
      if (isSliderEnabled) {
        const projectWidth = projectRef?.current?.offsetWidth || DEFAULT_OFFSET;
        const offset = 3.5 * projectWidth - activeProject * projectWidth;
        setSliderOffset(offset);
      }
    };

    // center slider on render
    centerSlider();

    window.addEventListener("resize", centerSlider);
    return () => window.removeEventListener("resize", centerSlider);
  }, [projectRef?.current?.offsetWidth, activeProject, isSliderEnabled]);

  // update active project ID
  const handleActiveProjectChange = (newProjectID, target) => {
    setNoTransition(false);
    setActiveProject(newProjectID);
    target.disabled = false;
  };

  const handleTransitionEnd = () => {
    // if the end is reached when navigating to either slider side,
    // turn off transitions and jump to the other side
    if (activeProject === 1) {
      setActiveProject(projects.length - 3);
      setNoTransition(true);
    } else if (activeProject === projects.length - 2) {
      setActiveProject(2);
      setNoTransition(true);
    }
  };

  const createProjectsToRender = () => {
    return projects.map(({ id, img, title, slug }, index) => {
      const sharpImg = allFile.nodes.find(
        (imgSharp) => imgSharp.relativePath === img
      );

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
          isInSlider={isSliderEnabled}
        />
      );
    });
  };

  return (
    <Layout
      className="projects"
      noPadding={true}
      noMaxWidth={isSliderEnabled}
      centered={isSliderEnabled}
    >
      <Helmet>
        <title>Deimantas Butėnas - Projects</title>
      </Helmet>

      <h1 className="sr-only">Projects</h1>

      <div
        onTransitionEnd={handleTransitionEnd}
        className={`
          projects__slider
          ${noTransition ? "projects__slider--no-transition" : ""}
        `}
        style={{
          transform: `translateX(${isSliderEnabled ? sliderOffset : 0}px)`,
        }}
      >
        {createProjectsToRender()}
      </div>
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
