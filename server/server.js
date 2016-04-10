//This is the webserver which serves the files to the person requesting files threw the url.
var express = require('express');
var path = require('path');
var config = require('../webpack.config.dev.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve('client/index.html'))
})

var port = 8080;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
