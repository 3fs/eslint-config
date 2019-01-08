module.exports = {
  extends: '@3fs',
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],
  rules: {
    'dot-notation': 'off',

    'typescript/type-annotation-spacing': 'error',
    'typescript/explicit-member-accessibility': 'off',
    'typescript/no-unused-vars': 'off',
    'typescript/interface-name-prefix': ['error', 'never'],
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-explicit-any': 'off',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-namespace': 'off',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': 'error',
    'typescript/generic-type-naming': 'off',
    'typescript/member-delimiter-style': 'off',
    'typescript/member-naming': 'off',
    'typescript/member-ordering': 'off',
    'typescript/no-array-constructor': 'off',
    'typescript/no-empty-interface': 'error',
    'typescript/no-inferrable-types': 'off',
    'typescript/no-non-null-assertion': 'off',
    'typescript/no-parameter-properties': 'off',
    'typescript/no-type-alias': 'error',
    'typescript/no-use-before-define': 'error',
    'typescript/no-var-requires': 'error'
  }
};
