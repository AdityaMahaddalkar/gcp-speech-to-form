import logging
import time

from fastapi import FastAPI, Request
from starlette.middleware.cors import CORSMiddleware

from controller.html_form_controller import html_form_router

# logging.config.fileConfig('logging.conf', disable_existing_loggers=False)

app = FastAPI()

app.include_router(html_form_router)

origins = [
    "*",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:4200",
    "http://localhost:5000",
    "http://localhost:80",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.middleware("http")
async def logger(request: Request, call_next):
    logging.info(f"Request from {request.client}")
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers['X-Process-Time'] = str(process_time)
    return response

@app.get("/")
async def root():
    return {
        "hello": "world"
    }