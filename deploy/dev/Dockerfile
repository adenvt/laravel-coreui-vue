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
    gnupg \
    libpng-dev \
    vim \
  && apt-get clean

# Install Node
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --no-install-recommends --no-install-suggests -y \
    nodejs \
  && apt-get clean

# Install PHP Plugin
RUN docker-php-ext-install zip

ENV TZ=Asia/Jakarta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install Composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer config -g repos.packagist composer https://packagist.jp
RUN composer global require hirak/prestissimo

# Configuring NGINX
COPY deploy/web/site.conf /etc/nginx/sites-available/default
COPY deploy/web/nginx.conf /etc/nginx/nginx.conf
COPY deploy/web/mime.types /etc/nginx/mime.types
COPY deploy/web/php.ini /usr/local/etc/php/

# Force HTTPS
ARG FORCE_HTTPS=false
RUN if [ ${FORCE_HTTPS} = true ]; then \
  sed -i 's/# fastcgi_param HTTPS/fastcgi_param HTTPS/' /etc/nginx/sites-available/default \
;fi

# Cleanup
RUN rm -rf /var/www/html/

EXPOSE 80 443 8080

ENV MIX_HMR_HOST=0.0.0.0
ENV MIX_HMR_PORT=8080

CMD service nginx start && php-fpm
