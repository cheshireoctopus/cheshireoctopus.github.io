const path = require('path')

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'dist'),
		publicPath: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', { modules: false }],
						'react',
					],
					plugins: ['babel-plugin-transform-runtime', 'transform-class-properties'],
				},
			},
			{
				test: /\.s?css$/,
				use: [
					{
						loader: "style-loader"
					}, {
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}
				]
			},
		],
	},
}
