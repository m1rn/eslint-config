import { PLUGIN_HTML, PLUGIN_IMPORT, PLUGIN_JSON, PLUGIN_MARKDOWN, PLUGIN_REACT, PLUGIN_SORT, PLUGIN_STYLISTIC, PLUGIN_TS, PLUGIN_UNICORN } from './plugins'
import { defineRules } from './utils'

export const RULE_JS_BASE = defineRules({
  'array-callback-return': 2,
  'arrow-body-style': 2,
  'camelcase': 2,
  'consistent-return': 2,
  'constructor-super': 2,
  'default-case-last': 2,
  'default-param-last': 2,
  'dot-notation': 2,
  'eqeqeq': 2,
  'for-direction': 2,
  'getter-return': 2,
  'new-cap': 2,
  'no-array-constructor': 2,
  'no-async-promise-executor': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-class-assign': 2,
  'no-compare-neg-zero': 2,
  'no-cond-assign': 2,
  'no-console': [2, { allow: ['warn', 'error'] }],
  'no-const-assign': 2,
  'no-constant-binary-expression': 2,
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-delete-var': 2,
  'no-dupe-args': 2,
  'no-dupe-class-members': 2,
  'no-dupe-else-if': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-else-return': 2,
  'no-empty': 2,
  'no-empty-character-class': 2,
  'no-empty-function': 2,
  'no-empty-pattern': 2,
  'no-empty-static-block': 2,
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-fallthrough': 2,
  'no-func-assign': 2,
  'no-global-assign': 2,
  'no-implied-eval': 2,
  'no-import-assign': 2,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': [
    2,
    {
      skipComments: true,
      skipJSXText: true,
      skipRegExps: true,
      skipStrings: true,
      skipTemplates: true
    }
  ],
  'no-iterator': 2,
  'no-labels': 2,
  'no-lonely-if': 2,
  'no-loss-of-precision': 2,
  'no-misleading-character-class': 2,
  'no-multi-str': 2,
  'no-nested-ternary': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-native-nonconstructor': 2,
  'no-new-wrappers': 2,
  'no-nonoctal-decimal-escape': 2,
  'no-obj-calls': 2,
  'no-object-constructor': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-prototype-builtins': 2,
  'no-redeclare': 2,
  'no-regex-spaces': 2,
  'no-return-assign': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-setter-return': 2,
  'no-shadow': 2,
  'no-shadow-restricted-names': 2,
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 2,
  'no-this-before-super': 2,
  'no-throw-literal': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-unexpected-multiline': 2,
  'no-unneeded-ternary': [2, { defaultAssignment: false }],
  'no-unreachable': 2,
  'no-unreachable-loop': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'no-unsafe-optional-chaining': 2,
  'no-unused-expressions': [
    2,
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: true
    }
  ],
  'no-unused-labels': 2,
  'no-unused-private-class-members': 2,
  'no-unused-vars': [
    2,
    {
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_'
    }
  ],
  'no-use-before-define': [
    2,
    {
      classes: false,
      functions: false,
      variables: false
    }
  ],
  'no-useless-backreference': 2,
  'no-useless-call': 2,
  'no-useless-catch': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-escape': 2,
  'no-useless-rename': 2,
  'no-useless-return': 2,
  'no-var': 2,
  'no-void': 2,
  'no-with': 2,
  'object-shorthand': [
    2,
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false
    }
  ],
  'one-var': [2, { initialized: 'never' }],
  'prefer-arrow-callback': 2,
  'prefer-const': [
    2,
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }
  ],
  'prefer-destructuring': 2,
  'prefer-exponentiation-operator': 2,
  'prefer-numeric-literals': 2,
  'prefer-object-has-own': 2,
  'prefer-object-spread': 2,
  'prefer-promise-reject-errors': 2,
  'prefer-regex-literals': [2, { disallowRedundantWrapping: true }],
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'require-await': 2,
  'require-yield': 2,
  'use-isnan': [
    2,
    {
      enforceForIndexOf: true,
      enforceForSwitchCase: true
    }
  ],
  'valid-typeof': 2,
  'yoda': 2,
  ...defineRules({
    'catch-error-name': [2, { ignore: ['err'] }],
    'consistent-empty-array-spread': 2,
    'custom-error-definition': 2,
    'empty-brace-spaces': 2,
    'error-message': 2,
    'escape-case': 2,
    'explicit-length-check': 2,
    'new-for-builtins': 2,
    'no-array-callback-reference': 2,
    'no-array-for-each': 2,
    'no-array-method-this-argument': 2,
    'no-array-push-push': 2,
    'no-array-reduce': 2,
    'no-await-expression-member': 2,
    'no-await-in-promise-methods': 2,
    'no-console-spaces': 2,
    'no-for-loop': 2,
    'no-hex-escape': 2,
    'no-instanceof-array': 2,
    'no-invalid-fetch-options': 2,
    'no-invalid-remove-event-listener': 2,
    'no-length-as-slice-end': 2,
    'no-lonely-if': 2,
    'no-magic-array-flat-depth': 2,
    'no-negated-condition': 2,
    'no-negation-in-equality-check': 2,
    'no-new-array': 2,
    'no-new-buffer': 2,
    'no-null': 2,
    'no-object-as-default-parameter': 2,
    'no-single-promise-in-promise-methods': 2,
    'no-static-only-class': 2,
    'no-thenable': 2,
    'no-this-assignment': 2,
    'no-unnecessary-await': 2,
    'no-unreadable-iife': 2,
    'no-useless-fallback-in-spread': 2,
    'no-useless-length-check': 2,
    'no-useless-promise-resolve-reject': 2,
    'no-useless-spread': 2,
    'no-useless-switch-case': 2,
    'no-zero-fractions': 2,
    'number-literal-case': 2,
    'numeric-separators-style': 2,
    'prefer-array-find': 2,
    'prefer-array-flat': 2,
    'prefer-array-flat-map': 2,
    'prefer-array-index-of': 2,
    'prefer-array-some': 2,
    'prefer-at': 2,
    'prefer-blob-reading-methods': 2,
    'prefer-code-point': 2,
    'prefer-date-now': 2,
    'prefer-default-parameters': 2,
    'prefer-dom-node-append': 2,
    'prefer-dom-node-dataset': 2,
    'prefer-dom-node-remove': 2,
    'prefer-dom-node-text-content': 2,
    'prefer-event-target': 2,
    'prefer-export-from': 2,
    'prefer-includes': 2,
    'prefer-keyboard-event-key': 2,
    'prefer-logical-operator-over-ternary': 2,
    'prefer-math-trunc': 2,
    'prefer-modern-dom-apis': 2,
    'prefer-modern-math-apis': 2,
    'prefer-module': 2,
    'prefer-negative-index': 2,
    'prefer-number-properties': [
      2,
      {
        checkInfinity: true,
        checkNaN: true
      }
    ],
    'prefer-object-from-entries': 2,
    'prefer-optional-catch-binding': 2,
    'prefer-prototype-methods': 2,
    'prefer-query-selector': 2,
    'prefer-reflect-apply': 2,
    'prefer-regexp-test': 2,
    'prefer-set-has': 2,
    'prefer-set-size': 2,
    'prefer-spread': 2,
    'prefer-string-raw': 2,
    'prefer-string-replace-all': 2,
    'prefer-string-slice': 2,
    'prefer-string-starts-ends-with': 2,
    'prefer-string-trim-start-end': 2,
    'prefer-switch': 2,
    'prefer-ternary': 2,
    'prefer-top-level-await': 2,
    'prefer-type-error': 2,
    'relative-url-style': 2,
    'require-array-join-separator': 2,
    'require-number-to-fixed-digits-argument': 2,
    'switch-case-braces': 2,
    'template-indent': 2,
    'text-encoding-identifier-case': 2,
    'throw-new-error': 2
  }, PLUGIN_UNICORN.meta.name),
  ...defineRules({
    'first': 2,
    'newline-after-import': 2,
    'no-duplicates': 2,
    'no-empty-named-blocks': 2,
    'no-mutable-exports': 2,
    'no-named-default': 2,
    'no-self-import': 2,
    'no-useless-path-segments': 2,
    'no-webpack-loader-syntax': 2
  }, PLUGIN_IMPORT.meta.name)
})

export const RULE_JS_STYLE = defineRules({
  curly: 2,
  ...defineRules({
    'array-bracket-newline': [2, { multiline: true }],
    'array-bracket-spacing': 2,
    'array-element-newline': [
      2,
      {
        consistent: true,
        multiline: true
      }
    ],
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    'comma-dangle': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'function-call-argument-newline': [2, 'consistent'],
    'function-call-spacing': 2,
    'function-paren-newline': [2, 'multiline-arguments'],
    'generator-star-spacing': [2, 'after'],
    'implicit-arrow-linebreak': 2,
    'indent': [
      2,
      2,
      {
        offsetTernaryExpressions: true,
        SwitchCase: 1
      }
    ],
    'indent-binary-ops': [2, 2],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 2,
    'lines-around-comment': [2, { afterHashbangComment: true }],
    'lines-between-class-members': 2,
    'max-statements-per-line': 2,
    'multiline-ternary': [2, 'always-multiline'],
    'new-parens': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-floating-decimal': 2,
    'no-mixed-operators': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    'no-tabs': 2,
    'no-trailing-spaces': 2,
    'no-whitespace-before-property': 2,
    'object-curly-newline': [
      2,
      {
        consistent: true,
        multiline: true
      }
    ],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', next: '*', prev: ['multiline-const', 'multiline-let', 'multiline-expression'] },
      { blankLine: 'always', next: '*', prev: ['block', 'block-like', 'directive'] },
      { blankLine: 'always', next: ['multiline-const', 'multiline-let', 'multiline-expression'], prev: '*' },
      { blankLine: 'always', next: ['block', 'block-like', 'return'], prev: '*' },
      { blankLine: 'never', next: '*', prev: ['case', 'default'] },
      { blankLine: 'any', next: 'directive', prev: 'directive' }
    ],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', { avoidEscape: true }],
    'rest-spread-spacing': 2,
    'semi': [2, 'never'],
    'semi-spacing': 2,
    'semi-style': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [
      2,
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!']
        },
        line: {
          exceptions: ['/', '#'],
          markers: ['/']
        }
      }
    ],
    'switch-colon-spacing': 2,
    'template-curly-spacing': 2,
    'template-tag-spacing': 2,
    'wrap-iife': [2, 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': [2, 'after']
  }, PLUGIN_STYLISTIC.meta.name),
  ...defineRules({
    'sort-array-includes': [2, { type: 'natural' }],
    'sort-classes': [2, { type: 'natural' }],
    'sort-exports': [2, { type: 'natural' }],
    'sort-imports': [
      2,
      {
        groups: [
          'side-effect',
          'side-effect-style',
          ['builtin', 'builtin-type'],
          ['external', 'external-type'],
          ['internal', 'internal-type'],
          ['parent', 'parent-type'],
          ['sibling', 'sibling-type'],
          ['index', 'index-type'],
          'style',
          'object',
          'unknown'
        ],
        internalPattern: [
          '~/**',
          '@/**'
        ],
        newlinesBetween: 'never',
        type: 'natural'
      }
    ],
    'sort-named-exports': [2, { type: 'natural' }],
    'sort-named-imports': [2, { type: 'natural' }],
    'sort-switch-case': [2, { type: 'natural' }],
    'sort-union-types': [2, { type: 'natural' }],
    'sort-variable-declarations': [2, { type: 'natural' }]
  }, PLUGIN_SORT.meta.name)
})

export const RULE_TS_BASE = defineRules({
  'default-param-last': 0,
  'no-array-constructor': 0,
  'no-dupe-class-members': 0,
  'no-empty-function': 0,
  'no-redeclare': 0,
  'no-shadow': 0,
  'no-unused-expressions': 0,
  'no-unused-vars': 0,
  'no-use-before-define': 0,
  'no-useless-constructor': 0,
  ...defineRules({
    'ban-ts-comment': 2,
    'ban-tslint-comment': 2,
    'consistent-type-imports': 2,
    'default-param-last': 2,
    'no-array-constructor': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-enum-values': 2,
    'no-dynamic-delete': 2,
    'no-empty-function': 2,
    'no-empty-object-type': 2,
    'no-explicit-any': 2,
    'no-extra-non-null-assertion': 2,
    'no-extraneous-class': 2,
    'no-import-type-side-effects': 2,
    'no-invalid-void-type': 2,
    'no-misused-new': 2,
    'no-namespace': 2,
    'no-non-null-asserted-nullish-coalescing': 2,
    'no-non-null-asserted-optional-chain': 2,
    'no-non-null-assertion': 2,
    'no-redeclare': 2,
    'no-require-imports': 2,
    'no-shadow': 2,
    'no-this-alias': 2,
    'no-unnecessary-type-constraint': 2,
    'no-unsafe-declaration-merging': 2,
    'no-unsafe-function-type': 2,
    'no-unused-expressions': RULE_JS_BASE['no-unused-expressions'],
    'no-unused-vars': RULE_JS_BASE['no-unused-vars'],
    'no-use-before-define': RULE_JS_BASE['no-use-before-define'],
    'no-useless-constructor': 2,
    'no-useless-empty-export': 2,
    'no-wrapper-object-types': 2,
    'prefer-as-const': 2,
    'prefer-enum-initializers': 2,
    'prefer-namespace-keyword': 2,
    'triple-slash-reference': 2,
    'unified-signatures': 2
  }, PLUGIN_TS.meta.name)
})

export const RULE_TS_STYLE = defineRules({
  ...defineRules({
    'lines-around-comment': [2, { allowTypeStart: true }],
    'member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'comma',
          requireLast: false
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    'padding-line-between-statements': [
      ...RULE_JS_STYLE['stylistic/padding-line-between-statements'],
      {
        blankLine: 'always',
        next: ['enum', 'interface', 'type'],
        prev: '*'
      }
    ],
    'type-annotation-spacing': 2,
    'type-generic-spacing': 2,
    'type-named-tuple-spacing': 2
  }, PLUGIN_STYLISTIC.meta.name),
  ...defineRules({
    'adjacent-overload-signatures': 2,
    'array-type': 2,
    'class-literal-property-style': 2,
    'consistent-generic-constructors': 2,
    'consistent-type-assertions': [
      2,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    'consistent-type-definitions': [2, 'type'],
    'method-signature-style': 2,
    'no-confusing-non-null-assertion': 2,
    'no-inferrable-types': [
      2,
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    'prefer-function-type': 2
  }, PLUGIN_TS.meta.name)
})

export const RULE_TS_TYPE_AWARE = defineRules({
  'consistent-return': 0,
  'dot-notation': 0,
  'no-implied-eval': 0,
  // https://typescript-eslint.io/rules/only-throw-error
  'no-throw-literal': 0,
  'prefer-destructuring': 0,
  'prefer-promise-reject-errors': 0,
  'require-await': 0,
  ...defineRules({
    'await-thenable': 2,
    'consistent-return': 2,
    'consistent-type-exports': 2,
    'dot-notation': 2,
    'no-array-delete': 2,
    'no-base-to-string': 2,
    'no-duplicate-type-constituents': 2,
    'no-for-in-array': 2,
    'no-implied-eval': 2,
    'no-misused-promises': 2,
    'no-mixed-enums': 2,
    'no-redundant-type-constituents': 2,
    'no-unnecessary-template-expression': 2,
    'no-unnecessary-type-assertion': 2,
    'no-unsafe-argument': 2,
    'no-unsafe-assignment': 2,
    'no-unsafe-call': 2,
    'no-unsafe-enum-comparison': 2,
    'no-unsafe-member-access': 2,
    'no-unsafe-return': 2,
    'no-unsafe-unary-minus': 2,
    'only-throw-error': 2,
    'prefer-destructuring': 2,
    'prefer-find': 2,
    'prefer-optional-chain': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regexp-exec': 2,
    'prefer-string-starts-ends-with': 2,
    'require-await': 2,
    'restrict-plus-operands': 2,
    'restrict-template-expressions': [
      2,
      {
        allowAny: false,
        allowBoolean: false,
        allowNever: false,
        allowNullish: false,
        allowNumber: false,
        allowRegExp: false
      }
    ],
    'unbound-method': 2
  }, PLUGIN_TS.meta.name)
})

export const RULE_JSX_BASE = defineRules({
  ...defineRules({
    'dom/no-children-in-void-dom-elements': 2,
    'dom/no-missing-button-type': 2,
    'dom/no-missing-iframe-sandbox': 2,
    'dom/no-script-url': 2,
    'dom/no-unsafe-iframe-sandbox': 2,
    'dom/no-unsafe-target-blank': 2,
    'naming-convention/component-name': 2,
    'naming-convention/filename': [
      2,
      {
        extensions: ['.jsx', '.mjsx', '.tsx', '.mtsx'],
        rule: 'PascalCase'
      }
    ],
    'naming-convention/filename-extension': [
      2,
      {
        allow: 'as-needed',
        extensions: ['.jsx', '.mjsx', '.tsx', '.mtsx']
      }
    ],
    'no-comment-textnodes': 2,
    'no-complex-conditional-rendering': 2,
    'no-nested-components': 2
  }, PLUGIN_REACT.meta.name)
})

export const RULE_JSX_STYLE = defineRules({
  ...defineRules({
    'jsx-child-element-spacing': 2,
    'jsx-closing-bracket-location': 2,
    'jsx-closing-tag-location': 2,
    'jsx-curly-brace-presence': [2, { propElementValues: 'always' }],
    'jsx-curly-newline': 2,
    'jsx-curly-spacing': 2,
    'jsx-equals-spacing': 2,
    'jsx-first-prop-new-line': 2,
    'jsx-function-call-newline': 2,
    'jsx-indent-props': [2, 2],
    'jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'jsx-pascal-case': 2,
    'jsx-props-no-multi-spaces': 2,
    'jsx-quotes': 2,
    'jsx-self-closing-comp': 2,
    'jsx-tag-spacing': [
      2,
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never'
      }
    ],
    'jsx-wrap-multilines': [
      2,
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        propertyValue: 'parens-new-line',
        return: 'parens-new-line'
      }
    ]
  }, PLUGIN_STYLISTIC.meta.name),
  ...defineRules({
    'sort-jsx-props': [
      2,
      {
        customGroups: {
          callback: 'on*'
        },
        groups: [
          'multiline',
          'unknown',
          'shorthand',
          'callback'
        ],
        type: 'natural'
      }
    ]
  }, PLUGIN_SORT.meta.name)
})

export const RULE_JSX_TYPE_AWARE = defineRules({
  ...defineRules({
    'no-leaked-conditional-rendering': 2
  }, PLUGIN_REACT.meta.name)
})

export const RULE_REACT_BASE = defineRules({
  ...defineRules({
    'dom/no-dangerously-set-innerhtml': 2,
    'dom/no-dangerously-set-innerhtml-with-children': 2,
    'dom/no-find-dom-node': 2,
    'dom/no-namespace': 2,
    'dom/no-render-return-value': 2,
    'ensure-forward-ref-using-ref': 2,
    'hooks-extra/no-direct-set-state-in-use-effect': 2,
    'hooks-extra/no-direct-set-state-in-use-layout-effect': 2,
    'hooks-extra/no-unnecessary-use-callback': 2,
    'hooks-extra/no-unnecessary-use-memo': 2,
    'hooks-extra/prefer-use-state-lazy-initialization': 2,
    'naming-convention/use-state': 2,
    'no-array-index-key': 2,
    'no-children-count': 2,
    'no-children-for-each': 2,
    'no-children-map': 2,
    'no-children-only': 2,
    'no-children-prop': 2,
    'no-children-to-array': 2,
    'no-class-component': 2,
    'no-clone-element': 2,
    'no-create-ref': 2,
    'no-default-props': 2,
    'no-duplicate-key': 2,
    'no-implicit-key': 2,
    'no-missing-key': 2,
    'no-prop-types': 2,
    'no-string-refs': 2,
    'no-unstable-context-value': 2,
    'no-unstable-default-props': 2,
    'no-useless-fragment': 2,
    'prefer-shorthand-fragment': 2,
    'web-api/no-leaked-event-listener': 2,
    'web-api/no-leaked-interval': 2,
    'web-api/no-leaked-timeout': 2
  }, PLUGIN_REACT.meta.name)
})

export const RULE_NODE_BASE = defineRules({
  ...defineRules({
    'prefer-node-protocol': 2
  }, PLUGIN_UNICORN.meta.name)
})

export const RULE_HTML_BASE = defineRules({
  ...defineRules({
    'no-duplicate-attrs': 2,
    'no-duplicate-id': 2,
    'no-multiple-h1': 2,
    'no-obsolete-tags': 2,
    'no-script-style-type': 2,
    'no-target-blank': 2,
    'require-button-type': 2,
    'require-closing-tags': 2,
    'require-doctype': 2,
    'require-lang': 2,
    'require-li-container': 2,
    'require-meta-charset': 2,
    'require-title': 2
  }, PLUGIN_HTML.meta.name)
})

export const RULE_HTML_A11Y = defineRules({
  ...defineRules({
    'no-abstract-roles': 2,
    'no-accesskey-attrs': 2,
    'no-aria-hidden-body': 2,
    'no-non-scalable-viewport': 2,
    'no-positive-tabindex': 2,
    'require-frame-title': 2,
    'require-img-alt': 2,
    'require-meta-viewport': 2
  }, PLUGIN_HTML.meta.name)
})

export const RULE_HTML_STYLE = defineRules({
  ...defineRules({
    'element-newline': 2,
    'indent': [2, 2],
    'lowercase': 2,
    'no-extra-spacing-attrs': [
      2,
      {
        disallowMissing: true,
        enforceBeforeSelfClose: true
      }
    ],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-trailing-spaces': 2,
    'quotes': 2
  }, PLUGIN_HTML.meta.name)
})

export const RULE_JSON_BASE = defineRules({
  'no-irregular-whitespace': 0,
  ...defineRules({
    'no-bigint-literals': 2,
    'no-binary-expression': 2,
    'no-binary-numeric-literals': 2,
    'no-dupe-keys': 2,
    'no-escape-sequence-in-identifier': 2,
    'no-floating-decimal': 2,
    'no-hexadecimal-numeric-literals': 2,
    'no-infinity': 2,
    'no-irregular-whitespace': 2,
    'no-multi-str': 2,
    'no-nan': 2,
    'no-number-props': 2,
    'no-numeric-separators': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-octal-numeric-literals': 2,
    'no-parenthesized': 2,
    'no-plus-sign': 2,
    'no-regexp-literals': 2,
    'no-sparse-arrays': 2,
    'no-template-literals': 2,
    'no-undefined-value': 2,
    'no-unicode-codepoint-escapes': 2,
    'no-useless-escape': 2,
    'space-unary-ops': 2,
    'valid-json-number': 2
  }, PLUGIN_JSON.meta.name)
})

export const RULE_JSON_STYLE = defineRules({
  ...defineRules({
    'array-bracket-newline': [
      2,
      {
        minItems: 2,
        multiline: true
      }
    ],
    'array-bracket-spacing': 2,
    'array-element-newline': [
      2,
      {
        minItems: 2,
        multiline: true
      }
    ],

    'comma-dangle': 2,
    'comma-style': 2,
    'indent': [2, 2],
    'key-spacing': 2,
    'object-curly-newline': [
      2,
      {
        consistent: true,
        multiline: true
      }
    ],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
    'quote-props': 2,
    'quotes': 2,
    'space-unary-ops': 2
  }, PLUGIN_JSON.meta.name)
})

export const RULE_MARKDOWN_BASE = defineRules({
  ...defineRules({
    'fenced-code-language': 2,
    'heading-increment': 2,
    'no-empty-links': 2,
    'no-invalid-label-refs': 2,
    'no-missing-label-refs': 2
  }, PLUGIN_MARKDOWN.meta.name)
})

export const RULE_MARKDOWN_CODE_BLOCKS = defineRules({
  'no-alert': 0,
  'no-console': 0,
  'no-labels': 0,
  'no-lone-blocks': 0,
  'no-restricted-syntax': 0,
  'no-undef': 0,
  'no-unused-expressions': 0,
  'no-unused-labels': 0,
  'no-unused-vars': 0,
  ...defineRules({
    'no-unused-expressions': 0,
    'no-unused-vars': 0
  }, PLUGIN_TS.meta.name),
  ...defineRules({
    'naming-convention/filename': 0
  }, PLUGIN_REACT.meta.name)
})
