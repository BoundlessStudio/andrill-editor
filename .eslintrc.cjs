/* eslint-env node */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-shorthand': ['error', 'always'],
    'indent': ['error', 2],
    'linebreak-style': 'off',
    'eol-last': ['error', 'never'],
    'max-len': ['error', { code: 450 }],
    'space-before-function-paren': ['error', 'always'],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/multi-word-component-names': 'off',
    "vue/max-attributes-per-line": ["warn", {
      "singleline": {
        "max": 5
      },      
      "multiline": {
        "max": 1
      }
    }],
    // These are weird inconsistencies between eslint and typescript eslint integration. Need to make some GitHub issues.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};