var path = require('path');
var glob = require("glob");

const mode = 'development';

const apps = ["accounts", "base", "polls"];
// TODO: Auto-generate the apps list from the list of directories

module.exports = apps.map((appName) => {
  const dirIn = `./${appName}/static/${appName}/src/jsx`;
  const pathsIn = dirIn + "/*.js";
  const filenameRegex = /.+\/(.+)\.js$/;
  
  const entries = glob.sync(pathsIn).reduce((entries, pathIn) => {
    const filename = pathIn.match(filenameRegex)[1];
    entries[filename] = pathIn;
    return entries;
  }, {});

  const dirOut = `${appName}/static/${appName}/out/js`;

  const jsRule = {
    include: path.resolve(dirIn),
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env', '@babel/react']
    }
  };

  return {
      mode: mode,
      entry: entries,
      output: {
        path: path.resolve(__dirname, dirOut),
        filename: '[name].js'
      },
      module: {
        rules: [jsRule]
      },
      watch: true,
      devtool: 'inline-source-map'
      // TODO: optimize chunks
      // TODO: clean-webpack-plugin
    }
});
