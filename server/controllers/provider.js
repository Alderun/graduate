import mysql from "mysql2"

const dbPool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "graduate"
}).promise()

export const getAll = async (req, res) => {
    if (req.user) {
        const [result] = await dbPool.query(`SELECT * FROM provider`)
        res.json(result)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}