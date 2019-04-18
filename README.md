# Laravel CoreUI Vue

> Laravel + CoreUI + Vue Boilerplate

![Packagist Version](https://img.shields.io/packagist/v/adenvt/laravel-coreui-vue.svg?color=brightgreen&label=version)
![Travis (.com)](https://img.shields.io/travis/com/adenvt/laravel-coreui-vue.svg)
![Travis (.com) branch](https://img.shields.io/travis/com/adenvt/laravel-coreui-vue/develop.svg?label=dev%20build)
[![Greenkeeper badge](https://badges.greenkeeper.io/adenvt/laravel-coreui-vue.svg)](https://greenkeeper.io/)
![Packagist](https://img.shields.io/packagist/dt/adenvt/laravel-coreui-vue.svg)
![David](https://img.shields.io/david/adenvt/laravel-coreui-vue.svg?logo=npm)
![David](https://img.shields.io/david/dev/adenvt/laravel-coreui-vue.svg?logo=npm)
![Packagist](https://img.shields.io/packagist/l/adenvt/laravel-coreui-vue.svg?color=blue)

## What's inside
* [Laravel][laravel] 5.8, A PHP framework for web artisans
* [Core UI][coreui] for Vue, Free Bootstrap Admin Template
* Usefull library: [Axios][axios], [jQuery][jquery], [Moment.js][moment], [Lodash][lodash]
* [Vue Router][vue-router] and [Vuex][vuex], set out of the box
* PWA ready, powered by [Offline-plugin][offline-plugin] and [Workbox][workbox]
* Notification using [Vue-SweatAlert2][vue-sweatalert2] and [Vue-Notification][vue-notification]
* Loading spinner with [Vue Loading Spinner][vue-loading-spinner]
* Quick deployment with [Docker Compose][docker-compose]
* [Laravel Page Speed][laravel-page-speed], Simple package to minify HTML output on demand which results in a 35%+ optimization

## Requirement
* **PHP** >= 7.1.3
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Ctype PHP Extension
* JSON PHP Extension
* **Node** >= 8.9.4
* **NPM** >= 5.6.0

## How to Install
### via Composer
1. Create project using composer
```bash
composer create-project --prefer-dist adenvt/laravel-coreui-vue project_name
cd project_name
```
2. Install Dependencies
```bash
npm install
```
3. Add write permission (Unix)
```bash
chmod -R go+w storage bootstrap/cache
```
4.  Compile Static Asset
```bash
## for Development
npm run dev

## for Production
npm run prod

## for Development with HMR (Hot Module Replacement)
npm run hot
```

### via Git
1. Clone this repo
```bash
git clone --depth=1 https://github.com/adenvt/laravel-coreui-vue.git project_name
cd project_name
rm -r .git
```
2. Install Dependencies
```
composer install
npm install
```
* Step 3 - 4 same as above

## Using Docker Compose

### For Development
* Create and start Container
```bash
docker-compose up -d dev
```

* Enter workspace
```bash
docker-compose exec dev bash
```

* Install Depencies
```
composer install
npm install
```

* Compile Static Asset
```bash
## Single run compile
npm run dev

## or watch and compile every change
npm run watch

## or using Hot Module Replacement
npm run hot
```
* Open browser, goto [http://localhost:8888](link)

### For Production
* Create and start Container
```
docker-compose up -d prod
```

* Open browser, goto [http://localhost:88](link)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[laravel]: https://laravel.com
[coreui]: https://coreui.io
[axios]: https://github.com/axios/axios
[jquery]: https://jquery.com/
[lodash]: https://lodash.com/
[moment]: https://momentjs.com/
[vue-router]: https://router.vuejs.org/
[vuex]: https://vuex.vuejs.org/
[vue-sweatalert2]: https://github.com/avil13/vue-sweetalert2
[vue-notification]: http://vue-notification.yev.io/
[vue-loading-spinner]: https://nguyenvanduocit.github.io/vue-loading-spinner/
[docker-compose]: https://docs.docker.com/compose/
[offline-plugin]: https://github.com/NekR/offline-plugin
[workbox]: https://developers.google.com/web/tools/workbox/
[laravel-page-speed]: https://github.com/renatomarinho/laravel-page-speed
