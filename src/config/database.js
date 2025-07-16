require('dotenv').config()

const mysql = require('mysql2/promise') // Import MySQL2 for database connection

//create a database connection
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// });

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    charset: 'utf8mb4',
    waitForConnections: true, // cho phép chờ đợi khi tất cả kết nối đang bận
    connectionLimit: 10, // giới hạn số lượng kết nối đồng thời
    queueLimit: 0 // =0: không giới hạn hàng đợi kết nối, >0 : giới hạn số lượng hàng đợi khi tất cả kết nối đang bận
});
  
module.exports = connection;