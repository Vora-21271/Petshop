const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const app = express();
const port = 443;

const sslOptions = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Create HTTPS server
https.createServer(sslOptions, app).listen(port, '0.0.0.0', () => {
    console.log(`HTTPS Server running on https://0.0.0.0:${port}, You can access it via https://192.168.1.125/home`);
});