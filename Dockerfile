FROM node:latest

RUN mkdir -p /usr/src/service

WORKDIR /usr/src/service

COPY dist /usr/src/service/

EXPOSE 8080

CMD ["bash", "-c", "NODE_ENV=production node src/main.js"]
