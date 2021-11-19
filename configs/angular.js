module.exports = {
  env: {
    browser: true
  },
  overrides: [
    // "*.ts"
    {
      files: ["*.ts"],
      extends: [ 'prettier', 'plugin:jest/recommended', 'plugin:jest/style'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: "tsconfig.json"
      },
      plugins: ["@angular-eslint", "@typescript-eslint", "jsdoc", "import", "jest"],
      rules: {
        'brace-style': 'off',
        'camelcase': 'off',
        'comma-spacing': 'off',
        "curly": ["error", "multi-line"],
        'dot-notation': 'off',
        'func-call-spacing': 'off',
        "guard-for-in": "error",
        "id-blacklist": ["error", "title", "alt"],
        'indent': 'off',
        'init-declarations': 'off',
        "lines-between-class-members": "off",
        "max-params": 0,
        'no-array-constructor': 'off',
        "no-cond-assign": "error",
        'no-dupe-class-members': 'off',
        "no-duplicate-case": "error",
        'no-duplicate-imports': 'off',
        'no-empty-function': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'off',
        'no-invalid-this': 'off',
        'no-loss-of-precision': 'off',
        'no-magic-numbers': 'off',
        "no-param-reassign": "error",
        'no-redeclare': 'off',
        "no-sequences": "error",
        'no-shadow': 'off',
        "no-template-curly-in-string": "error",
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'require-await': 'off',
        'semi': 'off',
        'space-before-function-paren': 'off',
        'space-infix-ops': 'off',
        "use-isnan": "error",
        'quotes': 'off',

        // import specific rules
        "import/no-extraneous-dependencies": [
          "off",
          {
            "optionalDependencies": false
          }
        ],
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "unknown", "internal", "parent", "sibling", "index"],
            "newlines-between": "always"
          }
        ],

        // typescript specific rules
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', {'prefer':  'no-type-imports'}],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error', { 'accessibility': 'no-public' }],
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/keyword-spacing': ['error', { 'before': true, 'after': true }],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-duplicate-imports': 'error',
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
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': ['error', {
          'allows': [
            'private',
            'readonly',
            'protected',
            'private readonly',
            'protected readonly'
          ]
        }],
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
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/class-literal-property-style': 'error',
        '@typescript-eslint/comma-spacing': ['error', { 'before': false, 'after': true }],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
        "@typescript-eslint/unbound-method": ["error", { "ignoreStatic": true }],
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/comma-dangle": [
          "error",
          {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "enums": "always-multiline",
            "functions": "ignore",
            "generics": "always-multiline"
          }
        ],
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "default",
            "format": ["camelCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
          },
          {
            "selector": "variableLike",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
          },
          {
            "selector": "typeProperty",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
          },
          {
            "selector": "objectLiteralProperty",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
          },
          {
            "selector": "typeLike",
            "format": ["PascalCase"]
          },
          {
            "selector": "enumMember",
            "format": ["PascalCase"]
          },
          {
            "selector": "classProperty",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"]
          }
        ],
        "@typescript-eslint/member-ordering": [
          "error",
          {
            "default": [
              "public-field",
              "protected-field",
              "private-field",
              "public-method",
              "protected-method",
              "private-method"
            ]
          }
        ],
        "@typescript-eslint/typedef": [
          "error",
          {
            "arrayDestructuring": true,
            "arrowParameter": true,
            "memberVariableDeclaration": true,
            "objectDestructuring": true,
            "parameter": true,
            "propertyDeclaration": true,
            "variableDeclaration": true,
            "variableDeclarationIgnoreFunction": true
          }
        ],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/lines-between-class-members": ["error", { "exceptAfterSingleLine": true }],
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/space-before-function-paren": [
          "error",
          {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
          }
        ],

        // angular rules
        "@angular-eslint/contextual-decorator": "error",
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/contextual-lifecycle": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/no-attribute-decorator": "error",
        "@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-output-native": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/prefer-on-push-component-change-detection": "error",
        "@angular-eslint/use-component-view-encapsulation": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "@angular-eslint/no-lifecycle-call": "error",
        "@angular-eslint/no-pipe-impure": "error",
        "@angular-eslint/component-max-inline-declarations": ["error", { "template": 0, "styles": 0 }],
        "@angular-eslint/no-conflicting-lifecycle": "error",
        "@angular-eslint/no-input-prefix": "error",
        "@angular-eslint/prefer-output-readonly": "error",
        "@angular-eslint/relative-url-prefix": "error"
      }
    },
    // "*.spec.ts", "**/mocks/stubs/**", "*.stub.ts"
    {
      files: ["*.spec.ts", "**/mocks/stubs/**", "*.stub.ts"],
      env: {
        jest: true
      },
      rules: {
        "max-lines-per-function": "off",
        "max-nested-callbacks": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "dot-notation": "off",
        "max-classes-per-file": "off",
        "id-blacklist": "off",
        "@angular-eslint/prefer-on-push-component-change-detection": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "jest/no-done-callback": "off",
        "jest/expect-expect": "off",
        "jest/no-focused-tests": "error",
        "jest/no-standalone-expect": [
          "error",
          { "additionalTestBlockFunctions": ["beforeEach", "afterEach", "beforeAll", "afterAll"] }
        ],
        "@angular-eslint/component-max-inline-declarations": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-unsafe-member-access": "off"
      }
    },
    // "*.model.spec.ts"
    {
      files: ["*.model.spec.ts"],
      rules: {
        "jasmine/no-global-setup": 0
      }
    },
    // "*.model.ts"
    {
      files: ["*.model.ts"],
      rules: {
        "max-classes-per-file": "off"
      }
    },
    // *.abstract.ts
    {
      files: ["*.abstract.ts"],
      rules: {
        "@angular-eslint/directive-class-suffix": "off",
        "@angular-eslint/component-class-suffix": "off",
        "@angular-eslint/prefer-on-push-component-change-detection": "off",
        "@angular-eslint/component-max-inline-declarations": "off"
      }
    },
    // "*.html"
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      parser: "@angular-eslint/template-parser",
      rules: {
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/accessibility-elements-content": "error",
        "@angular-eslint/template/accessibility-label-for": "error",
        "@angular-eslint/template/no-positive-tabindex": "error",
        "@angular-eslint/template/accessibility-table-scope": "error",
        "@angular-eslint/template/accessibility-valid-aria": "error",
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/no-autofocus": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/template/conditional-complexity": "error",
        "@angular-eslint/template/cyclomatic-complexity": "error",
        "@angular-eslint/template/no-call-expression": "error"
      }
    },
  ]
};
