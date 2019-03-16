var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Passw0rd@21",
    database:"burgers_db"
});

connection.connect(function(err){
  if(err){
      console.error("Cannot connect to the database: " + err.stack);
      return;
    }console.log("connected " + connection.threadId);
});

module.exports = connection;