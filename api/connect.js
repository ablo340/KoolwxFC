var express = require('express'); // Web Framework
var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Content-Type', 'application/json');
    next();
});

const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/app.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the app database.');
});

app.get('/', function (req, res) {
    let sql = `SELECT * FROM Teams`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.end(JSON.stringify(rows)); // Result in JSON format
    });
    
})


// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});