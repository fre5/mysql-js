
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "host_address",
	port: "3306",
	database: "database_name",
	user: "username",
	password: "password"
	
});

con.connect(function(err){
	if(err) {
		console.log("MySQL connection error: " + err.stack);
		process.exit(1);
	}
console.log("Connected to MySQL...");


//sample query
 var sql = 'SELECT * FROM table';
             con.query(sql, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
             
});
