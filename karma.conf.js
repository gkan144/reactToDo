var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'app/tests/**/*.test.jsx',
      'app/tests/**/*.test.js',
      'node_modules/foundation-sites/dist/js/foundation.js'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
      'app/tests/**/*.test.js': ['webpack', 'sourcemap']
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