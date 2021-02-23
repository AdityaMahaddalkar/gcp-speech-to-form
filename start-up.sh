# Start nginx service
service nginx restart

# Start fastAPI backend
uvicorn main:app --host 0.0.0.0