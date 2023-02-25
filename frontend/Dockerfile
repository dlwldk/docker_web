FROM node:16.13.1

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
