# Specify a build image
FROM node:15-slim

# Install build tools
RUN apt-get update -y && apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN rm -rf /app/node_modules/face-api.js/node_modules/*

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]