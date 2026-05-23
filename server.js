const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const DB_FILE = path.join(__dirname, 'db.json');

// Initialize database with default template if not exists
function initDb() {
    if (!fs.existsSync(DB_FILE)) {
        const defaultData = {
            orders: [],
            settings: {
                vatRate: 14,
                deliveryFee: 30,
                minOrder: 0,
                waPhone: "201229746767",
                waMsg: "لدي طلب جديد من الموقع",
                ordersOpen: "1"
            },
            prices: {}
        };
        fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 4), 'utf8');
        console.log('Initialize database file: db.json created with default settings.');
    }
}

initDb();

function getDbData() {
    try {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(raw);
    } catch (e) {
        console.error('Error reading db.json:', e);
        return { orders: [], settings: {}, prices: {} };
    }
}

function saveDbData(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 4), 'utf8');
        return true;
    } catch (e) {
        console.error('Error writing to db.json:', e);
        return false;
    }
}

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Enable CORS for ease of access during testing
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = parsedUrl.pathname;

    // --- API Endpoints ---
    if (pathname === '/api/data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(getDbData()));
        return;
    }

    if (pathname === '/api/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const newData = JSON.parse(body);
                // Basic validation: merge with current database to prevent accidental wiping
                const current = getDbData();
                const merged = {
                    orders: newData.orders !== undefined ? newData.orders : current.orders,
                    settings: newData.settings !== undefined ? newData.settings : current.settings,
                    prices: newData.prices !== undefined ? newData.prices : current.prices
                };
                
                if (saveDbData(merged)) {
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ success: true, message: 'Database saved successfully!' }));
                } else {
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ success: false, message: 'Could not write database file' }));
                }
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload' }));
            }
        });
        return;
    }

    // --- Static File Server ---
    // Default to serving index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Safeguard directory traversal attack
    const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(__dirname, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found - Caruso\'s Local Server');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(filePath);
        stream.on('error', (streamErr) => {
            console.error('Stream read error:', streamErr);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Internal Server Error');
            }
        });
        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🍕 Caruso's Restaurant Local Server is running!`);
    console.log(`🌐 Website URL:      http://localhost:${PORT}`);
    console.log(`📊 Admin Dashboard:  http://localhost:${PORT}/admin.html`);
    console.log(`📁 Database File:    ${DB_FILE}`);
    console.log(`====================================================`);
});
