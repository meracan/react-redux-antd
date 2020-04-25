// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');
module.exports = {
  module: {
    rules: [
      { test: /\.js$/,exclude: /node_modules/,use:[{ loader: 'babel-loader' }]},
      { test: /\.css$/,use: ['style-loader', 'css-loader'],},
      { test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(png|jpg|gif|slf|mp4)$/,use: [{loader: 'file-loader',options: {}}]},
      // { test: /\.md$/,use: [{ loader: "html-loader"},{loader: "markdown-loader",options: {}}]},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
      // { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      // {test: /\.glsl$/,loader: 'webpack-glsl-loader'}
          
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    // new MonacoWebpackPlugin()
  ],
};