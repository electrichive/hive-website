/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Electric Hive',
        description: 'INSERT DESCRIPTION HERE',
        siteUrl: 'https://www.electrichive.org',
        url: 'https://www.electrichive.org',
        image: 'favicon.svg',
        author: 'Tristan Schrader',
        organization: {
            name: 'Electric Hive',
            url: 'https://www.electrichive.org',
            logo: 'favicon.svg',
        },
        social: {
            twitter: '@electrichive',
        },
        stylesheets: [
            'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap',
        ],
        lastUpdated: '2021-09-26',
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
            resolve: 'gatsby-plugin-typegen',
            options: {
                outputPath: 'src/types/__generated__/gatsbyTypes.d.ts',
                emitSchema: {
                    'src/types/__generated__/schema.json': true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                static: path.resolve(__dirname, 'static'),
            },
        },
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                jsxPragma: 'jsx',
                allExtensions: true,
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    formats: ['auto', 'webp'],
                    placeholder: 'dominantColor',
                    quality: 50,
                    backgroundColor: 'transparent',
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        'gatsby-transformer-sharp', // for dynamic images
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './static/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'sandbox',
                path: './content/sandbox/',
            },
            __key: 'sandbox',
        },
    ],
};
