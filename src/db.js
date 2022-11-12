const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sandrito13291995',
    database: 'ospj_bd'
})


connection.connect((err) => {
    if(err) throw err
    console.log('Conexión realizada');
})



export default connection;