const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'Alex1510',
    database: 'nodejs',
    password: 'qqbxab8Nw7cfzlC2'
});

conn.connect(err => {
    if(err){
        console.log(err)
    }
    else {
        console.log('Database ==== ok')
    }
});

let query = "SELECT email FROM `base` "

conn.query(query, (err, result, field) => {
    console.log(err)
    console.log(result[0].lastname)
    // console.log(field)
})

conn.end(err => {
    if(err){
        console.log(err)
    }
    else {
        console.log('Database ==== close')
    }
})

