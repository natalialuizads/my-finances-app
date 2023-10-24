FROM node:16 AS builder

RUN mkdir -p /usr/src/front
WORKDIR /usr/src/front

COPY package*.json /usr/src/front/

RUN npm install

COPY . /usr/src/front

CMD ng serve --host 0.0.0.0
