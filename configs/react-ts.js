module.exports = {
  extends: [
    'prettier',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'jest', 'react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'no-unused-vars': 'error',
    'require-await': 'error',
    'newline-before-return': 'error',
    'newline-after-var': ['error', 'always'],
    'no-restricted-imports': [
      'error',
      {
        paths: ['lodash', 'lodash-es'],
        patterns: ['lodash/*', 'lodash-es/*'],
      },
    ],
    'no-restricted-modules': [
      'error',
      {
        patterns: ['Helpers/Tests'],
      },
    ],
    'no-console': ['error', { allow: ['info', 'debug', 'warn', 'error'] }],
    complexity: ['error', 10],
    'max-statements': ['error', 20],
    'max-classes-per-file': ['error', 1],
    'max-params': ['error', 5],
    'max-depth': ['error', 2],
    'max-nested-callbacks': ['error', 3],

    'prettier/prettier': 'error',
    'import/named': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'off',
      {
        optionalDependencies: false,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        allow: ['private', 'readonly', 'protected', 'private readonly', 'protected readonly'],
      },
    ],
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        enums: 'always-multiline',
        functions: 'ignore',
        generics: 'always-multiline',
      },
    ],
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeProperty',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralMethod',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'classProperty',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-field',
          'protected-field',
          'private-field',
          'public-method',
          'protected-method',
          'private-method',
        ],
      },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: true,
        objectDestructuring: false,
        memberVariableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
        allowNullableEnum: true,
        allowAny: false,
      },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['src/Mocks/Data/**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        'max-classes-per-file': 'off',
        'max-lines-per-function': 'off',
        'max-statements': 'off',
        'max-nested-callbacks': 'off',
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        'max-classes-per-file': 'off',
        'max-lines-per-function': 'off',
        'max-statements': 'off',
        'max-depth': 'off',
        'max-nested-callbacks': ['error', 5],

        'no-restricted-modules': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/dot-notation': 'off',

        'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
        'jest/require-top-level-describe': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/no-focused-tests': 'error',
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', 'expectSaga'],
            additionalTestBlockFunctions: [],
          },
        ],
      },
    },
    {
      files: ['src/Generated/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-tslint-comment': 'off',
      },
    },
  ],
};
