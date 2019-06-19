FROM nginx:mainline-alpine

RUN mkdir -p /var/www/canvas

COPY ./Dockerfile.d/nginx/default /etc/nginx/sites-available/default
COPY ./public /var/www/canvas
