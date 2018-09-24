#!/usr/bin/env node

'use strict';

const fs = require('fs');
const j = require('jscodeshift');
const { CLIEngine } = require('eslint');
const formatRules = require('./formatRules');

const ESLINT_FILE_NAME = '.eslintrc.js';
const FILE_NAME = 'index.js';

// Get eslint cli engine, with auto fixing
const cli = new CLIEngine({ fix: true });

// Get currently (unformatted) eslint rules
const { rules } = cli.getConfigForFile(FILE_NAME);
// With the raw rules as string, turn them into ast
const rulesRoot = j(formatRules(rules));
// Read the eslint file that we want to modify
const fileContent = fs.readFileSync(ESLINT_FILE_NAME, 'utf-8');
// Turn them into ast as well
const configRoot = j(fileContent);

// Helper function to find the object property
const findProperty = property => ({ key }) => key.name === property;
// Remove 'extends' property in the config file
configRoot.find(j.Property, findProperty('extends')).remove();

// Find the previous 'rules' property
const previousRules = configRoot.find(j.Property, findProperty('rules'));
// Find the new 'rules' property
const newRules = rulesRoot.find(j.Property, findProperty('rules'));
// Replace previous with new rules
previousRules.replaceWith(newRules.get().node);

// Output to raw string
const outputContent = configRoot.toSource();
// Write to disk
fs.writeFileSync(FILE_NAME, outputContent);
// Fix it with its new config
CLIEngine.outputFixes(cli.executeOnFiles([FILE_NAME]));
