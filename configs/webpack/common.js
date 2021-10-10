// shared config (dev and prod)
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, '../../src/api/'),
      assets: path.resolve(__dirname, '../../src/assets/'),
      components: path.resolve(__dirname, '../../src/components/'),
      global: path.resolve(__dirname, '../../src/global/'),
      pages: path.resolve(__dirname, '../../src/pages/'),
      tests: path.resolve(__dirname, '../../tests/'),
      types: path.resolve(__dirname, '../../types/'),
    },
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
      { test: /\.(woff|woff2|eot|ttf)$/, use: 'url-loader?limit=100000' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html.ejs', favicon: 'public/favicon.ico' }),
    new CopyWebpackPlugin({
      patterns: [{ from: `public/favicon.ico`, to: 'favicon.ico' }],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.EnvironmentPlugin(process.env), // enable environment variables
  ],
  externals: {
    // Tells webpack to externally upload react
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic', // For caching modules by assigning them unique ids that will prevent them from unnecessary rebuilds.
    splitChunks: {
      // Bundles all the node_modules into separate "vendor" bundle, which doesn't rebuild all the time.
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: false,
  },
};
