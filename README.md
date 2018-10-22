# Laravel CoreUI Vue

> Laravel + CoreUI + Vue Boilerplate

[![PHP version](https://badge.fury.io/ph/adenvt%2Flaravel-coreui-vue.svg)](https://badge.fury.io/ph/adenvt%2Flaravel-coreui-vue)

## What's inside
* [Laravel][laravel] 5.7, A PHP framework for web artisans
* [Core UI][coreui] for Vue, Free Bootstrap Admin Template
* Usefull library: [Axios][axios], [jQuery][jquery], [Moment.js][moment], [Lodash][lodash]
* [Vue Router][vue-router] and [Vuex][vuex], set out of the box
* PWA ready, powered by [Offline-plugin][offline-plugin] and [Workbox][workbox]
* Notification using [Vue-SweatAlert2][vue-sweatalert2] and [Vue-Notification][vue-notification]
* Loading spinner with [Vue Loading Spinner][vue-loading-spinner]
* Quick deployment with [Docker Compose][docker-compose] [TODO]

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
* For Ubuntu, require `apt-get install libpng16-dev`, [see](https://github.com/imagemin/imagemin-mozjpeg/issues/28)

## How to Install
* Install using composer (no need to cloning)
```bash
composer create-project --prefer-dist adenvt/laravel-coreui-vue project_name
```
* Install Dependencies
```bash
cd project_name

npm install
```
* Add write permission (Unix)
```bash
chmod -R go+w storage bootstrap/cache
```
* Compile Static Asset
```bash
## for Development
npm run dev

## for Production
npm run prod

## for Development with HMR (Hot Module Replacement)
npm run hot
```

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
