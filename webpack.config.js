const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html' // adjust if needed
  })
]

module.exports = {
	entry: './src/client/index.js',  // <-- adjust if different
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build') // <-- output path for Docker
		publicPath: '/', // for React router or SPAs
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
	mode: 'production' // or 'development' as needed
};
