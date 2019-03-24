module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [],
	env: {
		browser: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/babel',
		'prettier/react',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-unused-vars': 0, // TS handles this
		'sort-imports': 'error',
		'react/prop-types': 0,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
};
