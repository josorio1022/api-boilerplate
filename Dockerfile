FROM node:alpine

## move to tmp folder
WORKDIR /tmp
## copy package.json from host to target tmp folder
ADD package.json /tmp/package.json
## install packages
RUN yarn
## create target app folder and copy node_modules
RUN mkdir -p /usr/src/app && cp -a node_modules /usr/src/app/
## move to app directory
WORKDIR /usr/src/app/
## copy app folder from host to target folder
ADD . /usr/src/app
## build dist
RUN yarn build
## expose app port
EXPOSE 3000
## start app
CMD ["yarn", "start:prod"]