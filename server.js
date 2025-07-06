const express = require('express') //commonjs
const app = express() // Import express module
const port = 8080 


//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
