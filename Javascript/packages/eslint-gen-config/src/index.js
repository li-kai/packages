#!/usr/bin/env node

'use strict';

const fs = require('fs');
const {
  CLIEngine
} = require('eslint');
const {
  getLinkForPlugin,
} = require('./utils');
const objToSource = require('./objToSource');

const FILE_NAME = 'index.js';
const OFF_RULE = 'off';
const WARN_RULE = 'warn';
const ERROR_RULE = 'error';
const NUM_TO_STR_RULE = {
  0: OFF_RULE,
  1: WARN_RULE,
  2: ERROR_RULE,
};
const cli = new CLIEngine({
  fix: true
});

const config = cli.getConfigForFile(FILE_NAME);
const newConfig = {};

const normalisedRules = {};
Object.entries(config.rules)
  .sort(
    ([ruleA], [ruleB]) =>
    // native rules then plugins
    ruleA.localeCompare(ruleB) && ruleA.includes('/') && ruleB.includes('/'),
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
    const isDeactivated = ruleResult === OFF_RULE || ruleResult[0] === OFF_RULE;
    if (!isDeactivated) {
      normalisedRules[ruleName] = {
        subObj: ruleResult,
        comment: getLinkForPlugin(ruleName),
      };
    }
  });

['root', 'parser', 'env', 'plugins', 'rules', 'settings'].forEach((key) => {
  const value = config[key];
  if (value != null) {
    newConfig[key] = value;
  }
});
newConfig.rules = normalisedRules;

const fileContent = `const warnInDevelopment =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = ${objToSource(newConfig)}
`.replace(/"error"/g, 'warnInDevelopment');

fs.writeFileSync(FILE_NAME, fileContent);
CLIEngine.outputFixes(cli.executeOnFiles([FILE_NAME]));
