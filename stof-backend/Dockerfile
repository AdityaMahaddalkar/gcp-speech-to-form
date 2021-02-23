FROM python:latest

COPY . /usr/src

WORKDIR /usr/src

RUN pip install -r requirements.txt

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0"]