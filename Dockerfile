FROM node:8 as compiler
WORKDIR /var/www
COPY package.json /var/www
COPY package-lock.json /var/www
RUN npm ci

COPY . /var/www
RUN npm run prod
RUN rm -rf /var/www/node_modules/

FROM php:7.2-fpm as server
RUN set -x \
  && apt-get update -y \
  && apt-get install --no-install-recommends --no-install-suggests -y \
  nginx nginx-extras libcurl3-dev curl git zip unzip zlib1g-dev
RUN docker-php-ext-install zip

WORKDIR /var/www

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY composer.json composer.json
COPY composer.lock composer.lock
RUN composer config -g repos.packagist composer https://packagist.phpindonesia.id
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader && rm -rf /root/.composer

COPY deploy/site.conf /etc/nginx/sites-available/default
COPY deploy/php.ini /usr/local/etc/php/
COPY --from=compiler /var/www /var/www

RUN composer dump-autoload --no-scripts --no-dev --optimize
RUN chown -R www-data:www-data /var/www
RUN rm -rf /var/www/html/ /var/www/deploy/ /var/www/Dockerfile

EXPOSE 80
CMD service nginx start && php-fpm && tail -f /var/log/nginx/error.log
