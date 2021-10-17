import asyncHandle from 'express-async-handler'
import Table from '../models/tableModel.js'


const getTableByZone = asyncHandle(async (req,res)=> {
    const tables = await Table.find({zone:req.params.zone})
    res.json(tables)
})

const getTableById = asyncHandle(async(req,res)=>{
    const table = await Table.findById(req.params.id)
    res.json(table)
})

const updateTableOrder = asyncHandle(async(req,res) =>{
    const table = await Table.findById(req.params.id)
    if(table){
        table.order = req.body
        table.isOrder = true
        const updatedTable = await table.save()
        res.json(updatedTable)
    }else{
        res.status(404)
        throw new Error('Table not found')
    }
})

const clearTableOrder = asyncHandle(async(req,res) =>{
    const table = await Table.findById(req.params.id)
    if(table){
        table.order = []
        table.isOrder = false
        const updatedTable = await table.save()
        res.json(updatedTable)
    }else{
        res.status(404)
        throw new Error('Table not found')
    }
})

export {getTableByZone,getTableById,updateTableOrder,clearTableOrder}