module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"

    ],
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "react/prop-types": [0]
    }
};