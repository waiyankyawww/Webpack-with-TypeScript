FROM node:alpine
WORKDIR /webpack-ts-tutorial
COPY package.json .
RUN npm install\
    && npm install typescript -g
COPY . .
RUN tsc
CMD ["node", "./dist/server.js"]