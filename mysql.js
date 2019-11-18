
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


//sample queries
/*
 var sql = 'SELECT * FROM table';
             con.query(sql, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
	     
 var create = 'CREATE TABLE table100';
             con.query(create, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
	     
 var insert = 'INSERT INTO table (field1, field2, ...) VALUES (value1, value2, ...)';
             con.query(insert, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
	     
 var delete = 'DELETE FROM table1 WHERE condition';
             con.query(delete, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
	     
 var update = 'UPDATE table1 SET field1=new_value1 WHERE condition';
             con.query(update, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
var alter = 'ALTER TABLE table MODIFY field1 type1';
             con.query(alter, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
	     
var drop = 'DROP TABLE table';
             con.query(drop, function (err, result) {
             if (err) throw err;
             console.log(result);
             });
*/
	
	
});
