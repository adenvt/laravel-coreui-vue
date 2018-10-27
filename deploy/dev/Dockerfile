FROM php:7.2-fpm

LABEL maintainer="Ade Novid <adenvt@gmail.com>"

WORKDIR /var/www

RUN set -x \
  && apt-get update -y \
  && apt-get install --no-install-recommends --no-install-suggests -y \
    nginx \
    nginx-extras \
    curl \
    git \
    unzip \
    zlib1g-dev \
    gnupg

# Install Node
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --no-install-recommends --no-install-suggests -y \
  nodejs

# Install PHP Plugin
RUN docker-php-ext-install zip

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install Composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer global require hirak/prestissimo

# Configuring NGINX
COPY deploy/web/site.conf /etc/nginx/sites-available/default
COPY deploy/web/nginx.conf /etc/nginx/nginx.conf
COPY deploy/web/mime.types /etc/nginx/mime.types
COPY deploy/web/php.ini /usr/local/etc/php/

RUN rm -rf /var/www/html/

EXPOSE 80 443 8080

CMD service nginx start && php-fpm
