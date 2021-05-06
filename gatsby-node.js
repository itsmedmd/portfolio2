const path = require("path");
const projectsData = require("./src/data/projects.js");
const aboutData = require("./src/data/about.js");

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
    projectsData.map(project => createNode({
        ...project,
        id: createNodeId(project.title),
        parent: null,
        children: [],
        internal: {
            type: `Project`,
            contentDigest: createContentDigest(project),
        },
    }));

    // "about" page data
    createNode({
        ...aboutData,
        id: createNodeId(aboutData.description),
        parent: null,
        children: [],
        internal: {
            type: `About`,
            contentDigest: createContentDigest(aboutData),
        },
    });
};

// add slug (path) entries for projects
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Project`) {
      const slug = "projects/" + node.title.toLowerCase().replace(/[\s-]+/g, "-");
      createNodeField({
        node,
        name: `slug`,
        value: slug
      });
    }
  }

// programatically create "Project" pages
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query ProjectsQuery {
            allProject {
                nodes {
                    id
                    description
                    features
                    img
                    title
                    tools
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    result.data.allProject.nodes.forEach(node => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/project/Project.jsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
};
