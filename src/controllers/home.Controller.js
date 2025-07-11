const connection = require('../config/database');
let users = [];


const getHomePage = (req, res) => {
    connection.query(
        'select * from Users', 
        function (error, results, fields) {
            if (error) {
            console.error('Error in query:', error.message);
            return;
            }
            users = results; 
            console.log('>>>Results: ', results); // Log the results of the query

            console.log('>>>Users: ', users); // Log the users array
            res.send(JSON.stringify(users));
    });
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage,
    getSamplePage
}
