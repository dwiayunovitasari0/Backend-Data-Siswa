const mysql = require('mysql2/promise'); //import package mysql2
require('dotenv').config(); //import .env u/baca file .env

const pool = mysql.createPool({ 
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0, 
});

console.log('MySQL Connection Pool Created.');

module.exports = pool;