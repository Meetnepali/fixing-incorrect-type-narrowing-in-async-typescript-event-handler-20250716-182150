#!/bin/sh
set -e
if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] Docker is not installed. Please install Docker." >&2
  exit 1
fi
if [ -z "$(docker images -q express-typescript-middleware:latest 2>/dev/null)" ]; then
  echo "[INFO] Building Docker image..."
  docker build -t express-typescript-middleware:latest .
else
  echo "[INFO] Docker image already built. Skipping build."
fi
if [ "$(docker ps -aq -f name=express-middleware-app)" ]; then
  echo "[INFO] Removing old container..."
  docker rm -f express-middleware-app >/dev/null 2>&1 || true
fi

echo "[INFO] Running Express app in Docker container..."
docker run --name express-middleware-app -d -p 3000:3000 express-typescript-middleware:latest
sleep 2
echo "[INFO] Container started. App accessible at http://localhost:3000"