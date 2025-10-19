FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install

ENV PORT=80

EXPOSE 80

CMD ["npm", "start"]