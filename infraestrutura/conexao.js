const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '21nael24',
  database: 'agenda-petshop'
})

// const conexao = mysql.createConnection({
//   host: process.env.HOST,
//   port: process.env.PORT,
//   user: process.env.USR,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// })

module.exports = conexao
