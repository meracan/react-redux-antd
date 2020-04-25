const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




const title=process.env.TITLE || "Title";
const isTesting=process.env.TESTING || false;

const htmlPage = new HtmlWebpackPlugin({title,templateContent: `
    <html>
      <body>
        <div id="root"></div>
      </body>
    </html>
    `
  });
const analyzer=new BundleAnalyzerPlugin({analyzerPort:8080});

const plugins=isTesting?[htmlPage,analyzer]:[htmlPage];
    
module.exports = {
  entry: './src/index.js',
   output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:'production',
  module: {
    rules: [
      { test: /\.js$/,exclude: /node_modules/,use:[{ loader: 'babel-loader' }]},
      { test: /\.css$/,use: ['style-loader', 'css-loader'],},
      { test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(png|jpg|gif|slf|mp4)$/,use: [{loader: 'file-loader',options: {}}]},
      { test: /\.(md)$/,use: [{loader: 'raw-loader',options: {}}]},
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
  optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
  plugins,
};