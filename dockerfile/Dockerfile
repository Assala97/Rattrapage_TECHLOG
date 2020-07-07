FROM node:latest

WORKDIR /web/app/
COPY package.json /web/app
RUN npm install
COPY . /web/app

RUN npm install -g nodemon
EXPOSE 3000
CMD [ "nodemon", "server.js" ]

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY index.html index.html
