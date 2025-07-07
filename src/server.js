require('dotenv').config() // Load environment variables from .env file

const express = require('express') //commonjs
const app = express() // Import express module
const configViewEngine = require('./config/viewEngine') // Import the view engine configuration
const webRoutes = require('./routes/web') // Import the web routes



const port = process.env.PORT || 8888 // Set the port from environment variable
const localhost = process.env.HOST_NAME // Set the hostname from environment variable

//config view engine
configViewEngine(app)

//khai báo route
app.use('/', webRoutes) // Use the web routes for the root path

app.listen(port, localhost, () => {
  console.log(`Example app listening at http://${localhost}:${port}`)
})
