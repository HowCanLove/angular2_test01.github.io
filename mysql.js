var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'qdm216841332.my3w.com',
    user: 'qdm216841332',
    password: 'lK921109',
    database:'qdm216841332_db',
    insecureAuth: true
})

connection.connect();

connection.query('select * from `articleList`', function(err, rows, fields) {
    if (err) throw err;
    console.log('查询结果为: ', rows[0]['id']);
});

connection.end();