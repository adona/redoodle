var path = require('path');
var glob = require("glob");

const apps = ["accounts", "base", "polls"];
// TODO: Auto-generate the apps list from the list of directories

const REGEX_FILENAME_JS = /.+\/(.+)\.js$/;
var entries = {};
for (let appName of apps) {
  const dirIn = `./${appName}/static/${appName}/src/jsx`;
  const dirOut = `${appName}/static/${appName}/out/js`;
  const pathsIn = glob.sync(dirIn + "/*.js");
  for (let pathIn of pathsIn) {
    const filename = pathIn.match(REGEX_FILENAME_JS)[1];
    const pathOut = `${dirOut}/${filename}`;
    entries[pathOut] = pathIn;
  }
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
    filename: '[name].js'
  },
  module: {
    rules: [jsRule, cssRule]
  },
};
