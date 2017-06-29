var path = require('path');
var webpack = require('webpack');

module.exports= {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './src/js/main.js'
  ],
  externals:{
    jquery:'jQuery',

  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename:  './app/js/main.js'
  },
  resolve:{
    alias: {
      App: path.resolve(__dirname,'./src/js/components/App.jsx'),
      Components: path.resolve(__dirname,'./src/js/components'),
      applicationStyles: path.resolve(__dirname,'./app/css/')
    },
    extensions: ['.js','.jsx']
  },
  module: {
    loaders:[
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
};
