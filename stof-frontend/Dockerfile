FROM node:latest AS frontend

# Copy and install package.json node modules
COPY package.json package-lock.json /usr/src/
WORKDIR /usr/src
RUN npm install

# Copy and build react application
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]


# FROM nginx:latest

# # Copy custom nginx configuration file
# COPY /nginx-conf/nginx.conf /etc/nginx/nginx.conf

# # Copy build from node layer to nginx html folder
# COPY --from=frontend /usr/src/build /usr/share/nginx/html


