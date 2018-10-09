'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('../webpack/webpack.config.dev');

exports.command = 'dev [src]';

exports.describe = 'Start app in development environment';

exports.builder = {
  cwd: {
    description: 'A directory to use instead of $PWD.',
    default: '.',
  },
  src: {
    description: 'Entry file (e.g. src/index.js)',
    default: 'src',
  },
  port: {
    description: 'Port to start a server on',
    default: '8080',
  },
  host: {
    description: 'Hostname to start a server on',
    default: 'localhost',
  },
};

exports.handler = function handler(argv) {
  // do something with argv.
  const resolvedArgv = {
    srcPath: path.resolve(argv.cwd, argv.src),
    destPath: path.resolve(argv.cwd, 'build'),
    publicPath: path.resolve(argv.cwd, 'public'),
  };
  const config = webpackDevConfig(undefined, resolvedArgv);
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, config.devServer);

  const { port, host } = argv;
  server.listen(port, host, () => {
    const serverAddr = `http://${host}:${port}`;
    process.stdout.write(`Starting server on ${serverAddr}\n`);
  });
};
