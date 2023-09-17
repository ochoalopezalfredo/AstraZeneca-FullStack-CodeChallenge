# Dockerfile for Apollo Server Backend
FROM node:14

WORKDIR /apps/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["npm", "start"]
