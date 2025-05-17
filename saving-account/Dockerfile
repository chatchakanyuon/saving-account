FROM node:20-alpine AS build
LABEL authors="chatchakanyuon"
RUN npm install -g @angular/cli
WORKDIR /app
COPY saving-account/package*.json ./
RUN npm install
COPY saving-account/. .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
