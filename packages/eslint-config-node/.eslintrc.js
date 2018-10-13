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
    // Let git handle the linebreaks instead.
    'linebreak-style': 'off',

    // Enable i++ in for loops
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],

    // Allow debugger and console statement in development
    'no-debugger': warnInDevelopment,
    'no-console': warnInDevelopment,

    // Irrelevant in node
    'no-alert': 'off',

    'prettier/prettier': [
      'error',
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
