module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['tailwind'],
  extends: [
    'plugin:vue/essential',
    'plugin:tailwind/recommended'
    // '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [2, 'single']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
