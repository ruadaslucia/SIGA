var express = require('express');
var app = express();
var database = require('./database.js');

var HTTP_PORT = 4001;

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

app.get("/api/users", (req, res) => {
  var sql = "select * from user"
  var params = []
  database.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      console.log(rows);
      res.json({
          "message":"success",
          "data":rows
      })
    });
});