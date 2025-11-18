#!/bin/bash
cd /home/kavia/workspace/code-generation/automation-workflow-platform-197368-197377/rpa_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

