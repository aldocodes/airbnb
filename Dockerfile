FROM node:carbon

WORKDIR /Users/aldohari/Documents/HackReactor/hrla22/airbnb

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]

