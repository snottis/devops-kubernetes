FROM node:14
ENV NODE_ENV=production
WORKDIR /app
COPY package* ./
ADD src ./src
ADD public ./public
RUN npm i
RUN mkdir /img
CMD ["npm", "start"]