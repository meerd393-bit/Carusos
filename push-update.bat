@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   🚀 رفع التحديثات على الموقع...
echo ========================================
echo.

cd /d "%~dp0"

git add -A
git commit -m "تحديث الموقع - %date% %time%"
git push

echo.
echo ========================================
echo   ✅ تم تحديث الموقع بنجاح!
echo   🌐 https://meerd393-bit.github.io/Carusos/
echo   ⏳ التغييرات هتظهر خلال 1-2 دقيقة
echo ========================================
echo.
pause
