/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
    /* Your site config here */
    siteMetadata: {
        navbar: {
            items: [
                ['About Us', '/about'],
                ['FOSS', '/foss'],
                ['Mentorship', '/mentorship'],
                ['Contact', '/contact'],
            ],
        },
    },
    plugins: [
        'gatsby-plugin-testing',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                resolveModules: [path.join(__dirname, 'src', 'components')],
                pages: path.join(__dirname, 'src', 'pages'),
            },
        },
    ],
};
