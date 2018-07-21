const path = require('path')
const mix  = require('laravel-mix')

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

mix.js('resources/assets/js/app.js', 'public/js')
mix.sass('resources/assets/sass/app.scss', 'public/css')
mix.webpackConfig({
  resolve: {
    alias: {
      '@'     : path.resolve(__dirname, 'resources/assets/js/coreui/'),
      'static': path.resolve(__dirname, 'resources/assets/static/'),
    },
  },
})

mix.extend('vueOptions', (webpackConfig, vueOptions, ...args) => {
  const vueLoader = webpackConfig.module.rules.find(loader => loader.loader === 'vue-loader')

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

if (mix.inProduction())
  mix.version()
else
  mix.sourceMaps()

if (process.platform !== 'linux')
  mix.disableNotifications()
