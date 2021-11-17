FROM node:14
ENV NODE_ENV=production
WORKDIR /app
COPY package* ./
ADD src ./src
RUN npm i
RUN mkdir /img
CMD ["npm", "start"]