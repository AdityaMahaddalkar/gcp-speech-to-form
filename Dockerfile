FROM node:latest AS frontend

# Copy and install package.json node modules
COPY /stof-frontend/package.json /stof-frontend/package-lock.json /usr/src/
WORKDIR /usr/src
RUN npm install

# Copy and build react application
ADD /stof-frontend .
RUN npm run build

FROM ubuntu:latest

# Install nginx
RUN apt update
RUN apt install -y nginx

# Replace default nginx.conf with our custom nginx.conf and restart the service
COPY /stof-frontend/nginx-conf/nginx.conf /etc/nginx/nginx.conf
RUN service nginx restart

# Install python, pip and setup tools
RUN apt install -y python3.8
RUN apt install -y python3-pip

# Copy python server codebase to src
WORKDIR /usr/src
ADD /stof-backend /usr/src

# Run pip install for all python modules
RUN pip3 install -r requirements.txt

# Copy from react build folder to nginx html folder
COPY --from=frontend /usr/src/build /usr/share/nginx/html

# Expose 80 port for nginx default
EXPOSE 80

# Copy start-up.sh file to home
COPY start-up.sh .

# Run uvicorn app
CMD ["sh", "start-up.sh"]
