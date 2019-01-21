module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'space-before-function-paren': 0,
    'vue/singleline-html-element-content-newline': 0,
    'arrow-parens': 0
  }
}
