FROM node:latest AS frontend

# Copy and install package.json node modules
COPY /stof-frontend/package.json /stof-frontend/package-lock.json /usr/src/
WORKDIR /usr/src
RUN npm install

# Copy and build react application
ADD /stof-frontend .
RUN npm run build

FROM ubuntu:latest

# Install nginx and restart nginx service
RUN apt update
RUN apt install nginx
RUN service nginx restart

# Install python, pip and setup tools
RUN apt install -y python3.8
RUN apt install -y puthon3-pip

# Copy python server codebase to src
WORKDIR /usr/src
ADD /stof-backend /usr/src

# Run pip install for all python modules
RUN pip install -r requirements.txt

# Copy from react build folder to nginx html folder
COPY --from=frontend /usr/src/build /usr/share/nginx/html

# Expose 80 port for nginx default
EXPOSE 80

# Run uvicorn app
CMD [ "uvicorn", "main:app", "--reload" ]
