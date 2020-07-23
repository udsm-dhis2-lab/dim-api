FROM node:10-alpine
RUN mkdir /home/app
WORKDIR /home/app

# FROM node:10 AS builder
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build


# FROM node:10-alpine
# WORKDIR /app
# COPY --from=builder /app ./
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]

# Using Node:10 Image Since it contains all 
# the necessary build tools required for dependencies with native build (node-gyp, python, gcc, g++, make)
# First Stage : to install and build dependences

# FROM node:10 AS builder
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build


# # Second Stage : Setup command to run your app using lightweight node image
# FROM node:10-alpine
# WORKDIR /app
# COPY --from=builder /app ./
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]


# FROM node:10-alpine
# RUN mkdir /home/app
# WORKDIR /home/app
# # WORKDIR /app
# ADD package.json /home/app/package.json
# RUN npm config set registry http://registry.npmjs.org
# RUN npm install
# ADD . /home/app
# EXPOSE 3000
# CMD ["npm", "run", "start"]





