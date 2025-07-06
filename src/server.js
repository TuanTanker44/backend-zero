const express = require('express') //commonjs
const path = require('path') // Import path module for handling file paths
const app = express() // Import express module
require('dotenv').config() // Load environment variables from .env file
const port = process.env.PORT || 8888 // Set the port from environment variable
const localhost = process.env.HOST_NAME // Set the hostname from environment variable


//config template engine
app.set('views', path.join(__dirname, 'views')) // Set the directory for views
app.set('view engine', 'ejs') // Set EJS as the template engine

//config static files
app.use(express.static(path.join(__dirname, 'public'))) // Serve static files from the public directory

//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sample', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, localhost, () => {
  console.log(`Example app listening at http://${localhost}:${port}`)
})
