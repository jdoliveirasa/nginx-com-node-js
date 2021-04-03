FROM nginx:latest

WORKDIR /usr/share/nginx
COPY . .

RUN rm /etc/nginx/conf.d/default.conf
RUN cp /usr/share/nginx/nginx.conf /etc/nginx/conf.d