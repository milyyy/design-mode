const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js?$/, //检验除node_modules文件外的js文件
			exclude: /(node_modules)/,
			loader: 'babel-loader' // 执行此loader, es6转es5让浏览器执行
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html', // 把js放在index.html模板中在浏览器运行
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './release'),
		open: true,
		port: 9000
	}
}