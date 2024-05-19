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

export const createTicket = async (req, res) => {
    if (req.user) {
        const newTicket = {
            ticket_id: uuidv4(),
            ticket_text: req.body.text,
            ticket_rating: req.body.rating
        }
        await dbPool.query(`INSERT INTO ticket (id, text, rating) VALUES("${newTicket.ticket_id}", "${newTicket.ticket_text}", "${newTicket.ticket_rating}")`)
        res.status(201).json(newTicket)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const deleteTicket = async (req, res) => {
    if (req.user) {
        await dbPool.query(`DELETE FROM ticket WHERE id="${req.body.id}"`)
        res.status(202).json({ message: 'ok' })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const getAll = async (req, res) => {
    if (req.user) {
        const [result] = await dbPool.query(`SELECT * FROM ticket`)
        res.json(result)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}