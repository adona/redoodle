const path = require('path');
const glob = require("glob");

const apps = ["accounts", "base", "polls"];
// TODO: Auto-generate the apps list from the list of directories

var entries = {};
const pathsIn = glob.sync(`./*/static/*/src/jsx/*.js`);
for (let pathIn of pathsIn) {
  const pathOut = pathIn.replace('/src/jsx/', '/out/js/');
  entries[pathOut] = pathIn;
}

const jsRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/env', '@babel/react']
  }
};

const cssRule = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {loader: 'style-loader', options: {sourceMap: true}}, 
    {loader: 'css-loader', options: {sourceMap: true}}, 
    {loader: 'sass-loader', options: {sourceMap: true}}
  ]
}

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  },
  module: {
    rules: [jsRule, cssRule]
  },
};
