import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import tableRoutes from './routes/tableRoutes.js'
import menuRoutes from './routes/menuRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.use('/api/menus',menuRoutes)
app.use('/api/tables',tableRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))