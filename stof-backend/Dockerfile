FROM python:latest

COPY . /usr/src

WORKDIR /usr/src

RUN pip install -r requirements.txt

EXPOSE 8000

CMD [ "uvicorn", "main:app"]