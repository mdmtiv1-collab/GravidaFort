const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3082;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url.split('?')[0]; // Ignorar query strings
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Erro interno do servidor: '+error.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Porta ${PORT} já está em uso.`);
        console.log(`Abrindo a página existente no navegador...`);
        openBrowser(`http://localhost:${PORT}`);
        process.exit(0);
    } else {
        console.error('Erro no servidor:', err);
    }
});

server.listen(PORT, () => {
    console.log(`Servidor local do GravidaFort iniciado com sucesso!`);
    console.log(`Endereço: http://localhost:${PORT}`);
    console.log('Pressione Ctrl+C para encerrar.');
    openBrowser(`http://localhost:${PORT}`);
});

function openBrowser(url) {
    const startCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
    exec(`${startCmd} ${url}`, (err) => {
        if (err) {
            console.log(`Por favor, acesse manualmente: ${url}`);
        }
    });
}
