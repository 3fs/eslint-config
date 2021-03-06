module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'off',
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'array-callback-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true }
    ],
    'block-scoped-var': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': [
      'error',
      'that',
      'self'
    ],
    'camelcase': ['error'],
    'comma-dangle': [
      'error',
      {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }
    ],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'constructor-super': 'error',
    'curly': ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'always',
      { 'null': 'ignore' }
    ],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'for-direction': 'error',
    'generator-star-spacing': ['error', { 'before': true, 'after': true }],
    'guard-for-in': 'off',
    'getter-return': 'error',
    'grouped-accessor-pairs': 'off',
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'init-declarations': 'off',
    'jsx-quotes': 'off',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'line-comment-position': ['off', { 'position': 'above' }],
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'always'],
    'max-classes-per-file': ['error', 1],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      170,
      4,
      {
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignorePattern': '^\\s*var\\s.+=\\s*require\\s*\\('
      }
    ],
    'max-lines': 'off',
    'max-lines-per-function': [
      'warn',
      {
        'max': 100,
        'skipComments': true,
        'skipBlankLines': true
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': ['warn', 20, { ignoreTopLevelFunctions: true }],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': 'off',
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-alert': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-case-declarations': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-div-regex': 'off',
    'no-duplicate-imports': 'error',
    'no-dupe-else-if': 'error',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    'no-eq-null': 'error',
    'no-extra-label': 'off',
    'no-extra-semi': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'off',
    'no-multi-assign': 'off',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-setter-return': 'error',
    'no-script-url': 'error',
    'no-shadow': 'error',
    'no-ternary': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unused-labels': 'error',
    'no-useless-concat': 'error',
    'no-var': 'off',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'nonblock-statement-body-position': 'off',
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { 'checkLoops': false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { 'allowLoop': false, 'allowSwitch': false }],
    'no-lone-blocks': 'error',
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        'allowSamePrecedence': true
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true
      }
    ],
    'no-use-before-define': [
      'error',
      {
        'functions': false, 'classes': false, 'variables': false
      }
    ],
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': [
      'error', { 'consistent': true }
    ],
    'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
    'one-var': ['error', 'always'],
    'operator-linebreak': [
      'error',
      'after',
      { 'overrides': { '?': 'before', ':': 'before' } }
    ],
    'padded-blocks': [
      'error',
      {
        'blocks': 'never',
        'switches': 'never',
        'classes': 'never'
      }
    ],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: [
          'const',
          'let',
          'var'
        ]
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'quote-props': ['error', 'as-needed'],
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true, 'allowTemplateLiterals': true }
    ],
    'object-curly-spacing': ['error', 'always'],
    'rest-spread-spacing': ['error', 'never'],
    'radix': ['error', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'strict': ['error', 'function'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'markers': [
            '*package',
            '!',
            '/',
            ','
          ]
        },
        'block': {
          'balanced': true,
          'markers': [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include'
          ],
          'exceptions': ['*']
        }
      }
    ],
    'symbol-description': 'error',
    'semi-style': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'vars-on-top': 'error',
    'valid-typeof': ['error', { 'requireStringLiterals': true }],
    'wrap-regex': 'off',
    'wrap-iife': [
      'error',
      'any',
      { 'functionPrototypeMethods': true }
    ],
    'yield-star-spacing': ['error', 'both'],
    'yoda': ['error', 'never']
  }
};
