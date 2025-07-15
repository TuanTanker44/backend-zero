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

const getFormPage = (req, res) => {
    res.render('form.ejs');
}

const postCreateUser = (req, res) => {
    
    let { name, email, city } = req.body;
    console.log('>>>Request body: ', req.body); // Log the request body
    console.log('>>>Name: ', name);
    console.log('>>>Email: ', email);  
    console.log('>>>City: ', city);
    
    connection.query(
        'INSERT INTO Users (name, email, city) VALUES (?, ?, ?)',
        [name, email, city],
        function (error, results, fields) {
            if (error) {
                console.error('Error in query:', error.message);
                return;
            }
            res.send('User created successfully!');
        }
    );
}

module.exports = {
    getHomePage,
    getSamplePage,
    getFormPage,
    postCreateUser
}
