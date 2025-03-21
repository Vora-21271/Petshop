#!/bin/bash
PID=$(lsof -t -i:3001)
if [ ! -z "$PID" ]; then
  kill -9 $PID
fi