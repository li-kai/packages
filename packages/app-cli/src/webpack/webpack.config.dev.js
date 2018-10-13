'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// common function to get style loaders
function getStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
}

module.exports = function webpackConfig(env, argv) {
  return {
    mode: 'development',
    target: 'web',
    // https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-eval-source-map',
    entry: {
      bundle: [
        argv.srcPath,
        'webpack-dev-server/client',
        'webpack/hot/dev-server',
      ],
    },
    context: argv.srcPath,
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, '../../node_modules')],
      extensions: [
        '.js',
        '.jsx',
        '.css',
        '.scss',
        '.ts',
        '.tsx',
        '.less',
        '.sass',
        '.styl',
        '.json',
        '.wasm',
        '.mjs',
      ],
    },
    output: {
      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: true,
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/',
      path: argv.destPath,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(argv.publicPath, 'index.html'),
      }),
    ],
    module: {
      rules: [
        // eslint
        {
          test: /\.(js|jsx)$/,
          loader: require.resolve('eslint-loader'),
          enforce: 'pre',
          exclude: /node_modules/,
          options: {
            useEslintrc: false,
            cache: true,
            baseConfig: {
              extends: [require.resolve('@li-kai/eslint-config-react')],
            },
          },
        },
        // babel
        {
          test: /\.(js|jsx)$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/,
          options: {
            babelrc: false,
            configFile: false,
            presets: [require.resolve('@li-kai/babel-preset-react')],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // Don't waste time on Gzipping the cache
            cacheCompression: false,
            // Show code highlights for errors
            highlightCode: true,
          },
        },
        {
          test: /\.css$/,
          include: argv.publicPath,
          use: getStyleLoaders({
            importLoaders: 1,
          }),
        },
        {
          test: /\.css$/,
          exclude: argv.publicPath,
          use: getStyleLoaders({
            importLoaders: 1,
            modules: true,
          }),
        },
        {
          test: /\.(scss|sass)$/,
          include: argv.publicPath,
          use: getStyleLoaders(
            {
              importLoaders: 2,
            },
            'sass-loader'
          ),
        },
        {
          test: /\.(scss|sass)$/,
          exclude: argv.publicPath,
          use: getStyleLoaders(
            {
              importLoaders: 2,
              modules: true,
            },
            'sass-loader'
          ),
        },
      ],
    },
    devServer: {
      contentBase: argv.publicPath,
      historyApiFallback: true,
      overlay: {
        warnings: false,
        errors: true,
      },
      stats: {
        // https://webpack.js.org/configuration/stats/
        all: false,
        timings: true,
        errors: true,
        errorDetails: true,
        warnings: true,
        moduleTrace: true,
      },
      watchOptions: {
        ignored: /node_modules/,
      },
    },
  };
};
