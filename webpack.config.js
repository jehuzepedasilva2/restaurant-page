const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); //not sure what either of these do?

module.exports = {
  mode: 'development', // there is production, development, and none
  entry: './src/script.js', // entry point, this is where all other js files will be imported to and used within
  output: {
    filename: 'main.js', // the name of the file that will be outputted in dist
    path: path.resolve(__dirname, 'dist'), // the name of folder, by convention its called dist (distribution), not sure what resolve(..) does
    clean: true, // saves in dist and "deletes old files and replaces with current (autosave and clean up?)"
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // the name of our html file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}