# Dockerfile for React Frontend
FROM node:14

WORKDIR /apps/frontend

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
