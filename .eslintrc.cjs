/* eslint-env node */
module.exports = {
  rules: {
    'vue/no-reserved-component-names': 'off',
    },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
