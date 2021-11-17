FROM node:14
ENV NODE_ENV=production
WORKDIR /app
COPY package* ./
ADD reader ./src
RUN npm i
CMD ["npm", "start"]