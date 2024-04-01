FROM node:lts-alpine as build
WORKDIR /tmp/nodejs-typescript
COPY package*.json tsconfig.json ./
COPY src ./src
RUN npm install
RUN npm run build
COPY . ./

FROM node:lts-alpine
RUN apk update -q && apk upgrade -q
WORKDIR /tmp/nodejs-typescript
COPY --from=build /tmp/nodejs-typescript/build ./
COPY --from=build /tmp/nodejs-typescript/node_modules ./node_modules
COPY --from=build /tmp/nodejs-typescript/package.json ./
CMD ["node", "src/index.js"]