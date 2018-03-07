var wallabyWebpack = require('wallaby-webpack');
var path = require('path');

const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

var compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions,
  require('./src/tsconfig.spec.json').compilerOptions);

compilerOptions.module = 'CommonJs';

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'src/wallaby.test.js',
      'src/**/*spec.js'
    ],

    module: {
      rules: [
        {test: /\.css$/, loader: ['raw-loader', 'css-loader']},
        {test: /\.html$/, loader: 'raw-loader'},
        {test: /\.ts$/, loader: '@ngtools/webpack'}, // include: /node_modules/, query: { tsConfigPath: 'tsconfig.json' } } ,
        {test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/ },
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader']},
        {test: /\.less$/, loaders: ['raw-loader', 'less-loader']},
        {test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader']},
        {test: /\.(jpg|png)$/, loader: 'url-loader?limit=128000'}
      ]
    },

    resolve: {
      symlinks: true,
      extensions: ['.js', '.ts'],
      modules: [
        path.join(wallaby.projectCacheDir, 'src/app'),
        path.join(wallaby.projectCacheDir, 'src'),
        'node_modules',
      ]
    },

    plugins: [
      // new ProgressPlugin(),
      new AngularCompilerPlugin({
        tsConfigPath: 'src/tsconfig.spec.json',
        compilerOptions: {
          preserveSymlinks: true
        }
      })
    ],

    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
  });

  return {
    files: [
      {pattern: 'src/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false},
      {pattern: 'src/**/*.d.ts', ignore: true},
      {pattern: 'src/**/*spec.ts', ignore: true},
    ],

    tests: [
      {pattern: 'src/**/*spec.ts', load: false},
      {pattern: 'src/**/*e2e-spec.ts', ignore: true}
    ],

    testFramework: 'jasmine',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    filesWithNoCoverageCalculated: [
      'node_modules/**'
    ],

    middleware: function (app, express) {
      var path = require('path');
      app.use('/favicon.ico', express.static(path.join(__dirname, 'src/favicon.ico')));
      app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
    },

    env: {
      kind: 'electron'
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};