const express = require('express') //commonjs
const router = express.Router() // Import express Router for routing
const { getHomePage, getSamplePage, getFormPage, postCreateUser, getUsersPage, getUpdatePage, postUpdateUser } = require('../controllers/home.Controller') // Import the home controller

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// cấu trúc route:
// router.Method('/route', handler) => {}

router.get('/', getHomePage) // Define a route for the home page using the getHomePage controller

router.get('/users', getUsersPage) // Define a route for the home page using the getHomePage controller
  
router.get('/sample', getSamplePage);

router.get('/form', getFormPage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router // Export the router for use in other files