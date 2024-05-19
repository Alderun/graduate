import crypto from "crypto"
import { v4 as uuid4 } from "uuid"
import mysql from "mysql2";

const dbPool = mysql.createPool({
    connectionLimit: 5,
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "graduate"
}).promise()
let options

const createSession = async (req, res) => {
    const [result] = await dbPool.query(`SELECT * FROM users WHERE u_login="${req.body['login']}" AND u_password="${req.body['password']}"`)
    const user = result[0]
    if (user) {
        const head = Buffer
            .from(JSON.stringify({ alg: 'HS256', typ: 'jwt' }))
            .toString("base64")
        const body = Buffer
            .from(JSON.stringify({ u_id: user['u_id'] }))
            .toString("base64")
        const signature = crypto
            .createHmac('SHA256', options.key)
            .update(`${head}.${body}`)
            .digest('base64')
        res.cookie("jwt", `${head}.${body}.${signature}`, { httpOnly: true, secure: true, sameSite: "none" }).cookie("access", user['u_role']).json({ message: "Authorization complete" })
    } else {
        res.status(404).json({ message: "User not found" })
    }
}

export const authUser = async (req, res) => {
    await createSession(req, res)
}

export const createUser = async (req, res) => {
    const [countQueryResult] = await dbPool.query(`SELECT COUNT(*) as count FROM users WHERE u_login="${req.body['login']}"`)
    if (countQueryResult[0].count === 0) {
        const id = uuid4()
        await dbPool.query(`INSERT INTO users (u_id, u_login, u_password, u_role, u_surname, u_name) VALUES("${id}", "${req.body['login']}", "${req.body['password']}", 0, "${req.body['surname']}","${req.body['name']}")`)
        await createSession(req, res)
    } else {
        res.status(400).json({ message: "User already exists" })
    }
}

export const auth = (o) => {
    options = o
    return (req, res, next) => {
        if (req.cookies['jwt']) {
            const tokenParts = req.cookies['jwt'].split('.')
            const signature = crypto
                .createHmac('SHA256', options.key)
                .update(`${tokenParts[0]}.${tokenParts[1]}`)
                .digest('base64')
            if (signature === tokenParts[2])
                req.user = JSON.parse(Buffer
                    .from(tokenParts[1], 'base64')
                    .toString('utf8')
                )
        }
        next()
    }
}