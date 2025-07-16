#!/bin/sh
set -e
./install.sh
if docker ps | grep express-middleware-app >/dev/null 2>&1; then
  echo "[SUCCESS] Express TypeScript container is running."
else
  echo "[ERROR] Container failed to start. Check Docker logs for details." >&2
  exit 1
fi
