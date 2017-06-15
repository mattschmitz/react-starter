var path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: "cheap-eval-source-map"
    //"cheap-module-eval-source-map" - more detailed
    //"eval-source-map" -even more detailed
    //see: https://webpack.github.io/docs/configuration.html#devtool

  //for larger projects: https://webpack.js.org/guides/hot-module-replacement/
}