FROM nodejs:latest AS frontend
RUN mkdir /src/frontend
COPY ./stof-frondend /src/frontend
WORKDIR /src/frontend
RUN npm install
RUN npm run build


FROM nginx:latest
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN mkdir /src/server
COPY ./stof-backend /src/server
WORKDIR /src/server
RUN pip install -r requirements.txt
COPY --from=frontend /src/frontend/build usr/share/nginx/html
EXPOSE 80
CMD [ "uvicorn", "main:app", "--reload" ]
