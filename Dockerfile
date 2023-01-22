FROM node:18.13.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

# RUN npm install

EXPOSE 4005

CMD ["npm", "run", "server"]