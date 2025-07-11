require('dotenv').config() // Load environment variables from .env file

const express = require('express') //commonjs
const app = express() // Import express module
const configViewEngine = require('./config/viewEngine') // Import the view engine configuration
const webRoutes = require('./routes/web') // Import the web routes
const mysql = require('mysql2') // Import MySQL2 for database connection


const port = process.env.PORT || 8888 // Set the port from environment variable
const localhost = process.env.HOST_NAME // Set the hostname from environment variable

//config view engine
configViewEngine(app)

//khai báo route
app.use('/', webRoutes) // Use the web routes for the root path

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.query(
  'select * from Users', 
  function (error, results, fields) {
    if (error) {
      console.error('Error in query:', error.message);
      return;
    }
    console.log('Results: ', results); // Log the results of the query
    console.log('Fields: ', fields); // Log the fields of the query
  });

app.listen(port, localhost, () => {
  console.log(`Example app listening at http://${localhost}:${port}`)
})
