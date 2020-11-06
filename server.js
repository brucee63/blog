const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.get('*', (req, res) => {
    if (req.path.endsWith('bundle.js')) {
        res.sendFile(path.resolve(__dirname, 'bundle.js'));
    } else {
        res.sendFile(path.resolve(__dirname, 'index.html'));
    }
});

app.listen(port, () => {
    console.log('listening on port ' + port);
    console.log(__dirname);
});