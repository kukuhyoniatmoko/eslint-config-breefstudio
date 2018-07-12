module.exports = {
  extends: [
    './index.js',
  ].map(require.resolve),
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
};
