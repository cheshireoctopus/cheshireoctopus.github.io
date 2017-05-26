const path = require('path')

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'dist'),
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
					plugins: ['babel-plugin-transform-runtime'],
				},
			},
		],
	},
}
