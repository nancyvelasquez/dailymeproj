const LiveReloadPlugin = require('webpack-livereload-plugin');
const productionMode = require('./index.js').isProduction;

const webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'css', '*'],
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        // options: {
        //   presets: ['react-app'],
        // },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?root=.'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ],
  },
  plugins: productionMode ?
    [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
    ] :
    [new LiveReloadPlugin({
      appendScriptTag: true
    })],
};