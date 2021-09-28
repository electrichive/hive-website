/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
    siteMetadata: {
        navbar: {
            items: [
                ['About Us', '/about'],
                ['FOSS', '/foss'],
                ['Mentorship', '/mentorship'],
                ['Contact', '/contact']
            ]
        },
        honeycomb: {
            socials: [
                {
                picUrl: '/svg/zulip.svg',
                socialUrl: 'https://electrichive.zulipchat.com'
                },
                {
                picUrl: '/svg/twitter.svg',
                socialUrl: 'https://twitter.com'
                },
                {
                picUrl: '/svg/facebook.svg',
                socialUrl: 'https://www.facebook.com'
                },
                {
                picUrl: '/svg/github.svg',
                socialUrl: 'https://github.com/electrichive'
                },
                {
                picUrl: '/svg/linkedin.svg',
                socialUrl: 'https://www.linkedin.com'
                },
            ]
        }
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
