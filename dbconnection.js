var mysql=require('mysql');
 var connection=mysql.createConnection({
 
host:'localhost',
 user:'root',
 password:'',
 database:'anticadb',
 multipleStatements: true
 
});
 module.exports=connection;