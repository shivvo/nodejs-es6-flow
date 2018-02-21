var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');

var config = {
  target: 'node',
  context: __dirname,
  externals: [nodeExternals()],
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/server.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'flow']
          }
        }
      }
    ]
  }
};

module.exports = config;
