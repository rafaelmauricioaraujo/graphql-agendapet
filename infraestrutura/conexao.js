const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USR,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

module.exports = conexao
