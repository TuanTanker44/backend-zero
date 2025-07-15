const express = require('express') //commonjs
const router = express.Router() // Import express Router for routing
const { getHomePage, getSamplePage, getFormPage, postCreateUser } = require('../controllers/home.Controller') // Import the home controller

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// cấu trúc route:
// router.Method('/route', handler) => {}

router.get('/users', getHomePage) // Define a route for the home page using the getHomePage controller
  
router.get('/sample', getSamplePage);

router.get('/form', getFormPage);

router.post('/create-user', postCreateUser)

module.exports = router // Export the router for use in other files