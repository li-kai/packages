const warnInDevelopment =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import', 'prettier', 'node'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
      },
    ],

    // Enable i++ in for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Minor style issues should not stop development
    semi: [warnInDevelopment, 'always'],
    'no-trailing-spaces': warnInDevelopment,
    'no-unused-vars': warnInDevelopment,
    'comma-dangle': warnInDevelopment,
    'comma-spacing': [warnInDevelopment, { before: false, after: true }],

    // Allow debugger and console statement in development
    'no-debugger': warnInDevelopment,
    'no-console': warnInDevelopment,

    'no-alert': 'off',

    // Let git handle the linebreaks instead.
    'linebreak-style': 'off',
  },
};
