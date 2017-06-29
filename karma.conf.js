var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['src/js/tests/**/*.test.jsx'],
    preprocessors:{
      './src/js/tests/**/*.test.jsx': ['webpack','sourcemap',]
    },
    reporters: ['mocha'],
    client:{
      mocha:{
        timeout: '5000'
      },
    },
    webpack: webpackConfig,
    webpackServer:{
      noInfo: true
    }
  });
};
