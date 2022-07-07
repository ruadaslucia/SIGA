var express = require('express');
var app = express();

var HTTP_PORT = 4000;

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

app.use((req, res) => {
  res.status(404);
});
