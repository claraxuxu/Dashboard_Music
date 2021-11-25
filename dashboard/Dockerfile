FROM node:14.9

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn

# add app
COPY . ./

# start app
CMD ["yarn", "start"]