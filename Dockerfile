FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/00_default.conf
COPY ./dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]