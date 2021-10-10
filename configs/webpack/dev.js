// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000', // bundle the client for webpack-dev-server and connect to the provided endpoint
    './index.tsx', // the entry point of our app
  ],
  devServer: {
    host: 'localhost',
    publicPath: '/',
    historyApiFallback: true,
    hot: true, // enable HMR on the server
    port: 3000,
    open: true,
  },
  devtool: 'eval-cheap-module-source-map', // this is for making the errors easier to find
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
});
