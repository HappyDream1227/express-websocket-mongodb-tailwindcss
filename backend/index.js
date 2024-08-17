import express from "express"
import http from "http"
import { WebSocketServer } from "ws";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./models/_connectDB.js"
import comments from "./routes/comments.route.js"

dotenv.config()
connectDB()

const app = express()
const port = process.env.SERVER_PORT || 8000

app.use(cors())
app.use(express.json())

app.use("/api/comments/", comments)
app.use("*", (req, res) => res.status(200).json({ success: "welcome !!!"}))

const server = http.createServer(app)
const wsServer = new WebSocketServer({server})
wsServer.on('connection', (ws) => {
  console.log('websocket connected !')
  ws.on('message', (message) => {
    console.log('Received : ', message.toString())
    ws.send(`You sent ${message}`)
  })
})

server.listen(port, () => {
  console.log('server started at port', port);
})


export default app

