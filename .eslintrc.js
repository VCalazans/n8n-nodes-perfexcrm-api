module.exports = {
	extends: './eslint.config.mjs',
	settings: {
		'import-x/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json'
			},
			node: {
				extensions: ['.js', '.ts', '.json']
			}
		}
	}
};