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
                ['Contact', '/contact'],
            ],
        },
        contactInfo: {
            email: 'info@electrichive.org',
            telephone: '012 345 6789',
            address: '123 Main St, City, ST 67890',
        },
        honeycomb: {
            socials: [
                {
                    img: 'zulip.svg',
                    socialUrl: 'https://electrichive.zulipchat.com',
                },
                {
                    img: 'twitter.svg',
                    socialUrl: 'https://twitter.com',
                },
                {
                    img: 'facebook.svg',
                    socialUrl: 'https://www.facebook.com',
                },
                {
                    img: 'github.svg',
                    socialUrl: 'https://github.com/electrichive',
                },
                {
                    img: 'linkedin.svg',
                    socialUrl: 'https://www.linkedin.com',
                },
                {
                    img: 'discord.svg',
                    socialUrl: 'https://discord.gg/HtHctr5J',
                },
            ],
        },
        testimonials: {
            items: [
                {
                    img: '/jpg/developer1.jpg',
                    author: 'Tom Strat',
                    content: 'This is a test',
                },
                {
                    img: '/jpg/developer2.jpg',
                    author: 'Som Ttrat',
                    content: 'This is another test',
                },
            ],
        },
    },
    plugins: [
        'gatsby-plugin-testing',
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
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Electric Hive Website',
                short_name: 'Electric Hive',
                description: 'INSERT_DESCRIPTION_HERE',
                start_url: '/',
                background_color: '#cc5d00',
                theme_color: '#f0b309',
                theme_color_in_head: false,
                icon: './static/favicon.svg',
                cache_busting_mode: 'none',
                display: 'standalone',
                lang: 'en',
                // crossOrigin: 'use-credentials',
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                precachePages: ['/about', '/contact'],
                appendScript: require.resolve('./src/sw.js'),
                workboxConfig: {
                    importWorkboxFrom: 'local',
                    skipWaiting: true,
                    clientsClaim: true,
                    globPatterns: ['**/static*'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve(
                        './src/components/Layout/index.tsx'
                    ),
                },
                extensions: ['.mdx', '.md'],
            },
        },
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
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-responsive-iframe',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // maxWidth: 650,
                            linkImagesToOriginal: true,
                            showCaptions: false,
                            // markdownCaptions: true,
                            backgroundColor: 'transparent',
                            quality: 50,
                            // withAvif: true, not working?
                            loading: 'lazy',
                            decoding: 'async',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: f =>
                                `mdx-files/${f.hash}/${f.name}`,
                            ignoreFileExtensions: ['png', 'jpg', 'bmp', 'tiff'],
                        },
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            elements: ['h1'],
                            maintainCase: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: '>',
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            prompt: {
                                user: 'bees?',
                                host: 'electrichive',
                                global: false,
                            },
                            languageExtensions: [],
                            escapeEntities: {},
                        },
                    },
                    {
                        resolve: 'gatsby-remark-smartypants',
                        options: {
                            quotes: true,
                            ellipses: true,
                            backticks: true,
                            dashes: 'oldschool',
                        },
                    },
                ],
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: './content/data/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './static/img/',
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
