const path          = require('path')
const mix           = require('laravel-mix')
const webpack       = require('webpack')
const { version }   = require('./package.json')
const WebpackBar    = require('webpackbar')
const OfflinePlugin = require('offline-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
mix.sass('resources/sass/app.scss', 'public/css')
mix.webpackConfig({
  devServer: { disableHostCheck: true },
  resolve  : {
    alias: {
      '@'         : path.resolve(__dirname, 'resources/js/coreui/'),
      'static'    : path.resolve(__dirname, 'resources/static/'),
      'validators': 'vuelidate/lib/validators',
    },
  },
  plugins: [
    new WebpackBar({ profile: true }),
    new webpack.DefinePlugin({ __VERSION: JSON.stringify(version) }),
    new OfflinePlugin({
      publicPath      : '/',
      appShell        : '/',
      responseStrategy: 'network-first',
      externals       : [
        '/',
        '/manifest.json',
        '/favicon.png',
      ],
      ServiceWorker: {
        entry : path.resolve(__dirname, 'resources/js/sw.js'),
        output: 'sw.js',
        minify: mix.inProduction(),
      },
    }),
  ],
})

mix.extend('vueOptions', (webpackConfig, vueOptions, ...arguments_) => {
  const vueLoader = webpackConfig.module.rules.find((loader) => loader.loader === 'vue-loader')

  vueLoader.options = require('webpack-merge').smart(vueLoader.options, vueOptions)
})

mix.vueOptions({
  transformToRequire: {
    'img'             : 'src',
    'image'           : 'xlink:href',
    'b-img'           : 'src',
    'b-img-lazy'      : ['src', 'blank-src'],
    'b-card'          : 'img-src',
    'b-card-img'      : 'img-src',
    'b-carousel-slide': 'img-src',
    'b-embed'         : 'src',
  },
})

mix.extract([
  'axios',
  'bootstrap',
  'bootstrap-vue',
  'chart.js',
  'jquery',
  'lodash',
  'moment',
  'popper.js',
  'select2',
  'vue',
  'vue-chartjs',
  'vue-loading-spinner',
  'vue-notification',
  'vue-router',
  'vue-sweetalert2',
  'vuejs-datepicker',
  'vuelidate',
  'vuex',
  'vuex-easy-access',
])

mix.options({
  clearConsole: false,
  hmrOptions  : {
    host: process.env.MIX_HMR_HOST,
    port: process.env.MIX_HMR_PORT,
  },
  terser: { terserOptions: { parallel: true } },
})

if (mix.inProduction())
  mix.version()
else
  mix.sourceMaps()

if (process.platform === 'darwin')
  mix.disableNotifications()
