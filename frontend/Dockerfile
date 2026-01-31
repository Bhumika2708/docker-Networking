## Build React
FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm install 
COPY . .

RUN npm run build

##serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html