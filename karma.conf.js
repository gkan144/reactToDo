var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: false,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'tests/**/*.test.jsx',
      'tests/**/*.test.js',
      'node_modules/foundation-sites/dist/js/foundation.js'
    ],
    preprocessors: {
      'tests/**/*.test.jsx': ['webpack', 'sourcemap'],
      'tests/**/*.test.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {noInfo: true},
    phantomjsLauncher: {
      exitOnResourceError: true
    }
  });
};