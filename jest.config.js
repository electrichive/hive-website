/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    // compiles any JSX code through Babel first
    transform: {
        '\\.jsx?$': [
            'babel-jest',
            {
                presets: ['babel-preset-gatsby'],
            },
        ],
    },

    // mocks static assets and resolve path aliases with Jest too
    moduleNameMapper: {
        '.+\\.css$': 'identity-obj-proxy',
        '.+\\.(png|svg)$': 'test-file-stub',
        '^([A-Z].*)': '<rootDir>/src/components/$1',
        '^pages/(.*)': '<rootDir>/src/pages/$1',
    },

    testEnvironment: 'jsdom',
    testRunner: 'jest-jasmine2',

    // ignore testing cache, node_modules and public files
    // ignore preprocessing gatsby node_modules
    testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
    transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],

    globals: {
        __PATH_PREFIX__: '',
        __BASE_PATH__: '',
    },

    setupFilesAfterEnv: ['<rootDir>/tests/setup-test-env'],
};
