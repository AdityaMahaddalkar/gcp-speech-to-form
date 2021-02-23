FROM node:latest AS frontend

# Copy and install package.json node modules
COPY package.json package-lock.json /usr/src/
WORKDIR /usr/src
RUN npm install

RUN npm install -g serve

# Copy and build react application
COPY . .
RUN npm run build

EXPOSE 5000

CMD [ "serve", "-s", "build" ]

# FROM nginx:latest

# # Copy custom nginx configuration file
# COPY /nginx-conf/nginx.conf /etc/nginx/nginx.conf

# # Copy build from node layer to nginx html folder
# COPY --from=frontend /usr/src/build /usr/share/nginx/html


