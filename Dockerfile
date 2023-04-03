# Stage 1

FROM node:16-alpine as build-step

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

# Stage 2

FROM nginx:latest

COPY --from=build-step /app/dist/teacher-wordle /usr/share/nginx/html

EXPOSE 80
