#!/bin/bash
echo "PATH: $PATH"
which python
which uvicorn
uvicorn main:app --host 0.0.0.0 --port 10000
