const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),  // where the HTML + JS will go
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"><title>React App</title></head>
          <body><div id="root"></div></body>
        </html>
      `
    })
  ],
  mode: 'production'
};
