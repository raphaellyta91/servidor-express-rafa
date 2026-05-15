import mysql from 'mysql2/promise'

export const conexao = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'BemVindo!',
    database: 'sistema'
})

console.log('Conectado ao banco sistema!')