/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */

const { merge } = require('webpack-merge');
const path = require('path');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      penthouse: {
        blockJSRequests: false,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css|s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
});
