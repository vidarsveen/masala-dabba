#!/bin/bash
# usage: shot3.sh name WxH "query"
cd "$(dirname "$0")"; W=$(pwd -W); CH="C:/Program Files/Google/Chrome/Application/chrome.exe"
"$CH" --headless=new --no-sandbox --use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist --window-size=$2 --timeout=25000 --screenshot="$W/$1.png" --user-data-dir="$W/prof_$1" --enable-logging=stderr "http://127.0.0.1:8765/dist/italia-course.html$3" 2>&1 | grep -i 'uncaught\|typeerror\|referenceerror\|syntaxerror' | sed 's/.*CONSOLE([0-9]*)\] //' | head -5
