const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './index.html'},
      { from: './style/style.css', to: './style.css'}
    ])
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};
