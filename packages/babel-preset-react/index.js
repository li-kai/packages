'use strict';

/* eslint-disable global-require */

const nodeEnv = process.env.NODE_ENV;
const isEnvDevelopment = nodeEnv === 'development';
const isEnvProduction = nodeEnv === 'production';
const isEnvTest = nodeEnv === 'test';

module.exports = () => ({
  presets: [
    isEnvTest && [
      // ES features necessary for user's Node version
      require('@babel/preset-env').default,
      {
        targets: {
          node: 'current',
        },
      },
    ],
    (isEnvProduction || isEnvDevelopment) && [
      // Latest stable ECMAScript features
      require('@babel/preset-env').default,
      {
        targets: '> 0.25%, not dead',
        // Enable tree-shaking for webpack
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
    [
      require('@babel/preset-react').default,
      {
        // Adds component stack to warning messages
        // Adds __self attribute to JSX which React will use for some warnings
        development: isEnvDevelopment || isEnvTest,
        // Will use the native built-in instead of trying to polyfill
        // behavior for any plugins that require one.
        useBuiltIns: true,
      },
    ],
  ].filter(Boolean),
  plugins: [
    [
      require('@babel/plugin-proposal-class-properties').default,
      {
        loose: true,
      },
    ],
    // The following two plugins use Object.assign directly, instead of Babel's
    // extends helper. Note that this assumes `Object.assign` is available.
    // { ...todo, completed: true }
    [
      require('@babel/plugin-proposal-object-rest-spread').default,
      {
        useBuiltIns: true,
      },
    ],
    // Adds syntax support for import()
    require('@babel/plugin-syntax-dynamic-import').default,
  ].filter(Boolean),
});
