import type { Config } from '@jest/types';

const moduleDirs = [
    'components',
    'pages',
    'stories',
    'styles',
    'tests',
    'types',
    'utils',
];
const moduleNameMappings = Object.fromEntries(
    moduleDirs.map(dir => [`^${dir}/(.*)`, `<rootDir>/src/${dir}/$1`])
);

export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testRunner: 'jest-jasmine2',
    moduleNameMapper: {
        '.+\\.(png|svg|jpg)$': '<rootDir>/tests/__mocks__/fileMock.ts',
        ...moduleNameMappings,
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setupTestEnv.ts'],

    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/components/',
        '<rootDir>/src/pages/',
        '<rootDir>/src/utils/',
    ],
} as Config.InitialOptions;
