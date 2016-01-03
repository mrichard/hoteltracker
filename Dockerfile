FROM node:argon

MAINTAINER Michel Richard <michel.richard.0123@gmail.com>

ENV HOME_DIRECTORY /usr/src/app

RUN mkdir $HOME_DIRECTORY
WORKDIR $HOME_DIRECTORY

COPY package.json .
RUN npm install --production

COPY . $HOME_DIRECTORY

EXPOSE 8080

CMD ["npm", "run", "hapi-server"]
