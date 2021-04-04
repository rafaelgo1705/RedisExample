FROM node:12.20.0

WORKDIR /app

COPY package*.json ./

RUN npm i -g @adonisjs/cli && npm install

COPY . .

EXPOSE 3333

CMD [ "adonis", "serve", "--dev"] 