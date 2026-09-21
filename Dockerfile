FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321 24678

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
