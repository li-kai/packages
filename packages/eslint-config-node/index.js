const warnInDevelopment =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
  },

  plugins: ['import', 'prettier', 'node'],

  rules: {
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': warnInDevelopment,
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': warnInDevelopment,
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [warnInDevelopment, { exceptMethods: [] }],
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': warnInDevelopment,
    // https://eslint.org/docs/rules/default-case
    'default-case': [warnInDevelopment, { commentPattern: '^no default$' }],
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [warnInDevelopment, { allowKeywords: true }],
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [warnInDevelopment, 'always', { null: 'ignore' }],
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': warnInDevelopment,
    // https://eslint.org/docs/rules/no-caller
    'no-caller': warnInDevelopment,
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': warnInDevelopment,
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [warnInDevelopment, { allowElseIf: false }],
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      warnInDevelopment,
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': warnInDevelopment,
    // https://eslint.org/docs/rules/no-eval
    'no-eval': warnInDevelopment,
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': warnInDevelopment,
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': warnInDevelopment,
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': warnInDevelopment,
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': warnInDevelopment,
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [warnInDevelopment, { exceptions: [] }],
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': warnInDevelopment,
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': warnInDevelopment,
    // https://eslint.org/docs/rules/no-labels
    'no-labels': [warnInDevelopment, { allowLoop: false, allowSwitch: false }],
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': warnInDevelopment,
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': warnInDevelopment,
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': warnInDevelopment,
    // https://eslint.org/docs/rules/no-new
    'no-new': warnInDevelopment,
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': warnInDevelopment,
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': warnInDevelopment,
    // https://eslint.org/docs/rules/no-octal
    'no-octal': warnInDevelopment,
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': warnInDevelopment,
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      warnInDevelopment,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
        ],
      },
    ],
    // https://eslint.org/docs/rules/no-proto
    'no-proto': warnInDevelopment,
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': warnInDevelopment,
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      warnInDevelopment,
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [warnInDevelopment, 'always'],
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': warnInDevelopment,
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': warnInDevelopment,
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [warnInDevelopment, { props: false }],
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': warnInDevelopment,
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': warnInDevelopment,
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': warnInDevelopment,
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      warnInDevelopment,
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': warnInDevelopment,
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': warnInDevelopment,
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': warnInDevelopment,
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': warnInDevelopment,
    // https://eslint.org/docs/rules/no-void
    'no-void': warnInDevelopment,
    // https://eslint.org/docs/rules/no-with
    'no-with': warnInDevelopment,
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [
      warnInDevelopment,
      { allowEmptyReject: true },
    ],
    // https://eslint.org/docs/rules/radix
    radix: warnInDevelopment,
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': warnInDevelopment,
    // https://eslint.org/docs/rules/yoda
    yoda: warnInDevelopment,
    // https://eslint.org/docs/rules/for-direction
    'for-direction': warnInDevelopment,
    // https://eslint.org/docs/rules/getter-return
    'getter-return': [warnInDevelopment, { allowImplicit: true }],
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': warnInDevelopment,
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': warnInDevelopment,
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': [warnInDevelopment, 'always'],
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': warnInDevelopment,
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'warn',
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': warnInDevelopment,
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': warnInDevelopment,
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': warnInDevelopment,
    // https://eslint.org/docs/rules/no-empty
    'no-empty': warnInDevelopment,
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': warnInDevelopment,
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': warnInDevelopment,
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': warnInDevelopment,
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': warnInDevelopment,
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': warnInDevelopment,
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': warnInDevelopment,
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': warnInDevelopment,
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': warnInDevelopment,
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': warnInDevelopment,
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': warnInDevelopment,
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': warnInDevelopment,
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': warnInDevelopment,
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': warnInDevelopment,
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': warnInDevelopment,
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': warnInDevelopment,
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': warnInDevelopment,
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': [warnInDevelopment, { requireStringLiterals: true }],
    // https://eslint.org/docs/rules/global-require
    'global-require': warnInDevelopment,
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': warnInDevelopment,
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': warnInDevelopment,
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': warnInDevelopment,
    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': warnInDevelopment,
    // https://eslint.org/docs/rules/camelcase
    camelcase: [warnInDevelopment, { properties: 'never' }],
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      warnInDevelopment,
      'always',
      { exceptAfterSingleLine: false },
    ],
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      warnInDevelopment,
      { before: 'always', after: 'always' },
    ],
    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      warnInDevelopment,
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [warnInDevelopment, { allowImplicit: true }],
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': warnInDevelopment,
    // https://eslint.org/docs/rules/no-continue
    'no-continue': warnInDevelopment,
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': warnInDevelopment,
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': [warnInDevelopment],
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': warnInDevelopment,
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': warnInDevelopment,
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': [warnInDevelopment, { allowForLoopAfterthoughts: true }],
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      warnInDevelopment,
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      warnInDevelopment,
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [warnInDevelopment, { defaultAssignment: false }],
    // https://eslint.org/docs/rules/one-var
    'one-var': [warnInDevelopment, 'never'],
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [warnInDevelopment, 'always'],
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      warnInDevelopment,
      'always',
      {
        line: { exceptions: ['-', '+'], markers: ['=', '!'] },
        block: { exceptions: ['-', '+'], markers: ['=', '!'], balanced: true },
      },
    ],
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': warnInDevelopment,
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': warnInDevelopment,
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      warnInDevelopment,
      'isFinite',
      'isNaN',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'event',
      'external',
      'defaultstatus',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': warnInDevelopment,
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': warnInDevelopment,
    // https://eslint.org/docs/rules/no-undef
    'no-undef': warnInDevelopment,
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': warnInDevelopment,
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      warnInDevelopment,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      warnInDevelopment,
      { functions: true, classes: true, variables: true },
    ],
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      warnInDevelopment,
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': warnInDevelopment,
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': warnInDevelopment,
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': warnInDevelopment,
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': warnInDevelopment,
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': warnInDevelopment,
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': warnInDevelopment,
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': warnInDevelopment,
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': warnInDevelopment,
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      warnInDevelopment,
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    // https://eslint.org/docs/rules/no-var
    'no-var': warnInDevelopment,
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      warnInDevelopment,
      'always',
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      warnInDevelopment,
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      warnInDevelopment,
      { destructuring: 'any', ignoreReadBeforeAssign: true },
    ],
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      warnInDevelopment,
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: true },
      },
      { enforceForRenamedProperties: false },
    ],
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': warnInDevelopment,
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': warnInDevelopment,
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': warnInDevelopment,
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': warnInDevelopment,
    // https://eslint.org/docs/rules/require-yield
    'require-yield': warnInDevelopment,
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      warnInDevelopment,
      { commonjs: true, caseSensitive: true },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      warnInDevelopment,
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
          '**/jest.config.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
        ],
        optionalDependencies: false,
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      warnInDevelopment,
      'ignorePackages',
      { js: 'never', mjs: 'never', jsx: 'never' },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      warnInDevelopment,
      { groups: [['builtin', 'external', 'internal']] },
    ],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': warnInDevelopment,
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': [warnInDevelopment, { maxDepth: Infinity }],
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': warnInDevelopment,
    // https://eslint.org/docs/rules/strict
    strict: warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
    'node/no-extraneous-require': warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': warnInDevelopment,
    // https://eslint.org/docs/rules/node/no-unsupported-features/es-builtins
    'node/no-unsupported-features/es-builtins': warnInDevelopment,
    // https://eslint.org/docs/rules/node/no-unsupported-features/es-syntax
    'node/no-unsupported-features/es-syntax': warnInDevelopment,
    // https://eslint.org/docs/rules/node/no-unsupported-features/node-builtins
    'node/no-unsupported-features/node-builtins': warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': warnInDevelopment,
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': warnInDevelopment,
    // https://github.com/prettier/eslint-plugin-prettier/blob/master/docs/rules/prettier.md
    'prettier/prettier': [
      warnInDevelopment,
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
      },
    ],
  },
};
