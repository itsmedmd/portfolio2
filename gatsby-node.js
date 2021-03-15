const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, "src/components"),
                images: path.resolve(__dirname, "src/images"),
                utils: path.resolve(__dirname, "src/utils"),
                styles: path.resolve(__dirname, "src/styles"),
            },
        },
    });
};
