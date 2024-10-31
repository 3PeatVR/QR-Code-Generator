FROM node:latest
WORKDIR /mon-app/
COPY public /mon-app/public
COPY src /mon-app/src
COPY package.json /mon-app/ 
RUN npm install
CMD ["npm", "start"]