#!/usr/bin/env node

'use strict';

const yargs = require('yargs');
// const pkg = require('../package.json');

yargs
  // .command(create)
  // .command(build)
  // .command(watch)
  .command(require('./commands/dev'))
  // .command(list)
  .usage(`\nFor help with a specific command, enter:\n  app help [command]`)
  .help()
  .alias('h', 'help')
  .demandCommand()
  .strict().argv;
