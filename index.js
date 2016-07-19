module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "comma-dangle": 2,
    "comma-spacing": 2,
    "eol-last": 2,
    "indent": ["error", 2],
    "keyword-spacing": 2,
    "linebreak-style": 2,
    "no-console": 2,
    "no-unused-vars": [2, {"args": "none", "varsIgnorePattern": "React"}],
    "no-extra-semi": 2,
    "no-trailing-spaces": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "semi": ["error", "never"],
    "jsx-quotes": 2,
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-indent-props": 2,
    "react/jsx-key": 2,
    "react/jsx-space-before-closing": 2,
    "react/no-unknown-property": 0,
    "react/prop-types": 2,
    "react/wrap-multilines": 2
  },
  "plugins": [
    "react"
  ]
}

