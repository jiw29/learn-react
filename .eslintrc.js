module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "@devqin/eslint-config/react", "@devqin/eslint-config/typescript"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};