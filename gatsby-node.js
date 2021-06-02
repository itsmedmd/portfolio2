const path = require("path");
const projectsData = require("./src/data/projects");
const aboutData = require("./src/data/about");
const createSVGImagesObject = require("./src/utils/createSVGImagesObject").createSVGImagesObject;

// custom webpack config
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, "src/components"),
                images: path.resolve(__dirname, "src/images"),
                data: path.resolve(__dirname, "src/data"),
                utils: path.resolve(__dirname, "src/utils"),
                styles: path.resolve(__dirname, "src/styles"),
            },
        },
    });
};

// create graphql nodes from data files for build time data
exports.sourceNodes = async ({
    actions: { createNode },
    createNodeId,
    createContentDigest,
}) => {
    // "project" pages' data
    projectsData.map(project => {
        // create slug (url) of the project page
        const formattedTitle = project.title.toLowerCase().replace(/[\s-]+/g, "-");
        const slug = `projects/${formattedTitle}`;

        createNode({
            ...project,
            id: createNodeId(project.title),
            slug,
            parent: null,
            children: [],
            internal: {
                type: `Project`,
                contentDigest: createContentDigest(project),
            }
        })}
    );

    // "about" page data
    createNode({
        ...aboutData,
        id: createNodeId(aboutData.description),
        parent: null,
        children: [],
        internal: {
            type: `About`,
            contentDigest: createContentDigest(aboutData),
        }
    });
};

//programatically create "Project" pages
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const projectsQuery = await graphql(`
        query ProjectsQuery {
            allFile(filter: {extension: {regex: "/^((?!svg).)*$/"}}) {
                nodes {
                  childImageSharp {
                    gatsbyImageData(
                        placeholder: DOMINANT_COLOR
                        quality: 75
                    )
                  }
                  relativePath
                }
            }
            svgAllFile: allFile(filter: {extension: {regex: "/svg/"}}) {
                nodes {
                  relativePath
                  publicURL
                }
            }
            allProject {
                nodes {
                    description
                    features
                    img
                    title
                    tools {
                        text
                        img
                    }
                    slug
                }
            }
        }
    `);

    const { allFile, allProject, svgAllFile } = projectsQuery.data;
    const SVGImages = createSVGImagesObject(svgAllFile.nodes);

    allProject.nodes.forEach(node => {
        const {img, slug, ...data} = node;
        const sharpImg = allFile.nodes.find(imgSharp => imgSharp.relativePath === img);
        createPage({
            path: slug,
            component: path.resolve(`src/templates/project/Project.jsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                ...data,
                SVGImages,
                sharpImg: sharpImg.childImageSharp,
                slug
            }
        });
    });
};
