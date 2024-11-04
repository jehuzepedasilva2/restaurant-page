const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); //not sure what either of these do?

module.exports = {
  // mode: 'production', // there is production, development, and none
  entry: './src/script.js', // entry point, this is where all other js files will be imported to and used within
  output: {
    filename: 'main.js', // the name of the file that will be outputted in dist
    path: path.resolve(__dirname, 'dist'), // the name of folder, by convention its called dist (distribution), not sure what resolve(..) does
    clean: true, // saves in dist and "deletes old files and replaces with current (autosave and clean up?)"
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

// run npm init -y or npm init to generate package.json file
// --save-dev writes to the package.json file and updates dependencies.
// npm install --save-dev webpack webpack-cli
// --> this installs webpack and webpack command line interface (npx webpack) so that we can bundle files
// npm install --save-dev html-webpack-plugin
// --> Since HTML isn't js webpack cant just bundle it straight away, this install helps with that
// npm install --save-dev style-loader css-loader
// --> css-loader will read any CSS files we import in a JavaScript file and store the result in a string. 
// style-loader then takes that string and actually adds the JavaScript code that will apply those styles to the page. Therefore, we need both.