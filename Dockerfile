FROM node:alpine3.12

# Setup workspace
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# Instal deps
RUN apk update && apk upgrade
RUN apk add git

# Copy source code and build app
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]