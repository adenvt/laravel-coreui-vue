FROM node:8 AS compiler

LABEL maintainer="Ade Novid <adenvt@gmail.com>"

WORKDIR /var/www
COPY package.json /var/www
COPY package-lock.json /var/www
RUN npm ci

COPY . /var/www
RUN npm run lint-js
RUN npm run lint-css
RUN npm run prod
RUN rm -rf /var/www/node_modules/

FROM php:7.2-fpm AS server
RUN set -x \
  && apt-get update -y \
  && apt-get install --no-install-recommends --no-install-suggests -y \
    nginx \
    nginx-extras \
    curl \
    git \
    unzip \
    zlib1g-dev \
  && apt-get clean
RUN docker-php-ext-install zip

WORKDIR /var/www

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer config -g repos.packagist composer https://packagist.jp
RUN composer global require hirak/prestissimo
COPY composer.json composer.json
COPY composer.lock composer.lock
RUN composer install \
  --prefer-dist \
  --no-ansi \
  --no-dev \
  --no-interaction \
  --no-progress \
  --no-scripts \
  --no-autoloader \
  && rm -rf /root/.composer

COPY deploy/web/site.conf /etc/nginx/sites-available/default
COPY deploy/web/nginx.conf /etc/nginx/nginx.conf
COPY deploy/web/mime.types /etc/nginx/mime.types
COPY deploy/web/php.ini /usr/local/etc/php/php.ini

# Force HTTPS
ARG FORCE_HTTPS=false
RUN if [ ${FORCE_HTTPS} = true ]; then \
  sed -i 's/# fastcgi_param HTTPS/fastcgi_param HTTPS/' /etc/nginx/sites-available/default \
;fi

COPY --from=compiler /var/www /var/www
RUN php php-cs-fixer fix --dry-run
RUN composer dump-autoload --no-dev --optimize
RUN grep -q "APP_KEY=" .env || echo "APP_KEY=" >> .env
RUN php artisan key:generate \
  && php artisan optimize
RUN chown -R www-data:www-data /var/www
RUN rm -rf /var/www/html/ /var/www/deploy/

EXPOSE 80 443

CMD service nginx start && php-fpm
