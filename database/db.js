import mysql from 'mysql2/promise';
require('dotenv').config();


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: process.env.database,
  });
  
  export default pool;
