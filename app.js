require('dotenv').config();
const express = require('express');
const newrelic = require('newrelic'); // Initialize New Relic for monitoring

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
