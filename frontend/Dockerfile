FROM node:16.13.1

WORKDIR /frontend
#WORKDIR /test3

COPY package.json /frontend/
COPY src /frontend/src
COPY public /frontend/public

#RUN npm install
RUN npm install -g npm@9.5.0

CMD [ "npm", "start" ]
#EXPOSE 5002