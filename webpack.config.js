const path = require('path');
const examples = process.argv[2] === 'examples' ? true : false;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = examples ? new HtmlWebpackPlugin({
  template: './examples/index.html',
  filename: 'index.html',
  inject: 'body'
}) : null;
const plugins = HtmlWebpackPluginConfig ? [HtmlWebpackPluginConfig] : []
module.exports = {
  entry: examples ? './examples/index.js' : './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: examples ? 'var' : 'commonjs2'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
   },
	 plugins: plugins
}