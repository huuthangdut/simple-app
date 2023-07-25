'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(
    `<body ><h1 style='color: #283E5B;text-align:center'>Hello CI/CD with AWS Code Pipeline ${os.hostname()}</h1></body>`
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
