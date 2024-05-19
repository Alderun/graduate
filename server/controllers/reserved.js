import { v4 as uuidv4 } from 'uuid';
import mysql from "mysql2"

const dbPool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "graduate"
}).promise()

export const createReserved = async (req, res) => {
    if (req.user) {
        const newReserved = {
            reserved_id: uuidv4(),
            reserved_userId: req.body.title,
            reserved_date: req.body.text,
            reserved_provide: req.body.provide
        }
        await dbPool.query(`INSERT INTO reserved (id, user_id, date, provide) VALUES("${newReserved.reserved_id}", "${newReserved.reserved_userId}", "${newReserved.reserved_date}", "${newReserved.reserved_provide}")`)
        res.status(201).json(newReserved)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const deleteReserved = async (req, res) => {
    if (req.user) {
        await dbPool.query(`DELETE FROM reserved WHERE id="${req.body.id}"`)
        res.status(202).json({ message: 'ok' })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const getReserved = async (req, res) => {
    if (req.user) {
        const [result] = await dbPool.query(`SELECT * FROM reserved`)
        res.json(result)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}