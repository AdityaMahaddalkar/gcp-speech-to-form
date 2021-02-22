import logging

from google.cloud import speech

logging.config.fileConfig('logging.conf', disable_existing_loggers=False)


def check_health():
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


def apply_speech_to_text(audio):
    logging.info(f"Type of data: {type(audio)}")
    logging.info(f"Data content: {audio}")
    with open('temp.wav', 'wb') as outfile:
        outfile.write(audio)
    return None
