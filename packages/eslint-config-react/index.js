const warnInDevelopment =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  parser: 'babel-eslint',
  root: true,

  env: {
    browser: true,
  },

  plugins: ['flowtype', 'import', 'jsx-a11y', 'react', 'prettier'],

  settings: {
    react: { version: 'latest' },
  },

  overrides: [
    {
      files: '**/*.test.{js,jsx}',
      env: {
        jest: true,
      },
    },
  ],

  rules: {
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': warnInDevelopment,
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': warnInDevelopment,
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      warnInDevelopment,
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],
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
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',
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
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': warnInDevelopment,
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
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [warnInDevelopment, { allowImplicit: true }],
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
    'import/extensions': ['warn', 'always', { js: 'never', jsx: 'never' }],
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
    strict: [warnInDevelopment, 'never'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      warnInDevelopment,
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': [warnInDevelopment, 'never', { always: [] }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      warnInDevelopment,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': [warnInDevelopment, { ignoreCase: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      warnInDevelopment,
      { allowAllCaps: true, ignore: [] },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': [warnInDevelopment],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': [warnInDevelopment],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': [warnInDevelopment, { ignoreStateless: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': [warnInDevelopment, 'always'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      warnInDevelopment,
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      warnInDevelopment,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          'render',
        ],
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': [
      warnInDevelopment,
      { enforceDynamicLinks: 'always' },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': [
      warnInDevelopment,
      { allowRequiredDefaults: false },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      warnInDevelopment,
      { props: 'never', children: 'never' },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': warnInDevelopment,
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      warnInDevelopment,
      { button: true, submit: true, reset: false },
    ],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': [warnInDevelopment, { components: [] }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': [warnInDevelopment, { ignoreNonDom: false }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    'jsx-a11y/aria-props': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': [
      warnInDevelopment,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': [
      warnInDevelopment,
      { required: { some: ['nesting', 'id'] } },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': [
      warnInDevelopment,
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
    'jsx-a11y/interactive-supports-focus': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': [warnInDevelopment, { components: [''] }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
    'jsx-a11y/html-has-lang': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
    'jsx-a11y/lang': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': [
      warnInDevelopment,
      { elements: ['marquee', 'blink'] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
    'jsx-a11y/scope': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'warn',
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': [
      warnInDevelopment,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
    'jsx-a11y/accessible-emoji': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
    'jsx-a11y/aria-activedescendant-has-tabindex': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
    'jsx-a11y/iframe-has-title': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': [warnInDevelopment, { ignoreNonDOM: true }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
    'jsx-a11y/no-redundant-roles': warnInDevelopment,
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
    'jsx-a11y/media-has-caption': [
      warnInDevelopment,
      { audio: [], video: [], track: [] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      warnInDevelopment,
      { tr: ['none', 'presentation'] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      warnInDevelopment,
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
    'jsx-a11y/no-noninteractive-tabindex': [
      warnInDevelopment,
      { tags: [], roles: ['tabpanel'] },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [warnInDevelopment, { specialLink: ['to'] }],
    // https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
    'flowtype/define-flow-type': 'warn',
    // https://github.com/gajus/eslint-plugin-flowtype#no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': warnInDevelopment,
    // https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
    'flowtype/use-flow-type': 'warn',
    // https://github.com/gajus/eslint-plugin-flowtype#valid-syntax
    'flowtype/valid-syntax': 'warn',
    // https://github.com/prettier/eslint-plugin-prettier/blob/master/docs/rules/prettier.md
    'prettier/prettier': [
      warnInDevelopment,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
      },
    ],
  },
};
