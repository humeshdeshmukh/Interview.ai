FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production

COPY . .

EXPOSE 5000

CMD ["npm","yarn", "start"]
