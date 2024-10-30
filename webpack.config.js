const path = require('path');

module.exports = {
  mode: 'development', // there is production, development, and none
  entry: './src/script.js', // entry point, this is where all other js files will be imported to and used within
  output: {
    filename: 'main.js', // the name of the file that will be outputted in dist
    path: path.resolve(__dirname, 'dist'), // the name of folder, by convention its called dist (distribution), not sure what resolve(..) does
    clean: true, // saves in dist and "deletes old files and replaces with current (autosave and clean up?)"
  },
}