FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts --no-audit --silent
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
