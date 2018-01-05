// http://eslint.org/docs/user-guide/configuring

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": [
    "airbnb-base",
  ],
  // required to lint *.vue files
  "plugins": [
    "import"
  ],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
  },
  "globals": {
    // "expect": true,
    // "sinon": true,
    // "Blob": false,
    // "URL": false,
  },
  // 根据需要修改 rules，详见 http://eslint.org/docs/rules/
  // 推荐的编码风格 https://github.com/airbnb/javascript
  // add your custom rules here
  "rules": {
    "arrow-body-style": 0,
    "class-methods-use-this": 0,
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": 0,
    "generator-star-spacing": 0,
    "global-require": 0,
    "import/extensions": 0,
    "import/first": 0,
    "import/no-absolute-path": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-bitwise": 0,
    "no-cond-assign": 0,
    "no-continue": 1,
    "no-console": 0,
    "no-else-return": 0,
    "no-mixed-operators": 0,
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-restricted-syntax": 0,
    "no-trailing-spaces": 0,
    "no-use-before-define": 0,
    "no-useless-escape": 0,
    "prefer-template": 0,
    "prefer-arrow-callback": 0,
    "require-yield": 1,
    "semi": ["error", "never"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "ignore",
      "asyncArrow": "ignore"
    }],
  }
}
