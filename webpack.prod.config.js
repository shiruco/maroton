var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './static_private/js/app',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: '(u@w@u).js',
    publicPath: 'http://localhost:3000/static/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('(u@w@u).css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }),
      precss
    ];
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'scss')]
  }
}
