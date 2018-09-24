'use strict';

const objToSource = require('./objToSource');

const OFF_RULE = 'off';
const WARN_RULE = 'warn';
const ERROR_RULE = 'error';
const NUM_TO_STR_RULE = {
  0: OFF_RULE,
  1: WARN_RULE,
  2: ERROR_RULE,
};

const PLUGIN_TO_DOC = {
  'eslint-plugin-node':
    'https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/',
  'eslint-plugin-import':
    'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
  'eslint-plugin-react':
    'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/',
  'eslint-plugin-jsx-a11y':
    'https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/',
  'eslint-plugin-prettier':
    'https://github.com/prettier/eslint-plugin-prettier/blob/master/docs/rules/',
  'eslint-plugin-flowtype': 'https://github.com/gajus/eslint-plugin-flowtype#',
};

function getLinkForPlugin(rule) {
  const result = rule.match(/^([\w-]+)\/([\w-]+)$/);
  if (result) {
    // eslint-disable-next-line no-unused-vars
    const [_, pluginName, ruleName] = result;
    const fullPluginName = `eslint-plugin-${pluginName}`;
    const docUrl = PLUGIN_TO_DOC[fullPluginName];
    // If endsWith #, then it is a hash url, not a markdown file
    const pathEnding = docUrl.endsWith('#') ? '' : '.md';
    return `${docUrl}${ruleName}${pathEnding}`;
  }
  return `https://eslint.org/docs/rules/${rule}`;
}

function formatRules(rules) {
  const formattedRules = {};
  Object.entries(rules)
    .sort(
      ([ruleA], [ruleB]) =>
        // native rules then plugins
        ruleA.localeCompare(ruleB) &&
        ruleA.includes('/') &&
        ruleB.includes('/'),
    )
    .forEach(([ruleName, value]) => {
      let ruleResult = value;

      // Convert rules to string form
      if (Array.isArray(value) && Number.isInteger(value[0])) {
        ruleResult[0] = NUM_TO_STR_RULE[value[0]];
      } else if (Number.isInteger(value)) {
        ruleResult = NUM_TO_STR_RULE[value];
      }

      // Either value is string 'off' or array that starts with 'off'
      const isDeactivated =
        ruleResult === OFF_RULE || ruleResult[0] === OFF_RULE;
      if (!isDeactivated) {
        formattedRules[ruleName] = {
          subObj: ruleResult,
          comment: getLinkForPlugin(ruleName),
        };
      }
    });

  const src = objToSource(formattedRules).replace(
    /"error"/g,
    'warnInDevelopment',
  );
  return `const x = { rules: ${src} };`;
}

module.exports = formatRules;
