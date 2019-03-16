module.exports = {
	parser:  "@typescript-eslint/parser",
	plugins: [
	],
	env: {
		browser:true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint",
		"plugin:react/recommended"
	],
	parserOptions:  {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures:  {
			jsx: true
		}
	},
	rules: {
		"@typescript-eslint/no-explicit-any": 0,
		"prettier/prettier": "error",
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		},
	}
}
