var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var loaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'postcss-loader'
  }
]

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    'webpack/hot/only-dev-server',
    './static_private/src/app',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: '(u@w@u).js',
    publicPath: 'http://localhost:3000/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({filename: '(u@w@u).css', allChunks: true })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: loaders,
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
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
  }
}
