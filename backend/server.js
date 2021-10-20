import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import tableRoutes from './routes/tableRoutes.js'
import menuRoutes from './routes/menuRoutes.js'
import { Server } from 'socket.io'
import { createServer } from 'http'
import Cors from 'cors'

dotenv.config()

connectDB()

const app = express()
// const server = createServer(app); 
// const io = new Server(server, {
//     cors:{
//         'origin' : '*',
//         'methods' : ['GET', 'POST', 'PUT', 'DELETE'],
//         'allowedHeaders':[],
//         'credentials':true
//     }
// });
// app.use(Cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.use('/api/menus',menuRoutes)
app.use('/api/tables',tableRoutes)

// io.on('connection',(socket)=>{
//     console.log('user connected')
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

