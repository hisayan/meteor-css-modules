Package.describe({
	name: 'nathantreid:css-modules',
	version: '1.0.2',
	summary: 'CSS modules implementation. CSS for components!',
	git: 'https://github.com/nathantreid/meteor-css-modules.git',
	documentation: 'README.md'
});


Package.registerBuildPlugin({
	name: 'mss',
	use: [
		'babel-compiler@6.5.2-rc.7',
		'ecmascript@0.4.1-rc.7',
		'caching-compiler@1.0.0',
		'nathantreid:css-modules-import-path-helpers@0.0.2',
		'ramda:ramda@0.19.0',
	],
	npmDependencies: {
		"app-module-path": "1.0.4",
		"cjson": "0.3.3",
		"css-modules-loader-core": "1.0.0",
		"fibers": "1.0.5",
		"lru-cache": "2.6.4",
		"node-sass": "3.4.2",
		"postcss": "5.0.14",
		"postcss-modules-local-by-default": "1.0.1",
		"postcss-modules-extract-imports": "1.0.0",
		"postcss-modules-scope": "1.0.0",
		"postcss-modules-values": "1.1.1",
		"recursive-readdir": "1.3.0",
		"string-template": "1.0.0",
	},
	sources: [
		'sha1.js',
		'included-file.js',
		'get-output-path.js',
		'options.js',
		'postcss-plugins.js',
		'scss-processor.js',
		'css-modules-processor.js',
		'css-modules-build-plugin.js',
		'plugin.js'
	]
});

Package.onUse(function (api) {
	api.versionsFrom('1.3');
	api.use('isobuild:compiler-plugin@1.0.0');
});
