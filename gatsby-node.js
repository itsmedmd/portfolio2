const path = require("path");
const projectsData = require("./src/data/projects.js");
const aboutData = require("./src/data/about.js");

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

exports.sourceNodes = async ({
    actions: { createNode },
    createNodeId,
    createContentDigest,
}) => {
    // create nodes for build time data
    // projects data
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

    // about page data
    createNode({
        ...aboutData,
        id: createNodeId(aboutData.description),
        parent: null,
        children: [],
        internal: {
            type: `About`,
            contentDigest: createContentDigest(aboutData),
        },
    })
}
