module.exports = {
  extends: ['@3fs/eslint-config/configs/react'],
  plugins: ['react-native'],
  env: {
    'react-native/react-native': true
  },
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error'
  }
};
