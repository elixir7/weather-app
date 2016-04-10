var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    path.join(__dirname, 'node_modules', 'webpack-hot-middleware', 'client'),
    path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'),
    path.join(__dirname, 'node_modules', 'font-awesome', 'css', 'font-awesome.min.css'),
    path.join(__dirname, 'client', 'css', 'weather-icons.min.css'),
    path.join(__dirname, 'client', 'css', 'weather-icons-wind.min.css'),
    path.join(__dirname, 'client', 'css', 'custom.css'),
    path.join(__dirname, 'client', 'client.js')
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
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
