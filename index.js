const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

const port = 3000;

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
app.get('/', (req, res) => {
  res.send('Welcome to My Express App!');
});
https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
