const mysql = require('mysql2/promise')
const config = require('./config')

// const conn = async () => {
//     const data = await mysql.createConnection(config)
//     const [rows, fields] = await data.execute('select * from base')
//     console.log(rows)
//     data.end()
// }
// conn()

async function main(){
    const conn = await mysql.createConnection(config)
    const [rows, fields] = await conn.execute('select * from base where id = 2')
    // console.log(rows[0]['firstname'])
    // await conn.execute(`update base set firstname="${rows[0]['firstname']}" where id = 2`)
    conn.end()
    return rows
}

async function f (){
    let a = await main()
    console.log(a)
}
f()