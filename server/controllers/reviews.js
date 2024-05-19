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

export const createReviews = async (req, res) => {
    if (req.user) {
        const newReviews = {
            reviews_id: uuidv4(),
            reviews_text: req.body.text,
            reviews_rating: req.body.rating
        }
        await dbPool.query(`INSERT INTO reviews (id, text, rating) VALUES("${newReviews.reviews_id}", "${newReviews.reviews_text}", "${newReviews.reviews_rating}")`)
        res.status(201).json(newReviews)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const getAll = async (req, res) => {
    if (req.user) {
        const [result] = await dbPool.query(`SELECT * FROM reviews`)
        res.json(result)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}