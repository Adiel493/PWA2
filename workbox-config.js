module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,ico,jpg,css,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};