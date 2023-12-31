FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci

ENV DEBUG=fullstackopen-part12:* 

USER node
CMD npm start
