const express = require("express");
const mysql = require('mysql');

const app = express();  

const connection = mysql.createConnection({
    host: '127.0.0.1', 
    port: '3306',
    user: 'root', 
    database: 'products', 
    password: 'password', 
    multipleStatements: true
}); 

connection.connect((error) => {
    if (error) {
        console.log(error);
        return; 
    }
    console.log("Connection established successfully");
});

connection.query('')