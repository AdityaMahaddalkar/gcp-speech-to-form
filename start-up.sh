# Start nginx service
service nginx restart

# Start fastAPI backend
uvicorn main:app