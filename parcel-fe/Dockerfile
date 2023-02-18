FROM node:16 AS development

WORKDIR /frontend/app

COPY package*.json ./

RUN npm i
RUN npm i -g @angular/cli@15.1.6

COPY . .

RUN npm run build

EXPOSE 4200
