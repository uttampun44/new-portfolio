#base image node
FROM node:20.18.0 as base

#set working directory
WORKDIR /app

#copy package.json and package-lock.json
COPY package.json package-lock.json ./

#install dependencies
RUN npm install

#copy app files
COPY . .

#expose port
EXPOSE 3000

#start app
CMD ["npm", "run", "dev"]