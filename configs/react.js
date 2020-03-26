module.exports = {
  extends: ['@3fs', '@3fs/eslint-config/configs/jsx-a11y'],
  plugins: ['react', 'react-hooks'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json'
        ]
      }
    },
    'react': {
      pragma: 'React',
      version: 'detect'
    }
  },
  /*
   * View link below for react rules documentation
   * https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
   */
  rules: {
    // REACT JSX A11Y RULES
    'jsx-quotes': ['error', 'prefer-double'],

    // REACT HOOKS RULES
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // REACT RULES
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/forbid-dom-props': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: [
          'any',
          'array',
          'object'
        ]
      }
    ],
    'react/function-component-definition': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-spacing': [
      'error',
      'never',
      { allowMultiline: true }
    ],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false
      }
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false
      }
    ],
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-direct-mutation-state': 'off',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false
      }
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true
      }
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/no-render-return-value': 'error',
    'react/require-optimization': ['off', { allowDecorators: [] }],
    'react/no-find-dom-node': 'error',
    'react/forbid-component-props': ['off', { forbid: [] }],
    'react/forbid-elements': ['off', { forbid: [] }],
    'react/no-danger-with-children': 'error',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'allow',
        afterOpening: 'never'
      }
    ],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-state': 'error',
    'react/no-array-index-key': 'error',
    'react/require-default-props': 'error',
    'react/forbid-foreign-prop-types': 'off',
    'react/void-dom-elements-no-children': 'error',
    'react/default-props-match-prop-types': ['off', { allowRequiredDefaults: false }],
    'react/no-redundant-should-component-update': 'off'
  }
};
