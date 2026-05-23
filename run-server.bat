@echo off
title Caruso's Restaurant Server
chcp 65001 > nul
color 0A
cd /d "%~dp0"
echo ==========================================================
echo               CARUSO'S LOCAL SERVER
echo ----------------------------------------------------------
echo.
echo [1/2] Starting Node.js backend database and file server...
echo.

:: Launch the browser with a 2-second delay in a parallel thread so Node.js has time to start up first!
timeout /t 2 >nul
start "" http://localhost:8080
start "" http://localhost:8080/admin.html

call "C:\Program Files\nodejs\node.exe" server.js
if %errorlevel% neq 0 (
    echo.
    color 0C
    echo [ERROR] Could not start the Node.js server!
    echo Please make sure Node.js is installed on your computer.
    echo You can download it from https://nodejs.org
    echo.
    REM pause removed
)
