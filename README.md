# Laravel CoreUI Vue

[![Greenkeeper badge](https://badges.greenkeeper.io/adenvt/laravel-coreui-vue.svg)](https://greenkeeper.io/)

> Laravel + CoreUI + Vue Boilerplate

[![GitHub version](https://badge.fury.io/gh/adenvt%2Flaravel-coreui-vue.svg)](https://badge.fury.io/gh/adenvt%2Flaravel-coreui-vue)
[![Greenkeeper badge](https://badges.greenkeeper.io/adenvt/laravel-coreui-vue.svg)](https://greenkeeper.io/)

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
* [Download][download] and extract this repository
* Install all depencies
```bash
cd /path/to/folder

composer install
npm install
```
* Copy `.env` file
```bash
cp -r .env.example .env
```
* Generate Application key
```bash
php artisan key:generate
```
* Add write permission (Unix)
```bash
chmod -R go+w storage bootstrap/cache
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[download]: https://github.com/adenvt/laravel-coreui-vue/archive/0.1.0.zip
