FROM node:18.16.0-alpine AS appbuild
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build


# Build Stage 2
# This build takes the production build from staging build


FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install apache2 -y
CMD ["/usr/sbin/apache2ctl","-D", "FOREGROUND"]

WORKDIR /var/www/html

COPY --from=appbuild /usr/src/app/build/static ./static
COPY --from=appbuild /usr/src/app/build/_redirects ./
COPY --from=appbuild /usr/src/app/build/asset-manifest.json ./
COPY --from=appbuild /usr/src/app/build/favicon.png ./
COPY --from=appbuild /usr/src/app/build/index.html ./


EXPOSE 80

