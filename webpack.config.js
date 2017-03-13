module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: 'public/script'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
}