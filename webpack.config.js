const webpack = require('webpack')
const postcss = require('postcss')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractBundle = new ExtractTextPlugin('bundle.css');
const extractEditorStyle = new ExtractTextPlugin('editor-style.css');
const extractLoginStyle = new ExtractTextPlugin('login-style.css');

module.exports = {
	entry: './assets/scripts/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /main\.scss$/,
				loader: extractBundle.extract({
					fallbackLoader: 'style-loader',
					loader: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
				})
			},
			{
				test: /editor-style\.scss$/,
				loader: extractEditorStyle.extract({
					fallbackLoader: 'style-loader',
					loader: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
				})
			},
			{
				test: /login-style\.scss$/,
				loader: extractLoginStyle.extract({
					fallbackLoader: 'style-loader',
					loader: [ 'css-loader', 'postcss-loader', 'sass-loader' ]
				})
			},
			{
				test: /\.pug$/,
				include: [
					path.resolve(__dirname, "modules")
				],
				loader: 'pug-loader'
			},
			{
				test: /\.svg$/,
				include: [
					path.resolve(__dirname, "assets/icons")
				],
				loader: 'svg-sprite-loader?name=icon-[name]'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				include: [
					path.resolve(__dirname, "assets/fonts")
				],
				loader: 'file-loader?name=fonts/[name].[ext]'
			},
			{
				test: /\.svg$/,
				exclude: [
					path.resolve(__dirname, "assets/fonts"),
					path.resolve(__dirname, "assets/icons")
				],
				loader: 'svg-url-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				exclude: [
					path.resolve(__dirname, "assets/fonts"),
					path.resolve(__dirname, "assets/icons")
				],
				loader: 'url-loader?limit=10000'
			},
		]
	},
	plugins: [
		extractBundle,
		extractEditorStyle,
		extractLoginStyle,
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		// Make $ and jQuery available in every module without writing require("jquery")
		new webpack.ProvidePlugin({
			$: "jquery"
		}),
	],
	externals: {
		// require("jquery") is external and available
		//	on the global var jQuery
		"jquery": "jQuery"
	}
}
