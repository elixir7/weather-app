var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/css/weather-icons-wind.min.css',
    './client/css/weather-icons.min.css',
    './client/client.js'
  ],
  output: {
    path: require('path').resolve('./dist'),
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
