const express = require('express') //commonjs
const router = express.Router() // Import express Router for routing

//khai báo route
router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
router.get('/sample', (req, res) => {
    res.render('sample.ejs')
  })
  

module.exports = router // Export the router for use in other files