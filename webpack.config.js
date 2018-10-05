const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    app: './index.js',
  },
  devtool: 'source-map',
  devServer: {
    open: false,
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'song.html',
      template: './song.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'artist.html',
      template: './artist.html',
    }),
    new CopyWebpackPlugin([
      { from: './static', to: 'static' }
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: '/'
            }
          },
          {loader: 'css-loader'},
          {loader: 'stylus-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|otf|svg|woff2|woff)$/,
        loader: 'file-loader',
        options: {}
      },
      {
        test: /\.twig$/,
        loader: "twig-loader",
        options: {}
      }
    ],
  },
  
};
