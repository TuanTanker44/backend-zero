const express = require('express') //commonjs
const router = express.Router() // Import express Router for routing
const { getHomePage, getSamplePage } = require('../controllers/home.Controller') // Import the home controller

// cấu trúc route
// router.Method('/route', handler) => {}

router.get('/', getHomePage) // Define a route for the home page using the getHomePage controller
  
router.get('/sample', (req, res) => {
    res.render('sample.ejs')
  })
  

module.exports = router // Export the router for use in other files