FROM node:16.15.1 AS Builder

WORKDIR /workspace

RUN apt update -y && \
  apt install -y curl unzip zip
COPY ./yarn.lock ./package.json ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]
