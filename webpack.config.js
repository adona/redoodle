const path = require('path');
const glob = require("glob");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
    {loader: MiniCssExtractPlugin.loader, options: {sourceMap: true}},
    {loader: 'css-loader', options: {sourceMap: true}}, 
    {loader: 'sass-loader', options: {sourceMap: true}}
  ]
}

const minicssPlugin = new MiniCssExtractPlugin({
  moduleFilename: (module) => module.name.replace('/js/', '/css/').replace(/\.js$/, '.css'),
  chunkFilename: ({ chunk }) => chunk.name.replace('/js/', '/css/').replace(/\.js$/, '.css')
});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname),
    filename: '[name]'
  },
  module: { rules: [jsRule, cssRule] },
  plugins: [ minicssPlugin ],
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'base/static/base/out/js/vendor.js',
        },
      }
    }
  }
};
