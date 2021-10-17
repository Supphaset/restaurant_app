import dotenv from 'dotenv'
import table from './data/table.js'
import menu from './data/menu.js'
import Table from './models/tableModel.js'
import Menu from './models/menuModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try{
        await Table.deleteMany()
        await Menu.deleteMany()


        await Table.insertMany(table)
        await Menu.insertMany(menu)
        console.log("Data imported!")
        process.exit()
    } catch(error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Menu.deleteMany()
        await Table.deleteMany()

        console.log("Data destroyed!")
        process.exit()
    } catch(error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] == '-d'){
    destroyData()
}else{
    importData()
}