const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Oh hi there, this is my second edit'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
