var path = require('path');
var glob = require("glob");

const mode = 'development';

const apps = ["accounts", "base", "polls"];
// TODO: Auto-generate the apps list from the list of directories

module.exports = apps.map((appName) => {
  const dirInJS = `./${appName}/static/${appName}/src/jsx`;
  const pathsInJS = glob.sync(dirInJS + "/*.js"); // glob = pathname pattern expansion
  const filenameRegexJS = /.+\/(.+)\.js$/;
  
  var entries = {};
  for (var pathIn of pathsInJS) {
    const filename = pathIn.match(filenameRegexJS)[1];
    entries[filename] = pathIn;
  }

  const dirOutJS = `${appName}/static/${appName}/out/js`;

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

  return {
      mode: mode,
      entry: entries,
      output: {
        path: path.resolve(__dirname, dirOutJS),
        filename: '[name].js'
      },
      module: {
        rules: [jsRule, cssRule]
      },
      watch: true,
      devtool: 'inline-source-map'
      // TODO: optimize chunks
      // TODO: clean-webpack-plugin
    }
});
