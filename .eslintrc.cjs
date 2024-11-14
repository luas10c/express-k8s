const config = {
  root: true,
  env: {
    node: true,
    es2022: true
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 13
  },
  rules: {
    'prettier/prettier': 'error'
  }
}

module.exports = config
