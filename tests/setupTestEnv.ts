import '@testing-library/jest-dom/extend-expect';
// was getting a "___loader is not defined" error when running this test
// it is because of "gatsby-link" and this change is well documented
// https://github.com/gatsbyjs/gatsby/issues/2932
globalThis.___loader = {
    enqueue: jest.fn(),
};
