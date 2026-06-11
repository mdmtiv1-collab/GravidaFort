@echo off
chcp 65001 > nul
title GravidaFort - Servidor de Treino Local
echo =========================================================
echo       GravidaFort - Área de Membros para Gestantes
echo =========================================================
echo.
echo Verificando ambiente local...
echo.

node -v >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Node.js detectado. Iniciando servidor Node...
    echo.
    node server.js
    goto end
)

python -c "import http.server" >nul 2>&1
if %errorlevel% equ 0 (
    echo [AVISO] Node.js não encontrado. Usando Python para servir os arquivos...
    echo Acessar manualmente: http://localhost:3082
    echo.
    start http://localhost:3082
    python -m http.server 3082
    goto end
)

echo [AVISO] Nenhuma ferramenta de desenvolvimento (Node/Python) foi encontrada.
echo Abrindo o arquivo index.html diretamente no seu navegador padrão...
echo (Atenção: Os vídeos do Google Drive não funcionarão diretamente via arquivo local devido à segurança do navegador).
echo.
start "" index.html

:end
pause
