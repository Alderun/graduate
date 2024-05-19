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

export const createNews = async (req, res) => {
    if (req.user) {
        const newNews = {
            news_id: uuidv4(),
            news_title: req.body.title,
            news_text: req.body.text
        }
        await dbPool.query(`INSERT INTO news (id, title,text) VALUES("${newNews.news_id}", "${newNews.news_title}", "${newNews.news_text}")`)
        res.status(201).json(newNews)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const deleteNews = async (req, res) => {
    if (req.user) {
        await dbPool.query(`DELETE FROM news WHERE id="${req.body.id}"`)
        res.status(202).json({ message: 'ok' })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const editNews = async (req, res) => {
    if (req.user) {
        await dbPool.query(`UPDATE news SET title = "${req.body.title}",text = "${req.body.text}"  WHERE id="${req.body.id}"`)
        const [result] = await dbPool.query(`SELECT * FROM news`)
        res.status(202).json(result)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

export const getAll = async (req, res) => {
    if (req.user) {
        const [result] = await dbPool.query(`SELECT * FROM news`)
        res.json(result)
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}