const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'memo',
})

module.exports = {
    async run(sql) {
        return new Promise((resolve) => {
            try {
                pool.getConnection((err, conn) => {
                    if (err) throw err;
                    conn.query(sql, (err, rows, fields) => {
                        if (err) throw err;
                        conn.release();
                        resolve(rows);
                    })
                })
            } catch (err) {
                console.error("getConn Error" + err)
            }
        })
    }
}