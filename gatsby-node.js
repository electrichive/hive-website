// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem');

const hiddenPages = ['foss'];

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: 'babel-preset-gatsby',
        options: {
            reactRuntime: 'automatic',
        },
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const relativeFilePath = createFilePath({
            node,
            getNode,
            basePath: 'src/content/sandbox/',
        });

        createNodeField({
            node,
            name: 'slug',
            value: `/sandbox${relativeFilePath}`,
        });
    }
};

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
    hiddenPages.map(hiddenPage => {
        console.log(page.path);
        if (page.path === `/${hiddenPage}/`) {
            deletePage(page);
        }
    });
};
