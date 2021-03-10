const jestPreprocessor = require("babel-jest")
  .createTransformer({ presets: ["babel-preset-gatsby"] });

module.exports = {

  // compiles any JSX code through Babel first
  transform: { "^.+\\.jsx?$": jestPreprocessor },

  // mocks static assets
  moduleNameMapper: { ".+\\.css$": "identity-obj-proxy", ".+\\.(png|svg)$": "test-file-stub" },

  // ignore testing cache, node_modules and public files
  // ignore preprocessing gatsby node_modules
  testPathIgnorePatterns: [ "node_modules", "\\.cache", "<rootDir>.*/public" ],
  transformIgnorePatterns: [ "node_modules/(?!(gatsby)/)" ],

  // where to start testing!
  globals: { __PATH_PREFIX__: "", __BASE_PATH__: "" },

  // import `jest-dom` before tests run
  setupFilesAfterEnv: [ "<rootDir>/tests/setup-test-env" ]
}