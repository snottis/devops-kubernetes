FROM node:14
ENV NODE_ENV=production
WORKDIR /app
COPY package* ./
COPY index.js ./
RUN npm i
CMD ["node", "index.js"]