const connection = require('../config/database'); // Import the database connection

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const createUser = async (name, email, city) => {
    let [results, fields] = await connection.query(
        'INSERT INTO Users (name, email, city) VALUES (?, ?, ?)', [name, email, city]);
}
const updateUserById = async (userId, name, email, city) => {
    let [results, fields] = await connection.query(
        'UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ?', [name, email, city, userId]);
}

module.exports = {
    getAllUsers,
    updateUserById,
    createUser
}