# Dockerfile for React Frontend
FROM node:14

WORKDIR /apps/frontend

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
