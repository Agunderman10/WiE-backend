const mysql = require('mysql');

require('dotenv').config();

const DATABASE_HOST = process.env.DB_HOST;
const DATABASE_USER = process.env.DB_USER;
const DATABASE_PASSWORD = process.env.DB_PASS;
const DATABASE = process.env.DB;

const connection = mysql.createPool({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE,
    port: 3306,
    connectionLimit: 10,
    connectTimeout: 10000,
    waitForConnections: true,
});

module.exports = connection;