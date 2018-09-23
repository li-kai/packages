'use strict';

const PLUGIN_TO_DOC = {
  'eslint-plugin-node': 'https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/',
  'eslint-plugin-import': 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
  'eslint-plugin-react': 'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/',
  'eslint-plugin-jsx-a11y': 'https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/',
  'eslint-plugin-prettier': 'https://github.com/prettier/eslint-plugin-prettier/blob/master/docs/rules/',
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

module.exports = {
  getLinkForPlugin,
};
