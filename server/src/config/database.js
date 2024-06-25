import mysql from 'mysql2/promise'
const configDatbase={
    host: 'localhost',
    user:'root',
    password:'yesica16@',
    database:'gestionmaterial'
}
const db=mysql.createPool(configDatbase)

export default db;