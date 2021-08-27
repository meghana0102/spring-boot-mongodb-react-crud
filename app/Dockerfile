FROM node:alpine
#RUN  apt update && apt npm install
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY src /app/src
COPY public /app/public
COPY . /app
RUN npm install
RUN npm start
EXPOSE 3000
CMD ['npm', 'start']