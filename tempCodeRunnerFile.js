import mysql from 'mysql2'

const pool=mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Ahil@335',
    database: 'oracle'
}).promise()

const result = await pool.query("SELECT * FROM demo")
console.log(result)