var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: ["./app/app.js"],

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      },
      {
     test: /\.css$/,
     loader: "style-loader!css-loader"
   },
   {
     test: /\.png$/,
     loader: "url-loader?limit=100000"
   },
   {
     test: /\.jpg$/,
     loader: "file-loader"
   },
   {
     test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
     loader: 'url?limit=10000&mimetype=application/font-woff'
   },
   {
     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
     loader: 'url?limit=10000&mimetype=application/octet-stream'
   },
   {
     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
     loader: 'file'
   },
   {
     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
     loader: 'url?limit=10000&mimetype=image/svg+xml'
   }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
