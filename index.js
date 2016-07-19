module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "arrow-spacing": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "computed-property-spacing": ["error", "never"],
    "eol-last": "error",
    "indent": ["error", 2],
    "jsx-quotes": "error",
    "keyword-spacing": "error",
    "key-spacing": ["error", {
      "mode": "strict",
      "align": "value"
    }],
    "linebreak-style": "error",
    "object-curly-spacing": ["error", "never"],
    "no-console": "error",
    "no-unused-vars": ["error", {
      "args": "none", 
      "varsIgnorePattern": "React"
    }],
    "no-extra-semi": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"]
    "padded-blocks": ["error", "never"],
    "prefer-const": "error",
    "semi": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", {
      "anonymous": "always", 
      "named": "never"
    }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }],
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-indent-props": "error",
    "react/jsx-key": "error",
    "react/jsx-space-before-closing": "error",
    "react/no-unknown-property": 0,
    "react/prop-types": "error",
    "react/wrap-multilines": "error",
    "rest-spread-spacing": ["error", "never"]
  },
  "plugins": [
    "react"
  ]
}

