const connection = require('../config/database');
const { getAllUsers, updateUserById, createUser } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    res.render('home.ejs'); // Render the home page view
}


const getUsersPage = async (req, res) => {
    let users = await getAllUsers();
    res.render('users.ejs', { users: users });
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs');
}

const getFormPage = (req, res) => {
    const port = process.env.PORT || 8888
    const localhost = process.env.HOST_NAME 
    res.render('create.ejs', {port: port, localhost: localhost}); // Render the form page view with port and hostname
}

const postCreateUser = async (req, res) => {

    let { name, email, city } = req.body;
    console.log('>>>Request body: ', req.body); // Log the request body
    
    await createUser(name, email, city);
    res.redirect('/users'); 
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : null;
    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    
    let { name, email, city } = req.body;
    let userId = req.body.userId;
    console.log('>>>Request body: ', req.body); // Log the request body
    
    await updateUserById(userId, name, email, city);
    res.redirect('/users');
}


module.exports = {
    getHomePage,
    getSamplePage,
    getFormPage,
    postCreateUser,
    getUsersPage,
    getUpdatePage,
    postUpdateUser
}
