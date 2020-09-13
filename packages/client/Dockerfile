FROM node:12 AS build

COPY ["package.json", "yarn.lock", ".eslintrc.js", "lerna.json", ".prettierrc.js", ".eslintignore", "./"]
COPY ["packages/", "./packages"]

WORKDIR /webapp

RUN yarn &&\
  yarn build

RUN rm -rf /node_modules

FROM node:12
COPY --from=build / /

# WORKDIR /webapp/packages/client

RUN yarn install --production

ENTRYPOINT [ "yarn", "start" ]