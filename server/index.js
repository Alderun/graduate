import express from "express"
import path from "path";
import multer from "multer";
import { authRouter } from "./routes/auth.js";
import { auth } from "./controllers/auth.js";
import cookieParser from "cookie-parser";
import https from "https";
import fs from "fs";
import cors from "cors"
import { newsRouter } from "./routes/news.js";
import { providerRouter } from "./routes/provider.js";
import { reservedRouter } from "./routes/reserved.js";
import { reviewsRouter } from "./routes/reviews.js";
import { ticketRouter } from "./routes/ticket_reviews.js";

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });

const PORT = process.env.PORT ?? 3000
const app = express()
const __dirname = path.resolve()

app.use(cors({
    origin: "https://localhost:10888",
    methods: "GET,PUT,DELETE,POST,OPTIONS",
    credentials: true
}))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.json())
app.use(multer().array("files", 5))
app.use(cookieParser("1a2b-3c4d-5e6f-7g8h"))
app.use(auth({
    key: '1a2b-3c4d-5e6f-7g8h'
}))
app.use(authRouter)
app.use(newsRouter)
app.use(providerRouter)
app.use(reservedRouter)
app.use(reviewsRouter)
app.use(ticketRouter)

https
    .createServer({
        cert: fs.readFileSync(`${__dirname}/cert.pem`),
        key: fs.readFileSync(`${__dirname}/key.pem`)
    }, app)
    .listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}...`)
    })

