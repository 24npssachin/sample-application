const path = require('path');

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
