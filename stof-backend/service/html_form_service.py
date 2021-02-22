import logging
from datetime import datetime, timezone

import aiofiles as aiofiles
from google.cloud import speech

import os

EXTENSION = "mp3"
AUDIO_OUTPUT_DIR = "resources"

logging.config.fileConfig('logging.conf', disable_existing_loggers=False)


async def check_health():
    try:
        client = speech.SpeechClient()
        logging.info("GCP Speech To Text is reachable")
        return {
            "health": 'green'
        }
    except Exception as e:
        logging.error("GCP Speech To Text is unreachable")
        return {
            "health": "red",
            "exception": str(e)
        }


async def apply_speech_to_text(audio):
    logging.info(f"Type of data: {type(audio)}")
    file_name = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S")
    async with aiofiles.open(os.path.join(AUDIO_OUTPUT_DIR, f"{file_name}.{EXTENSION}"), "wb") as out_file:
        content = await audio.read()
        await out_file.write(content)
    return None
