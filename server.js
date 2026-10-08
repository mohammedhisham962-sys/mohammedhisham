const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by Render, or 3000 for localhost
const port = process.env.PORT || 3000;

// Serve all static files (HTML, CSS, JS) from the current folder
app.use(express.static(__dirname));

// Send all requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Portfolio website is running on port ${port}`);
});
