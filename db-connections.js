var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'restuant_review'
})

connection.connect(err=>{
    if(err) throw err;
    console.log("connected to db")
})

module.exports=connection;