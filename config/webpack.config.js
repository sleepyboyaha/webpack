const {
	entry,
	output,
	html,
	style,
	image
} = require('./webpack.base')



module.exports = {
	mode: 'development',
	entry,
	output,
	plugins: [html],
	module: {
		rules: [style, image]
	}
}