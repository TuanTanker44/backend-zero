const connection = require('../config/database'); // Import the database connection

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

module.exports = {
    getAllUsers
}