/* eslint-disable */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const outputDir = path.resolve('./dist');
const isDevServer = process.argv.find(v => v.includes('webpack-dev-server')) !== undefined;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: isDevServer ? './src/indexDevServer.html' : './src/index.html',
});
const PurgecssPluginConfig = new PurgecssPlugin({
	paths: glob.sync(path.resolve('./src/**/*'), { nodir: true }),
	keyframes: true,
});
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({ filename: '[name].css' });
const BundleAnalyzerConfig = new BundleAnalyzer({
	analyzerMode: isDevServer ? 'disabled' : 'server',
});

module.exports = {
	devServer: {
		historyApiFallback: true,
	},
	devtool: 'source-map',
	entry: [isDevServer ? path.resolve('./src/indexDevServer.tsx') : path.resolve('./src/index.tsx')],
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'babel-loader', include: path.resolve('./src') },
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				loader: 'file-loader',
				test: /\.(png|jpg|jpeg|woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			},
		],
	},
	output: {
		path: outputDir,
	},
	plugins: [HtmlWebpackPluginConfig, PurgecssPluginConfig, MiniCssExtractPluginConfig, BundleAnalyzerConfig],
	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
	},
	stats: {
		chunks: true,
		colors: true,
		reasons: true,
	},
};
