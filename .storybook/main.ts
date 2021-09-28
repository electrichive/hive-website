import type { StorybookConfig } from '@storybook/react/types';
import path from 'path';

export default {
    stories: ['../src/**/*.stories.@(tsx|mdx)'],
    addons: [
        '@storybook/react',
        '@storybook/addon-essentials',
        'storybook-addon-gatsby',
    ],
    core: {
        builder: 'webpack5',
    },
    logLevel: 'debug',
    // typescript: {
    //     check: true,
    //     checkOptions: {},
    //     reactDocgen: 'react-docgen-typescript'
    // },
    webpackFinal: async config => {
        [
            'components',
            'pages',
            'stories',
            'styles',
            'tests',
            'types',
        ].forEach(dir => {
            config.resolve.alias[dir] = path.resolve(
                __dirname,
                `../src/${dir}`
            );
        });
        config.resolve.alias['static'] = path.resolve(__dirname, '../static');

        if (typeof config.module.rules[0] === 'object') {
            config.module.rules[0].use[0].options.plugins.push([
                require.resolve('babel-plugin-remove-graphql-queries'),
                {
                    stage:
                        config.mode === 'development'
                            ? 'develop-html'
                            : 'build-html',
                    staticQueryDir: 'page-data/sq/d',
                },
                'graphql-shim',
            ]);

            config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
        }

        return config;
    },
} as StorybookConfig;
