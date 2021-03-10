global.__BASE_PATH__ = "";
global.__PATH_PREFIX__ = "";
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

module.exports = {

  // `glob pattern` for finding component code
  // this is already the default! included for clarity
  components: 'src/components/**/*.jsx',

  // webpack configuration to support Typescript and Javascript and CSS when loading Styleguidist
  webpackConfig: {
    module: {
      rules: [
        { 
          test: /\.jsx?$/,

          // this is NOT WORKING... I had to include gatsby but it's causing errors. We may need to switch to a different documentationt tool unfortunately
          exclude: /node_modules\/(?!(gatsby)\/)/,
          // exclude: /node_modules\/^(gatsby)/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-gatsby'],
            }
          }]
        },
        { // CSS loader for Webpack
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  },

  // actual styling for the documentation beyond individual components
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Project Direction',
          content: 'docs/proj-direction.md',
          description: 'Where the Electric Hive website is headed'
        },
        {
          name: 'Contribution Details',
          content: 'docs/contributions.md',
          description: 'How to contribute to the site or use it as a training sandbox'
        },
        {
          name: 'Old Website',
          external: true,
          href: 'https://www.electrichive.org/'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/*.js',
      exampleMode: 'expand', //hide/collapse/expand
      usageMode: 'expand' // hide/collapse/expand
    }
  ]
}