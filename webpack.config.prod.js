//Webpack configuration for production
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'),
    path.join(__dirname, 'node_modules', 'font-awesome', 'css', 'font-awesome.min.css'),
    path.join(__dirname, 'client', 'css', 'weather-icons.min.css'),
    path.join(__dirname, 'client', 'css', 'weather-icons-wind.min.css'),
    path.join(__dirname, 'client', 'css', 'custom.css'),
    path.join(__dirname, 'client', 'client.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Weather App',
      template: 'my-index.ejs',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
          test   : /\.css$/,
          loaders : ['style', 'css']
      },
      {
          test: /\.(png|jp(e?)g|svg|eot|woff(2?)|ttf)((\?|&).+)?$/,
          loader: 'file?name=[hash].[ext]',
      }
    ]
  }
}
