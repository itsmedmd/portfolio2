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
    getNodesByType,
    createContentDigest,
}) => {
    // get all files from the folder 'images'
    // and all ImageSharp nodes
    //const arrayOfFiles = getNodesByType("File").filter(file => file.sourceInstanceName === "images");
    //const arrayOfImageSharp = getNodesByType("ImageSharp");

    // "project" pages' data
    projectsData.map(project => {
        // create slug (url) of the project page
        const formattedTitle = project.title.toLowerCase().replace(/[\s-]+/g, "-");
        const slug = `projects/${formattedTitle}`;

        // find the corresponding project ImageSharp node
        // const imgSharp = arrayOfImageSharp.find(img =>
        //     arrayOfFiles.find(file =>
        //         file.id === img.parent &&
        //         file.relativePath === project.img
        //     )
        // );
        //const imgFile = arrayOfFiles.find(file => file.relativePath === project.img);

        createNode({
            ...project,
            id: createNodeId(project.title),
            slug,
            //childImageSharp: imgSharp,
            //image: imgFile.absolutePath,
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

// add slug (path) entries for projects
exports.onCreateNode = ({ node, actions }) => {
    //const { createNodeField } = actions;
    // if (node.internal.type === "Project") {
    //     const imgFile = arrayOfFiles.find(file => file.relativePath === project.img);
    //     createNodeField({
    //         node,
    //         name: "imgFile",
    //         value: imgFile
    //     });
    // }

    //if (node.internal.type === "File" && node.sourceInstanceName === "images") {
        //const imgFile = arrayOfFiles.find(file => file.relativePath === project.img);
        //console.log(node);
        //console.log("-------------------------------------------------------------------");
    //}
};

// programatically create "Project" pages
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;
//     const projectsQuery = await graphql(`
//         query ProjectsQuery {
//             allProject {
//                 nodes {
//                     id
//                     description
//                     features
//                     img
//                     title
//                     tools
//                     slug
//                 }
//             }
//         }
//     `);

//     projectsQuery.data.allProject.nodes.forEach(node => 
//         createPage({
//             path: node.slug,
//             component: path.resolve(`src/templates/project/Project.jsx`),
//             context: {
//                 // Data passed to context is available
//                 // in page queries as GraphQL variables.
//                 slug: node.slug
//             }
//         })
//     );
// };
