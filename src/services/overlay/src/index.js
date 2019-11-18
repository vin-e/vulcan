const express = require('express');
const app = express();
const port = 80;

app.use(express.static('src/wwwroot'));

app.listen(port, () =>
  console.log(`Overlay service listening on port ${port}.`)
);