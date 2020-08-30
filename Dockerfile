FROM node:13.2.0-stretch-slim
EXPOSE 4000
WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/

RUN npm ci

COPY . /home/app

RUN npm run build

