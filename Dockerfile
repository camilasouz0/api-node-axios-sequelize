FROM node:14

WORKDIR /projetocat/src

COPY /projetocat/package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

EXPOSE 8081

EXPOSE 8082

USER node

CMD [ "npm", "start" ]